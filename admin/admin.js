import { firebaseConfig, adminUid } from './firebase-config.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { initBlogManager } from './blog-manager.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const authLoading = document.getElementById('authLoading');
const loginShell = document.getElementById('loginShell');
const dashboardShell = document.getElementById('dashboardShell');
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordToggle = document.getElementById('passwordToggle');
const loginButton = document.getElementById('loginButton');
const loginSpinner = document.getElementById('loginSpinner');
const formError = document.getElementById('formError');
const configBanner = document.getElementById('configBanner');
const logoutButton = document.getElementById('logoutButton');
const greetingHeading = document.getElementById('greetingHeading');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const publishedBlogsCount = document.getElementById('publishedBlogsCount');
const draftBlogsCount = document.getElementById('draftBlogsCount');
const monthlyBlogStatus = document.getElementById('monthlyBlogStatus');
const moduleContent = document.getElementById('moduleContent');
const activityHeading = document.getElementById('activityHeading');
const dashboardTitle = document.getElementById('dashboardTitle');
const resumeRequestsCount = document.getElementById('resumeRequestsCount');
const visitorsPanel = document.getElementById('visitorsPanel');
const telegramPanel = document.getElementById('telegramPanel');
const visitorsTableBody = document.getElementById('visitorsTableBody');
const refreshVisitors = document.getElementById('refreshVisitors');
const telegramForm = document.getElementById('telegramForm');
const telegramChatId = document.getElementById('telegramChatId');
const telegramStatus = document.getElementById('telegramStatus');

let currentSection = 'dashboard';
let blogManager;

function isConfigReady() {
  return Object.values(firebaseConfig).every((value) => {
    if (typeof value !== 'string') return true;
    const normalized = value.trim();
    return normalized.length > 0 && !normalized.includes('YOUR_') && !normalized.includes('your_');
  });
}

function showAuthLoading() {
  authLoading.hidden = false;
  loginShell.hidden = true;
  dashboardShell.hidden = true;
}

function showLoginView() {
  authLoading.hidden = true;
  loginShell.hidden = false;
  dashboardShell.hidden = true;
}

function showDashboardView() {
  authLoading.hidden = true;
  loginShell.hidden = true;
  dashboardShell.hidden = false;
  renderGreeting();
  if (blogManager) {
    blogManager.renderDashboard();
  }
}

function renderGreeting() {
  const hours = new Date().getHours();
  let greeting = 'Good morning';

  if (hours >= 12 && hours < 17) {
    greeting = 'Good afternoon';
  } else if (hours >= 17) {
    greeting = 'Good evening';
  }

  greetingHeading.textContent = greeting;
}

function setFormBusy(isBusy) {
  loginButton.disabled = isBusy;
  loginSpinner.hidden = !isBusy;
  loginButton.querySelector('.btn-label').style.opacity = isBusy ? '0.7' : '1';
}

function setFormEnabled(isEnabled) {
  emailInput.disabled = !isEnabled;
  passwordInput.disabled = !isEnabled;
  passwordToggle.disabled = !isEnabled;
  loginButton.disabled = !isEnabled;
}

function showFormError(message) {
  formError.textContent = message;
  formError.hidden = false;
}

function clearFormError() {
  formError.textContent = '';
  formError.hidden = true;
}

function setConfigBannerVisible(visible) {
  configBanner.hidden = !visible;
}

function syncPasswordToggle() {
  const isHidden = passwordInput.type === 'password';
  passwordToggle.innerHTML = isHidden ? '<i class="bi bi-eye"></i>' : '<i class="bi bi-eye-slash"></i>';
  passwordToggle.setAttribute('aria-label', isHidden ? 'Show password' : 'Hide password');
  passwordToggle.setAttribute('aria-pressed', String(!isHidden));
}

passwordToggle.addEventListener('click', () => {
  const nextType = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = nextType;
  syncPasswordToggle();
});

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  clearFormError();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    showFormError('Please enter both your email and password.');
    return;
  }

  if (!isConfigReady()) {
    showFormError('Firebase configuration is not ready. Add your real config values first.');
    return;
  }

  setFormBusy(true);

  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    let message = 'Unable to sign in. Please check your credentials.';

    if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      message = 'Incorrect email or password.';
    } else if (error.code === 'auth/too-many-requests') {
      message = 'Too many attempts. Please wait a moment and try again.';
    }

    showFormError(message);
  } finally {
    setFormBusy(false);
  }
});

logoutButton.addEventListener('click', async () => {
  try {
    await signOut(auth);
  } catch (error) {
    showFormError('Unable to log out right now. Please try again.');
  }
});


