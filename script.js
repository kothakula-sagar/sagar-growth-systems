/* =========================================================
   Kothakula Sagar — Portfolio
   Data + rendering
========================================================= */

/* ---------- What I Do ---------- */
const whatIDo = [
  { icon:'bi-search', title:'SEO', desc:'Technical SEO, on-page SEO, content optimization and authority building.' },
  { icon:'bi-megaphone', title:'Paid Advertising', desc:'Meta Ads, Google Ads, audience targeting, funnels and lead generation.' },
  { icon:'bi-bar-chart-line', title:'Analytics', desc:'GA4, GSC, Looker Studio and data-driven insights for better marketing decisions.' },
  { icon:'bi-robot', title:'AI & Automation', desc:'AI-assisted content, automation workflows and productivity systems that support repeatable growth.' }
];

/* ---------- Approach workflow ---------- */
const workflow = [
  { icon:'bi-eye', title:'Understand', desc:'Deep dive into the problem and goals.' },
  { icon:'bi-clipboard-data', title:'Research', desc:'Market, audience & competitor research.' },
  { icon:'bi-diagram-3', title:'Strategy', desc:'Data-driven strategy and execution plan.' },
  { icon:'bi-rocket-takeoff', title:'Execute', desc:'Implement, test and optimize campaigns.' },
  { icon:'bi-graph-up-arrow', title:'Analyze', desc:'Measure results and derive insights.' }
];

/* ---------- Experience Journey ---------- */
const experienceJourney = [
  { month:'01', title:'Building the SEO Foundation',
    description:'Started by understanding the digital presence of ABRA Group businesses and implementing foundational SEO improvements.',
    focus:['Keyword Research','On-page SEO','Search Console','Technical SEO'],
    learning:'Search visibility starts with technical structure and relevant content.' },
  { month:'02', title:'Expanding Into Social & Meta Advertising',
    description:'Expanded into social media management and Meta advertising activities across ABRA Group entities.',
    focus:['Meta Ads','Social Media','Lead Generation','Campaign Creatives'],
    learning:'Paid media needs clear targeting, relevant creative and consistent follow-up.' },
  { month:'03', title:'Paid Search & Lead Generation',
    description:'Worked on Google Ads and lead-generation workflows focused on connecting search intent with business enquiries.',
    focus:['Google Ads','Keyword Planning','Search Campaigns','Lead Capture'],
    learning:'User intent and message relevance strongly influence lead quality.' },
  { month:'04', title:'App & E-commerce Growth',
    description:'Focused on app promotion and e-commerce visibility activities, especially for ABRA Zylo.',
    focus:['App Promotion','E-commerce','Catalog Ads','Product Visibility'],
    learning:'Digital growth requires connecting product visibility, advertising and user experience.' },
  { month:'05', title:'SEO Meets Product Development',
    description:'Started exploring how repetitive SEO activities could be converted into scalable marketing tools.',
    focus:['SEO Automation','AI','Product SEO','Web Development'],
    learning:'Repeated marketing problems can sometimes be solved by building reusable tools.' },
  { month:'06', title:'From Marketing Tasks to Automation',
    description:'Explored CRM and automation workflows to connect marketing-generated leads with business operations.',
    focus:['Automation','CRM','Lead Workflows','AI'],
    learning:'Marketing becomes more scalable when campaigns, leads and follow-up systems are connected.' }
];

/* ---------- Education ---------- */
const education = [
  { period:'2023 — 2025', degree:'Master of Business Administration', shortName:'MBA', specialization:'Marketing & Information Technology (IT)', institution:'Akshara Institute of Management and Technology', tags:['Marketing','Information Technology'], featured:true },
  { period:'2020 — 2023', degree:'Bachelor of Business Administration', shortName:'BBA', specialization:'General', institution:'MVR Degree College', tags:['Business Administration'], featured:false },
  { period:'2018 — 2020', degree:'Intermediate', shortName:'CEC', specialization:'Commerce, Economics & Civics', institution:'Sai Sri Chaitanya Junior College', tags:['Commerce','Economics','Civics'], featured:false },
  { period:'2018', degree:'SSLC (10th)', shortName:'', specialization:'', institution:'Don Bosco EM High School', tags:[], featured:false }
];

