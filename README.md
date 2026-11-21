<div align="center">

# 🚀 Sagar Growth Systems

### Digital Marketing • Performance Growth • Web Experiences

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=23&duration=3000&pause=900&color=37B6F6&center=true&vCenter=true&width=800&lines=From+Clicks+to+Customers+%F0%9F%93%88;Building+High-Converting+Digital+Experiences;Meta+Ads+%7C+Google+Ads+%7C+SEO+%7C+Analytics;Marketing+Meets+Technology" alt="Animated headline introducing Sagar Growth Systems" />

<br />

[![Portfolio](https://img.shields.io/badge/Explore-Live_Portfolio-2563EB?style=for-the-badge&logo=githubpages&logoColor=white)](https://kothakula-sagar.github.io/sagar-growth-systems/)
[![GitHub](https://img.shields.io/badge/GitHub-kothakula--sagar-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kothakula-sagar)
[![LinkedIn](https://img.shields.io/badge/Focus-Digital_Growth-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](#-about-this-project)

</div>

---

## 👋 About this project

**Sagar Growth Systems** is the personal portfolio and digital-growth showcase of **Kothakula Sagar**, a Bengaluru-based digital marketing professional with experience in performance advertising, lead generation, SEO, analytics and marketing-oriented websites.

It brings together campaign achievements, selected work and an AI-assisted portfolio experience. The project also includes optional server-side integrations for resume requests, administration and messaging.

### 📌 Campaign highlight

| Metric | Reported outcome |
| :--- | ---: |
| 🎯 Campaign | Domestic Road Freight |
| 💸 Daily ad budget | **₹1,000** |
| 📥 Leads generated | **125+** |
| 🤝 Converted paying customers | **50+** |

> Figures are based on the campaign results supplied by the portfolio owner; they are not live analytics.

## 🧰 Skills & tools

<div align="center">

![Meta Ads](https://img.shields.io/badge/Meta_Ads-0866FF?style=flat-square&logo=meta&logoColor=white)
![Google Ads](https://img.shields.io/badge/Google_Ads-4285F4?style=flat-square&logo=googleads&logoColor=white)
![Google Analytics](https://img.shields.io/badge/GA4-E37400?style=flat-square&logo=googleanalytics&logoColor=white)
![SEO](https://img.shields.io/badge/SEO-14865D?style=flat-square)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-DD2C00?style=flat-square&logo=firebase&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=githubpages&logoColor=white)
![Render](https://img.shields.io/badge/Render-000000?style=flat-square&logo=render&logoColor=white)

</div>

## ✨ Portfolio experience

| Feature | What it does |
| :--- | :--- |
| 🤖 **Sagar AI** | Groq-powered AI assistant grounded in portfolio knowledge |
| 📄 **Resume request flow** | Resume access requests, one-time tokens and admin notifications |
| 🧠 **Knowledge base** | Shared resume and experience context for AI responses |
| 📬 **Telegram integration** | Bot responses and request notifications |
| 🔐 **Admin portal** | Firebase-based administrative tools |
| 🌍 **SEO-ready delivery** | Configurable canonical URLs, sitemap and robots.txt |

> Some features depend on environment variables and separately deployed backend services. The public GitHub Pages site does not itself run the Node.js server.

## 📈 GitHub activity

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=kothakula-sagar&show_icons=true&hide_border=true&theme=transparent" alt="GitHub activity statistics" height="160" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=kothakula-sagar&layout=compact&hide_border=true&theme=transparent" alt="Most-used GitHub repository languages" height="160" />

<br />

<img src="https://github-readme-activity-graph.vercel.app/graph?username=kothakula-sagar&theme=github-compact&hide_border=true" alt="GitHub contribution activity graph" width="95%" />

</div>

<details>
<summary><b>🎬 About the animated visuals</b></summary>

The typing animation is supplied by a third-party SVG service. Stats and the activity graph also use third-party image endpoints, so they may be temporarily unavailable if those services experience downtime or rate limits. No executable JavaScript is required in the README.

</details>

---

## ⚙️ Developer documentation

The sections below preserve the project's setup and deployment guidance.

## 1. Local setup

Requirements: Node.js 18+.

```bash
npm install
copy .env.example .env
npm start
```

Open `http://localhost:3000`.

## 2. Environment variables

Set these in Render or your local `.env` file:

- `PORT` - Render provides this automatically; local default is 3000.
- `PUBLIC_BASE_URL` - your final Render URL or custom domain, for example `https://your-domain.com`.
- `GROQ_API_KEY` - your Groq API key. Never put this in frontend JavaScript. The server loads it automatically from the local `.env` file.
- `GROQ_MODEL` - optional; default is `openai/gpt-oss-120b`.
- `TELEGRAM_BOT_TOKEN` - BotFather token for your Telegram bot.
- `FIREBASE_SERVICE_ACCOUNT_JSON` - the Firebase service-account JSON as a single Render environment-variable value. It is required for resume submissions/admin/Telegram settings, but it is not required for the AI chat endpoint.
- `ADMIN_UID` - your existing Firebase Authentication admin UID.

The browser Firebase config in `admin/firebase-config.js` is a web configuration and is not a substitute for the server service account.


### Local `.env` note

Node.js does not automatically load `.env` files. This project now uses `dotenv` and loads `.env` when `npm start` runs. After creating or changing `.env`, stop the server with `Ctrl+C` and start it again. The startup log will show `Groq AI: configured` when the key is being read.

Your `.env` should contain, for example:

```text
GROQ_API_KEY=your_actual_groq_key
GROQ_MODEL=openai/gpt-oss-120b
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
PUBLIC_BASE_URL=http://localhost:3000
```

Do not add quotation marks unless they are actually part of the value, and never commit `.env` to Git.

## 3. Firebase

The server uses Firebase Admin SDK for:

- `resumeRequests` collection
- `settings/telegram` document
- admin ID-token verification

Your existing Firebase Authentication admin account remains the login for `/admin/`.

The server-side service account must belong to the same Firebase project used by the portfolio. Give it normal Firebase Admin SDK access. Do not commit the service-account JSON file.

## 4. Telegram

1. Create a bot with BotFather and copy the bot token into `TELEGRAM_BOT_TOKEN`.
2. Deploy the Render service.
3. Open `/admin/`, sign in, open **Telegram**, enter your Telegram numeric chat ID and save it.
4. Set the Telegram webhook once using your final domain:

```text
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=https://YOUR_DOMAIN/api/telegram/webhook
```

Use the Telegram API endpoint in a browser or HTTP client. After the webhook is set, messages sent to the bot are answered by the same Groq-backed Sagar AI knowledge base.

## 5. Resume flow

The public resume file is not linked directly from the portfolio anymore.

Visitor flow:

1. Click **Download Resume**.
2. Choose **HR / Manager** or **User / Individual**.
3. Enter the requested details.
4. The server stores the request in Firestore.
5. The configured Telegram admin receives a notification.
6. The server creates a one-time download token valid for 10 minutes.
7. The visitor downloads the resume.

The token is stored only as a SHA-256 hash in Firestore and is marked used after download.

## 6. AI knowledge base

The initial knowledge base is derived from the uploaded K Sagar Digital Marketing resume and the public portfolio content. It is intentionally implemented as controlled context sent to Groq rather than fine-tuning a model. This makes it easier to update the resume later and reduces unsupported claims.

Update:

```text
assets/knowledge/resume-knowledge.md
```

when portfolio facts change.

## 7. Render deployment

Create a **Web Service** in Render and point it to this repository.

Build command:

```bash
npm install
```

Start command:

```bash
npm start
```

Add the environment variables above in Render.

For SEO, set `PUBLIC_BASE_URL` to the actual public URL. The server replaces `__SITE_URL__` when serving HTML, sitemap and robots.txt, so canonical and structured-data URLs point at the deployed domain.

After adding a custom domain, use that custom domain as `PUBLIC_BASE_URL` and submit its sitemap to Google Search Console.

## Security notes

- Never commit `.env` or a Firebase service-account JSON file.
- Keep Groq and Telegram credentials server-side.
- Keep the admin UID in Render environment variables.
- The admin API verifies Firebase ID tokens and the configured admin UID.
- The resume itself is stored in `assets/resume/` as requested, but the public page no longer exposes a direct download link.


## Telegram local testing

When `PUBLIC_BASE_URL` is not an HTTPS URL, the server automatically uses Telegram long polling for local development. Send `/id` to the bot to receive the current chat ID. On an HTTPS Render deployment, the server automatically registers the webhook at `/api/telegram/webhook`. Telegram does not allow `getUpdates` while an outgoing webhook is configured.


## GitHub Pages + Render API

This build supports the public portfolio on GitHub Pages with the Express API on Render. The browser automatically uses `http://localhost:3000` locally and `https://sagar-growth-systems.onrender.com` when hosted outside localhost. The Render server allows CORS requests from `https://sagar-psycho.github.io` for AI, resume submission/download, and authenticated admin API calls.
