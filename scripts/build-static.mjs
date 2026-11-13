import { cpSync, mkdirSync, rmSync } from 'node:fs';

const publicPaths = [
  'index.html', 'style.css', 'script.js', 'robots.txt', 'sitemap.xml',
  'blog', 'portfolio', 'projects', 'assets/images', 'assets/projects',
  'assets/resume/Kothakula-Sagar-Resume.pdf',
];

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
for (const path of publicPaths) {
  cpSync(path, `dist/${path}`, { recursive: true });
}