/* ---------- Featured Projects ---------- */
const projects = [
  { id:'abra-crm', title:'ABRA Logistics CRM', category:'CRM', subtitle:'Lead Management & Marketing Automation System', createdDate:'January 2026',
    problem:'Lead generation campaigns produced enquiries but lacked structured tracking, assignment and follow-up processes.',
    solution:'A lead management system connecting marketing leads to sales workflows with assignment, status tracking and simple reporting. This project was structured as a lightweight CRM to help teams manage campaigns and move enquiries through a more consistent process.',
    images:[
      'assets/images/projects/abra-logistic.png',
      'assets/images/projects/abra-design-build.png',
      'assets/images/projects/abra-zylo-seo-portal.png'
    ],
    features:[
      { title:'Automatic Lead Assignment', description:'Enquiries were routed into a simple workflow so the right team could respond quickly.' },
      { title:'Lead Status Management', description:'Each lead could move through custom stages to reflect progress and follow-up needs.' },
      { title:'Campaign Integration', description:'The interface connected inbound leads to a central view for better visibility across marketing activity.' }
    ],
    technologies:['HTML','CSS','JavaScript','Firebase'],
    screenshot:'assets/images/projects/abra-logistic.png', icon:'bi-diagram-3' },
  { id:'abra-zylo', title:'ABRA Zylo AI SEO Generator', category:'AI · SEO', subtitle:'SEO Content Workflow for Product Catalogs', createdDate:'February 2026',
    problem:'E-commerce sites need scalable SEO metadata and product content for many listings without relying on repetitive manual work.',
    solution:'An AI-assisted workflow was created to draft SEO titles, meta descriptions, product copy and supporting content for review. The experience focused on speed, consistency and reducing the manual burden of repeated SEO tasks.',
    images:[
      'assets/images/projects/abra-zylo-seo-portal.png',
      'assets/images/projects/abra-logistic.png',
      'assets/images/projects/abra-design-build.png'
    ],
    features:[
      { title:'AI-Assisted SEO Copy', description:'Drafts for titles, descriptions and supporting content were generated faster for review and refinement.' },
      { title:'Content Reuse', description:'Reusable templates helped maintain consistent structure across product pages.' },
      { title:'Review Workflow', description:'The output was designed to be editable, so teams could refine copy before publishing.' }
    ],
    technologies:['HTML','CSS','JavaScript','Groq AI'],
    screenshot:'assets/images/projects/abra-zylo-seo-portal.png', icon:'bi-stars' },
  { id:'design-build-crm', title:'ABRA Design & Build CRM', category:'CRM', subtitle:'Construction Enquiry Management', createdDate:'March 2026',
    problem:'Construction enquiries arrived from many channels and needed organized follow-up so the team could keep track of progress.',
    solution:'A streamlined lead capture and status dashboard was introduced to route enquiries to the right teams and keep each opportunity visible. The system focused on clarity rather than complexity so it could be used by a fast-moving team.',
    images:[
      'assets/images/projects/abra-design-build.png',
      'assets/images/projects/abra-logistic.png',
      'assets/images/projects/abra-zylo-seo-portal.png'
    ],
    features:[
      { title:'Enquiry Routing', description:'Lead intake could be directed to the right team based on project type and stage.' },
      { title:'Follow-Up Tracking', description:'Each enquiry could be monitored through a visible status lifecycle.' },
      { title:'Simple Dashboard', description:'The dashboard presented the most important information in a clean, action-focused layout.' }
    ],
    technologies:['HTML','CSS','JavaScript','Firebase'],
    screenshot:'assets/images/projects/abra-design-build.png', icon:'bi-building' },
  { id:'fiora-ai', title:'Fiora AI', category:'AI · PRODUCT', subtitle:'Financial Operations Support Experience', createdDate:'Placeholder',
    problem:'Financial workflows often require a clear way to capture operational requests and turn them into structured actions.',
    solution:'This concept focuses on presenting AI-assisted support in a way that helps users understand requests, next actions and available workflows. More detailed product content can be added later as the project evolves.',
    images:[
      'assets/images/projects/finora.png',
      'assets/images/projects/abra-logistic.png'
    ],
    features:[
      { title:'Request Intake', description:'A clear interface for submitting and organizing financial support requests.' },
      { title:'Workflow Clarity', description:'The experience helps users understand what happens next after submission.' },
      { title:'Scalable Product Structure', description:'The layout is ready to expand with additional workflows and modules when needed.' }
    ],
    technologies:['HTML','CSS','JavaScript','Firebase'],
    screenshot:'assets/images/projects/finora.png', icon:'bi-cpu' }
];