async function apiRequest(url, options = {}) {
  if (!auth.currentUser) throw new Error('Not authenticated.');
  const token = await auth.currentUser.getIdToken();
  const headers = { ...(options.headers || {}), Authorization: `Bearer ${token}` };
  const response = await fetch(url, { ...options, headers });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || 'Request failed.');
  return data;
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

async function loadResumeRequests() {
  try {
    const data = await apiRequest('/api/admin/resume-requests?limit=100');
    resumeRequestsCount.textContent = data.items.length;
    visitorsTableBody.innerHTML = data.items.length ? data.items.map(item => `<tr><td>${escapeHtml(item.type === 'hr_manager' ? 'HR / Manager' : 'Individual')}</td><td><strong>${escapeHtml(item.name)}</strong><br><small>${escapeHtml(item.email)}</small></td><td>${escapeHtml(item.mobile)}</td><td>${escapeHtml(item.company || '—')}</td><td>${item.createdAt ? new Date(item.createdAt).toLocaleString('en-IN') : '—'}</td><td>${item.downloadedAt ? 'Yes' : 'No'}</td></tr>`).join('') : '<tr><td colspan="6">No resume requests yet.</td></tr>';
  } catch (error) {
    visitorsTableBody.innerHTML = `<tr><td colspan="6">${escapeHtml(error.message)}</td></tr>`;
  }
}

async function loadTelegramSettings() {
  try {
    const data = await apiRequest('/api/admin/settings/telegram');
    telegramChatId.value = data.adminChatId || '';
  } catch (error) {
    telegramStatus.textContent = error.message;
  }
}

refreshVisitors?.addEventListener('click', loadResumeRequests);
telegramForm?.addEventListener('submit', async event => {
  event.preventDefault();
  telegramStatus.textContent = 'Saving…';
  try {
    await apiRequest('/api/admin/settings/telegram', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({adminChatId:telegramChatId.value.trim()}) });
    telegramStatus.textContent = 'Connected. Test message sent.';
  } catch (error) { telegramStatus.textContent = error.message; }
});

function switchSection(section) {
  currentSection = section;
  if (!auth.currentUser) {
    return;
  }

  const navButtons = document.querySelectorAll('.nav-link');
  navButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.section === section);
  });

  visitorsPanel.hidden = section !== 'visitors';
  telegramPanel.hidden = section !== 'telegram';
  const activityPanel = moduleContent.closest('.panel-card');
  if (activityPanel) activityPanel.hidden = section === 'visitors' || section === 'telegram';

  if (section === 'visitors') {
    dashboardTitle.textContent = 'Resume Requests';
    activityHeading.textContent = 'Resume Requests';
    loadResumeRequests();
  } else if (section === 'telegram') {
    dashboardTitle.textContent = 'Telegram';
    activityHeading.textContent = 'Telegram';
    loadTelegramSettings();
  } else if (section === 'blogs') {
    dashboardTitle.textContent = 'Blog Management';
    activityHeading.textContent = 'Blog Management';
    if (blogManager) {
      blogManager.renderBlogsView();
    }
  
  } else {
    dashboardTitle.textContent = 'Portfolio Dashboard';
    activityHeading.textContent = 'Blog Activity';
    if (blogManager) {
      blogManager.renderDashboard();
    }
  }
}

sidebar.querySelectorAll('.nav-link').forEach((button) => {
  button.addEventListener('click', () => switchSection(button.dataset.section));
});

function toggleSidebar(force) {
  const shouldOpen = typeof force === 'boolean' ? force : !sidebar.classList.contains('is-open');
  sidebar.classList.toggle('is-open', shouldOpen);
  sidebarOverlay.hidden = !shouldOpen;
  menuToggle.setAttribute('aria-expanded', String(shouldOpen));
}

menuToggle.addEventListener('click', () => toggleSidebar());
sidebarOverlay.addEventListener('click', () => toggleSidebar(false));

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    sidebar.classList.remove('is-open');
    sidebarOverlay.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

onAuthStateChanged(auth, (user) => {
  if (!isConfigReady()) {
    setConfigBannerVisible(true);
    setFormEnabled(false);
    showLoginView();
    return;
  }

  setConfigBannerVisible(false);
  setFormEnabled(true);
  syncPasswordToggle();

  if (user) {
    if (!blogManager) {
      blogManager = initBlogManager({
        auth,
        db,
        publishedBlogsCount,
        draftBlogsCount,
        monthlyBlogStatus,
        moduleContent,
        activityHeading,
        dashboardTitle,
        greetingHeading
      });
    }
    showDashboardView();
    switchSection(currentSection);
  } else {
    showLoginView();
  }
});

showAuthLoading();
syncPasswordToggle();
