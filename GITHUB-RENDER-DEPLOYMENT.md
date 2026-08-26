# GitHub Pages + Render deployment

## Public portfolio
Keep the portfolio on GitHub Pages:

https://sagar-psycho.github.io/sagar-growth-systems/

## Backend
The browser API is configured to use:

https://sagar-growth-systems.onrender.com

When running locally, the frontend automatically uses `http://localhost:3000`.

## GitHub Pages
Push the portfolio files to the GitHub Pages branch/repository. Do NOT commit:
- `.env`
- `firebase-service-account.json`
- any API keys or private credentials

## Render
Keep the existing Render environment variables configured, including:
- GROQ_API_KEY
- GROQ_MODEL
- TELEGRAM_BOT_TOKEN
- FIREBASE_SERVICE_ACCOUNT_JSON (or the supported Firebase credential variable)
- ADMIN_UID
- PUBLIC_BASE_URL=https://sagar-growth-systems.onrender.com

The server now allows API requests from:
- https://sagar-psycho.github.io
- localhost:3000
- 127.0.0.1:3000

## Important
Do not test `/api/ai/chat` by opening it under the GitHub Pages URL. GitHub Pages is static and does not host Express routes. The frontend calls the Render API automatically.