/* ---------- Marketing Work ---------- */
const marketingWork = [
  { id:'seo', number:'01', category:'ORGANIC', title:'SEO & Technical SEO',
    shortDescription:'Search visibility, technical optimization and organic growth.',
    introduction:'Worked across ABRA Group websites to improve crawling, indexing, metadata and on-page relevance to grow organic visibility.',
    image:'assets/projects/seo-technical-seo.png', icon:'bi-search',
    activities:[{title:'Technical SEO',description:'Site structure, crawlability and performance improvements.'},
      {title:'Indexing & Sitemaps',description:'Used Search Console to diagnose indexing issues and manage sitemaps.'},
      {title:'On-Page SEO',description:'Metadata, headings, structured content and alt attributes.'},
      {title:'Search Performance',description:'Monitored organic visibility with GA4 and Search Console.'}],
    tools:['Google Search Console','GA4','SEMrush','Ahrefs'],
    learning:'Search visibility depends on technical structure, indexing, content relevance and continuous performance monitoring.' },
  { id:'meta', number:'02', category:'PAID SOCIAL', title:'Meta Advertising',
    shortDescription:'Lead generation, catalog and app-promotion campaigns.',
    introduction:'Planned and executed Meta campaigns including audience strategy, catalog feeds and creative testing for lead and app campaigns.',
    image:'assets/projects/meta-advertising.png', icon:'bi-facebook',
    activities:[{title:'Lead Ads',description:'Optimized lead-gen funnels and form capture strategies.'},
      {title:'Catalog Ads',description:'Managed product feeds and dynamic creative for catalog campaigns.'},
      {title:'Audience Targeting',description:'Built and refined lookalike and retargeting audiences.'}],
    tools:['Meta Ads Manager'],
    learning:'Creative tests and audience segmentation drive efficient lead generation on social platforms.' },
  { id:'google-ads', number:'03', category:'PAID SEARCH', title:'Google Ads',
    shortDescription:'Search campaigns, keyword intent and lead generation.',
    introduction:'Managed search and traffic campaigns focused on connecting high-intent queries to relevant offers and lead capture.',
    image:'assets/projects/google-ads.png', icon:'bi-google',
    activities:[{title:'Search Campaigns',description:'Keyword planning and intent mapping.'},
      {title:'Traffic & Leads',description:'Optimized bidding, landing pages and conversion tracking.'}],
    tools:['Google Ads'],
    learning:'Matching intent with landing experience increases lead quality and campaign efficiency.' },
  { id:'ecommerce', number:'04', category:'E-COMMERCE', title:'ABRA Zylo Growth',
    shortDescription:'Product visibility, catalog campaigns and e-commerce growth.',
    introduction:'Supported e-commerce growth via product SEO, catalog advertising and promotional creatives to improve discovery and sales.',
    image:'assets/projects/abra-zylo-growth.png', icon:'bi-cart3',
    activities:[{title:'Product SEO',description:'Optimised product pages and metadata.'},
      {title:'Catalog Campaigns',description:'Managed feeds and catalog-based creative.'}],
    tools:['Meta Ads','OpenCart','Google Search Console'],
    learning:'Catalog health, product information and creative combine to influence e-commerce performance.' },
  { id:'creative', number:'05', category:'CREATIVE', title:'Content & Campaign Creatives',
    shortDescription:'Campaign content, promotional creatives and advertising assets.',
    introduction:'Created campaign creatives and social assets using a mix of design tools and AI-assisted workflows to scale production.',
    image:'assets/projects/content-campaign-creatives.png', icon:'bi-brush',
    activities:[{title:'Ad Creatives',description:'Concepts, formats and design for paid placements.'},
      {title:'Social Content',description:'Short-form content and story-led creatives for engagement.'}],
    tools:['Canva','AI Image Tools','AI Video Tools'],
    learning:'A clear creative brief and fast iteration improve campaign performance and production velocity.' },
  { id:'analytics', number:'06', category:'DATA', title:'Analytics & Reporting',
    shortDescription:'Marketing performance, traffic and search insights.',
    introduction:'Used GA4, Search Console and campaign data to identify issues, measure outcomes and inform optimisation decisions.',
    image:'assets/projects/analytics-reporting.png', icon:'bi-graph-up',
    activities:[{title:'Campaign Reporting',description:'Regular reporting and insight generation.'},
      {title:'Traffic Analysis',description:'Understanding sources and behaviour to improve funnels.'}],
    tools:['GA4','Search Console'],
    learning:'Reliable data, consistent tagging and iterative reviews are essential for continuous improvement.' }
];

/* ---------- Principles ---------- */
const principles = [
  { icon:'bi-clipboard-data', title:'Data First', desc:'Every decision is backed by data and insights.' },
  { icon:'bi-lightning-charge', title:'Test & Learn', desc:'Small tests, learn fast and scale what works.' },
  { icon:'bi-diagram-3', title:'Systems Thinking', desc:'Build repeatable systems, not one-off campaigns.' },
  { icon:'bi-gear', title:'Automation', desc:'Automate repetitive tasks to focus on strategy.' },
  { icon:'bi-bullseye', title:'Impact Driven', desc:'Focus on metrics that truly move the business.' }
];

/* ---------- Tools ---------- */
const tools = [
  { icon:'bi-bar-chart', label:'Google Analytics' },
  { icon:'bi-search', label:'Google Search Console' },
  { icon:'bi-google', label:'Google Ads' },
  { icon:'bi-facebook', label:'Meta Ads Manager' },
  { icon:'bi-easel', label:'Looker Studio' },
  { icon:'bi-graph-up', label:'GA4' },
  { icon:'bi-wordpress', label:'WordPress' },
  { icon:'bi-shop', label:'Shopify' },
  { icon:'bi-code-slash', label:'HTML5 / CSS3 / JS' },
  { icon:'bi-fire', label:'Firebase' },
  { icon:'bi-vector-pen', label:'Figma' },
  { icon:'bi-stars', label:'AI Tools' },
  { icon:'bi-journal-text', label:'Notion' }
];

/* ---------- Certifications ---------- */
const certifications = [
  { icon:'bi-google', name:'Google Ads', issuer:'Search Certification' },
  { icon:'bi-bar-chart-fill', name:'Google Analytics', issuer:'Individual Qualification' },
  { icon:'bi-facebook', name:'Meta', issuer:'Blueprint Certified Media Buying' },
  { icon:'bi-hexagon', name:'HubSpot', issuer:'Inbound Marketing Certification' },
  { icon:'bi-google', name:'Google', issuer:'Digital Garage Fundamentals' }
];

/* =========================================================
   Helpers
========================================================= */
function escapeHtml(v){
  return String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function mediaFallback(icon){
  return `<div class="media-fallback"><i class="bi ${icon}"></i></div>`;
}
function imgWithFallback(src, alt, icon){
  return `<img src="${src}" alt="${escapeHtml(alt)}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'media-fallback',innerHTML:'<i class=\\'bi ${icon}\\'></i>'}))">`;
}
function shouldRender(el){
  return el && !el.hasChildNodes();
}
function attachWorkCardListeners(el){
  if(!el) return;
  el.querySelectorAll('.work-card').forEach(card => {
    if(card.dataset.workAttached === 'true') return;
    const index = Number(card.dataset.index);
    if(Number.isFinite(index)){
      card.addEventListener('click', () => openWorkModal(index));
      card.dataset.workAttached = 'true';
    }
  });
}

/* =========================================================
   Renderers
========================================================= */
function renderWhatIDo(){
  const el = document.getElementById('whatIDoGrid');
  if(!shouldRender(el)) return;
  el.innerHTML = whatIDo.map(item => `
    <div class="feature-card reveal-up">
      <div class="feature-icon"><i class="bi ${item.icon}"></i></div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `).join('');
}

function renderWorkflow(){
  const el = document.getElementById('workflowDiagram');
  if(!shouldRender(el)) return;
  const steps = workflow.map((s,i) => `
    <div class="workflow-step">
      <div class="wf-icon"><i class="bi ${s.icon}"></i></div>
      <div class="wf-title">${String(i+1).padStart(2,'0')} ${s.title}</div>
      <div class="wf-desc">${s.desc}</div>
    </div>
    ${i < workflow.length-1 ? '<span class="workflow-arrow"><i class="bi bi-arrow-right"></i></span>' : ''}
  `).join('');
  el.innerHTML = `
    <div class="workflow-row">${steps}</div>
    <div class="workflow-scale">
      <div class="wf-title">AUTOMATE &amp; SCALE</div>
      <div class="wf-desc">Build systems that generate consistent growth.</div>
    </div>
  `;
}

function renderTimeline(){
  const el = document.getElementById('timelineTrack');
  if(!shouldRender(el)) return;
  el.innerHTML = experienceJourney.map(item => `
    <div class="timeline-item reveal-up">
      <div class="timeline-num">${item.month}</div>
      <div class="timeline-card">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.description)}</p>
        <div class="timeline-focus">${item.focus.map(f=>`<span>${escapeHtml(f)}</span>`).join('')}</div>
        <div class="timeline-learning"><b>What I learned:</b> ${escapeHtml(item.learning)}</div>
      </div>
    </div>
  `).join('');
}

function renderEducation(){
  const el = document.getElementById('educationTimeline');
  if(!el) return;
  if(shouldRender(el)){
    el.innerHTML = education.map(item => `
      <div class="education-item reveal-up ${item.featured ? 'is-featured' : ''}">
        <div class="education-marker">${item.shortName ? item.shortName : '•'}</div>
        <div class="education-card">
          <div class="education-period">${escapeHtml(item.period)}</div>
          <div class="education-degree">${escapeHtml(item.degree)}</div>
          ${item.shortName ? `<div class="education-short">${escapeHtml(item.shortName)}</div>` : ''}
          ${item.specialization ? `<div class="education-specialization">${escapeHtml(item.specialization)}</div>` : ''}
          <div class="education-institution">${escapeHtml(item.institution)}</div>
          ${item.tags && item.tags.length ? `<div class="education-tags">${item.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div>` : ''}
        </div>
      </div>
    `).join('');
  }
}

function renderProjects(){
  const el = document.getElementById('projectsGrid');
  if(!el) return;
  if(shouldRender(el)){
    el.innerHTML = projects.map(p => `
      <div class="proj-card reveal-up">
        <div class="proj-media">
          <span class="proj-tag">${p.category}</span>
          ${imgWithFallback(p.screenshot, p.title, p.icon)}
        </div>
        <div class="proj-body">
          <h3>${escapeHtml(p.title)}</h3>
          <p>${escapeHtml(p.problem)}</p>
          <div class="tag-row">${p.technologies.map(t=>`<span>${escapeHtml(t)}</span>`).join('')}</div>
          <a class="card-link case-study-trigger" href="#${p.id}" data-project-id="${p.id}">View Case Study <i class="bi bi-arrow-right"></i></a>
        </div>
      </div>
    `).join('');
  }
  bindCaseStudyTriggers();
}

function renderMarketingGrid(){
  const el = document.getElementById('marketingGrid');
  if(!el) return;
  if(!shouldRender(el)){
    attachWorkCardListeners(el);
    return;
  }
  el.innerHTML = marketingWork.map((item, idx) => `
    <div class="work-card reveal-up" data-index="${idx}">
      <div class="work-media">
        ${imgWithFallback(item.image, item.title, item.icon)}
      </div>
      <div class="work-body">
        <div class="work-num-cat"><span class="num">${item.number}</span><span>${item.category}</span></div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.shortDescription)}</p>
        <span class="card-link">View Work <i class="bi bi-arrow-right"></i></span>
      </div>
    </div>
  `).join('');
  attachWorkCardListeners(el);
}

function renderPrinciples(){
  const el = document.getElementById('principlesGrid');
  if(!shouldRender(el)) return;
  el.innerHTML = principles.map(p => `
    <div class="principle-card reveal-up">
      <i class="bi ${p.icon}"></i>
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
    </div>
  `).join('');
}

function renderTools(){
  const el = document.getElementById('toolRow');
  if(!shouldRender(el)) return;
  el.innerHTML = tools.map(t => `<span class="tool-chip"><i class="bi ${t.icon}"></i>${t.label}</span>`).join('');
}

function renderCertifications(){
  const el = document.getElementById('certRow');
  if(!shouldRender(el)) return;
  el.innerHTML = certifications.map(c => `
    <div class="cert-card reveal-up">
      <i class="bi ${c.icon}"></i>
      <h4>${escapeHtml(c.name)}</h4>
      <span>${escapeHtml(c.issuer)}</span>
    </div>
  `).join('');
}

/* =========================================================
   Work modal
========================================================= */
const backdrop = document.getElementById('workBackdrop');
const modal = document.getElementById('workModal');
const modalBody = document.getElementById('workModalBody');
const modalClose = document.getElementById('workModalClose');
const prevBtn = document.getElementById('workPrev');
const nextBtn = document.getElementById('workNext');
let currentIndex = 0;

function populateModal(item){
  modalBody.innerHTML = `
    <div class="wm-category">${item.number} · ${escapeHtml(item.category)}</div>
    <h2 id="workModalTitle">${escapeHtml(item.title)}</h2>
    <p class="wm-intro">${escapeHtml(item.introduction)}</p>
    <div class="wm-block">
      <h5>What I worked on</h5>
      <div class="wm-activities">${item.activities.map(a=>`<div><strong>${escapeHtml(a.title)}</strong><span>${escapeHtml(a.description)}</span></div>`).join('')}</div>
    </div>
    <div class="wm-block">
      <h5>Tools</h5>
      <div class="wm-tools">${item.tools.map(t=>`<span>${escapeHtml(t)}</span>`).join('')}</div>
    </div>
    <div class="wm-block">
      <h5>What I learned</h5>
      <div class="wm-learning">${escapeHtml(item.learning)}</div>
    </div>
  `;
}

function openWorkModal(index){
  currentIndex = index;
  populateModal(marketingWork[index]);
  backdrop.hidden = false;
  modal.classList.add('open');
  document.body.classList.add('modal-open');
  setTimeout(()=> modalBody.focus(), 60);
}
function closeWorkModal(){
  backdrop.hidden = true;
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
}
function navigateWork(delta){
  currentIndex = (currentIndex + delta + marketingWork.length) % marketingWork.length;
  populateModal(marketingWork[currentIndex]);
}

if(backdrop) backdrop.addEventListener('click', closeWorkModal);
if(modalClose) modalClose.addEventListener('click', closeWorkModal);
if(prevBtn) prevBtn.addEventListener('click', ()=>navigateWork(-1));
if(nextBtn) nextBtn.addEventListener('click', ()=>navigateWork(1));
document.addEventListener('keydown', (e) => {
  if(backdrop && !backdrop.hidden){
    if(e.key === 'Escape') closeWorkModal();
    if(e.key === 'ArrowRight') navigateWork(1);
    if(e.key === 'ArrowLeft') navigateWork(-1);
  }
});

/* =========================================================
   Case Study Modal
========================================================= */
const caseStudyBackdrop = document.getElementById('caseStudyBackdrop');
const caseStudyModal = document.getElementById('caseStudyModal');
const caseStudyContent = document.getElementById('caseStudyContent');
const caseStudyClose = document.getElementById('caseStudyClose');
let currentCaseStudyIndex = 0;
let caseStudyImageIndex = 0;
let lastCaseStudyTrigger = null;
let caseStudyTouchStartX = 0;
let caseStudyTouchEndX = 0;

function getProjectById(projectId){
  return projects.find(project => project.id === projectId) || projects[0];
}

function renderCaseStudy(project, imageIndex = 0){
  if(!caseStudyContent) return;
  caseStudyImageIndex = imageIndex;
  const images = Array.isArray(project.images) && project.images.length ? project.images : [project.screenshot];
  const features = Array.isArray(project.features) && project.features.length ? project.features : [];
  const technologies = Array.isArray(project.technologies) && project.technologies.length ? project.technologies : [];
  const currentImage = images[caseStudyImageIndex] || images[0];
  caseStudyContent.innerHTML = `
    <div class="case-study-header">
      <p class="case-study-eyebrow">${escapeHtml(project.category)}</p>
      <h2 class="case-study-title" id="caseStudyModalTitle">${escapeHtml(project.title)}</h2>
      ${project.subtitle ? `<p class="case-study-subtitle">${escapeHtml(project.subtitle)}</p>` : ''}
      <div class="case-study-meta">
        <div class="case-study-meta-item">
          <span>Created</span>
          <strong>${escapeHtml(project.createdDate || 'Placeholder')}</strong>
        </div>
      </div>
    </div>

    <div class="case-study-carousel" aria-label="Project image gallery">
      <div class="carousel-frame">
        <img src="${currentImage}" alt="${escapeHtml(project.title)} preview" loading="lazy" data-lightbox-src="${currentImage}">
        <div class="carousel-controls">
          <button type="button" class="carousel-prev" aria-label="Previous image"><i class="bi bi-chevron-left"></i></button>
          <button type="button" class="carousel-next" aria-label="Next image"><i class="bi bi-chevron-right"></i></button>
        </div>
        <div class="carousel-counter">${String(caseStudyImageIndex + 1).padStart(2, '0')} / ${images.length}</div>
      </div>
      <div class="carousel-thumbs" aria-label="Image thumbnails">
        ${images.map((img, index) => `<button class="carousel-thumb ${index === caseStudyImageIndex ? 'active' : ''}" type="button" aria-label="Show image ${index + 1}"><img src="${img}" alt="${escapeHtml(project.title)} thumbnail ${index + 1}" loading="lazy"></button>`).join('')}
      </div>
    </div>

    <section class="case-study-section">
      <p class="section-number">01</p>
      <h3>THE PROBLEM</h3>
      <p>${escapeHtml(project.problem || 'Problem details will be added soon.')}</p>
    </section>

    <section class="case-study-section">
      <p class="section-number">02</p>
      <h3>THE SOLUTION</h3>
      <p>${escapeHtml(project.solution || 'Solution details will be added soon.')}</p>
    </section>

    <section class="case-study-section">
      <p class="section-number">03</p>
      <h3>KEY FEATURES</h3>
      ${features.length ? `<div class="case-study-features">${features.map(feature => `<div class="case-study-feature"><h4>${escapeHtml(feature.title || 'Feature')}</h4><p>${escapeHtml(feature.description || '')}</p></div>`).join('')}</div>` : '<p>Feature details will be added soon.</p>'}
    </section>

    <section class="case-study-section">
      <p class="section-number">04</p>
      <h3>TECHNOLOGY USED</h3>
      <div class="case-study-tags">${technologies.length ? technologies.map(tech => `<span>${escapeHtml(tech)}</span>`).join('') : '<span>Details coming soon</span>'}</div>
    </section>

    <div class="case-study-nav">
      <button type="button" class="case-study-nav-prev" aria-label="Previous project"><i class="bi bi-arrow-left"></i> Previous Project</button>
      <button type="button" class="case-study-nav-next" aria-label="Next project">Next Project <i class="bi bi-arrow-right"></i></button>
    </div>
  `;

  attachCaseStudyEvents(project);
  caseStudyContent.focus();
}

function setCaseStudyProject(index, options = {}){
  const safeIndex = (index + projects.length) % projects.length;
  const project = projects[safeIndex];
  currentCaseStudyIndex = safeIndex;
  if(options.scrollTop !== false){
    const scrollEl = caseStudyContent ? caseStudyContent.closest('.case-study-scroll') : null;
    if(scrollEl) scrollEl.scrollTop = 0;
  }
  renderCaseStudy(project, options.imageIndex || 0);
  const url = `${window.location.pathname}${window.location.search}#${project.id}`;
  if(window.location.hash !== `#${project.id}`){
    window.history.pushState({ projectId: project.id }, '', url);
  }
}

function openCaseStudyModal(projectId){
  const projectIndex = projects.findIndex(project => project.id === projectId);
  if(projectIndex === -1) return;
  currentCaseStudyIndex = projectIndex;
  setCaseStudyProject(projectIndex, { scrollTop: true });
  caseStudyBackdrop.hidden = false;
  caseStudyModal.hidden = false;
  caseStudyModal.setAttribute('aria-hidden', 'false');
  caseStudyModal.classList.add('open');
  document.body.classList.add('modal-open');
  document.body.classList.add('case-study-open');
}

function closeCaseStudyModal(){
  caseStudyBackdrop.hidden = true;
  caseStudyModal.hidden = true;
  caseStudyModal.setAttribute('aria-hidden', 'true');
  caseStudyModal.classList.remove('open');
  document.body.classList.remove('modal-open');
  document.body.classList.remove('case-study-open');
  if(lastCaseStudyTrigger){
    lastCaseStudyTrigger.focus();
  }
  const resetUrl = window.location.pathname + window.location.search;
  if(window.location.hash){
    history.replaceState(null, '', resetUrl);
  }
}

function attachCaseStudyEvents(project){
  const carousel = caseStudyContent.querySelector('.case-study-carousel');
  carousel.addEventListener('touchstart', (event) => {
    caseStudyTouchStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  carousel.addEventListener('touchend', (event) => {
    caseStudyTouchEndX = event.changedTouches[0].clientX;
    const delta = caseStudyTouchEndX - caseStudyTouchStartX;
    if(Math.abs(delta) > 50){
      if(delta < 0){
        renderCaseStudy(project, (caseStudyImageIndex + 1) % project.images.length);
      } else {
        renderCaseStudy(project, (caseStudyImageIndex - 1 + project.images.length) % project.images.length);
      }
    }
  }, { passive: true });

  const thumbs = caseStudyContent.querySelectorAll('.carousel-thumb');
  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => renderCaseStudy(project, index));
  });

  const prevImage = caseStudyContent.querySelector('.carousel-prev');
  const nextImage = caseStudyContent.querySelector('.carousel-next');
  const mainImage = caseStudyContent.querySelector('.carousel-frame img');

  if(prevImage){
    prevImage.addEventListener('click', () => renderCaseStudy(project, (caseStudyImageIndex - 1 + project.images.length) % project.images.length));
  }
  if(nextImage){
    nextImage.addEventListener('click', () => renderCaseStudy(project, (caseStudyImageIndex + 1) % project.images.length));
  }
  if(mainImage){
    mainImage.addEventListener('click', () => openCaseStudyLightbox(mainImage.getAttribute('data-lightbox-src')));
  }

  const prevProject = caseStudyContent.querySelector('.case-study-nav-prev');
  const nextProject = caseStudyContent.querySelector('.case-study-nav-next');
  if(prevProject){
    prevProject.addEventListener('click', () => setCaseStudyProject(currentCaseStudyIndex - 1));
  }
  if(nextProject){
    nextProject.addEventListener('click', () => setCaseStudyProject(currentCaseStudyIndex + 1));
  }
}

function openCaseStudyLightbox(src){
  if(!src) return;
  const lightbox = document.createElement('div');
  lightbox.className = 'case-study-lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.innerHTML = `<img src="${src}" alt="Expanded project preview"><button type="button" aria-label="Close image preview">&times;</button>`;
  document.body.appendChild(lightbox);
  const closeBtn = lightbox.querySelector('button');
  closeBtn.addEventListener('click', () => lightbox.remove());
  lightbox.addEventListener('click', (event) => {
    if(event.target === lightbox) lightbox.remove();
  });
  document.addEventListener('keydown', function handler(e){
    if(e.key === 'Escape'){ lightbox.remove(); document.removeEventListener('keydown', handler); }
  });
}

function bindCaseStudyTriggers(){
  document.querySelectorAll('.case-study-trigger').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const projectId = link.getAttribute('data-project-id');
      lastCaseStudyTrigger = link;
      openCaseStudyModal(projectId);
    });
  });
}

function handleCaseStudyHash(){
  const hash = window.location.hash.replace('#', '');
  if(!hash) return;
  const project = projects.find(item => item.id === hash);
  if(project){
    openCaseStudyModal(project.id);
  }
}

if(caseStudyBackdrop) caseStudyBackdrop.addEventListener('click', closeCaseStudyModal);
if(caseStudyClose) caseStudyClose.addEventListener('click', closeCaseStudyModal);
document.addEventListener('keydown', (event) => {
  if(caseStudyModal && !caseStudyModal.hidden){
    if(event.key === 'Escape') closeCaseStudyModal();
    if(event.key === 'ArrowRight') {
      event.preventDefault();
      setCaseStudyProject(currentCaseStudyIndex + 1, { scrollTop: false });
    }
    if(event.key === 'ArrowLeft') {
      event.preventDefault();
      setCaseStudyProject(currentCaseStudyIndex - 1, { scrollTop: false });
    }
  }
});
window.addEventListener('hashchange', handleCaseStudyHash);
window.addEventListener('popstate', () => {
  const hash = window.location.hash.replace('#', '');
  if(hash){
    const project = projects.find(item => item.id === hash);
    if(project){
      openCaseStudyModal(project.id);
    }
  } else if(caseStudyModal && !caseStudyModal.hidden){
    closeCaseStudyModal();
  }
});

/* =========================================================
   Mobile nav
========================================================= */
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if(navToggle){
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', event => {
    if(event.key === 'Escape' && mainNav.classList.contains('open')){
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });
  mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded','false');
  }));
}

/* =========================================================
   Reveal on scroll
========================================================= */
function initReveal(){
  const targets = document.querySelectorAll('.reveal-up');
  document.documentElement.classList.add('reveal-ready');
  if(!('IntersectionObserver' in window)){
    targets.forEach(t => t.classList.add('in-view'));
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold:0, rootMargin:'0px 0px -8% 0px' });
  targets.forEach(t => io.observe(t));

  // Safety net: never leave content permanently invisible
  setTimeout(() => {
    document.querySelectorAll('.reveal-up:not(.in-view)').forEach(t => t.classList.add('in-view'));
  }, 1800);
}

/* =========================================================
   Init
========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  if(caseStudyBackdrop){ caseStudyBackdrop.hidden = true; }
  if(caseStudyModal){
    caseStudyModal.hidden = true;
    caseStudyModal.setAttribute('aria-hidden', 'true');
    caseStudyModal.classList.remove('open');
  }
  document.body.classList.remove('modal-open');
  document.body.classList.remove('case-study-open');

  renderWhatIDo();
  renderWorkflow();
  renderTimeline();
  renderEducation();
  renderProjects();
  renderMarketingGrid();
  renderPrinciples();
  renderTools();
  renderCertifications();
  initReveal();
  handleCaseStudyHash();

  const yearEl = document.getElementById('copyYear');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});
