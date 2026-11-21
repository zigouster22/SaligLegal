// Accessibility audit: axe-core (WCAG 2 A/AA, 2.1 A/AA, 2.2 AA, best practice) on every built page,
// at 1280px and 320px widths, plus interactive states (form errors, package filter, mobile menu).
// Usage: npm run build && npm run test:a11y   (CHROMIUM_PATH=/path/to/chromium to use a preinstalled browser)
import { chromium } from 'playwright';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { serve } from './serve.mjs';

const require = createRequire(import.meta.url);
const axePath = require.resolve('axe-core/axe.min.js');
const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const pages = ['/', '/services/', '/team-packages/', '/security/', '/about/', '/contact/', '/privacy/', '/terms/', '/does-not-exist/'];
const widths = [1280, 320];
const tags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'];

const server = await serve(dist);
const base = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
let failures = 0;
const rows = [];

async function audit(page, label) {
  await page.addScriptTag({ path: axePath });
  const r = await page.evaluate((t) => window.axe.run(document, { runOnly: { type: 'tag', values: t } }), tags);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  if (r.incomplete.length && process.env.SHOW_INCOMPLETE) console.log(label, r.incomplete.map((i) => i.id + ':' + i.nodes.length).join(', '));
  rows.push({ label, violations: r.violations.length, incomplete: r.incomplete.length, passes: r.passes.length, hScroll: overflow });
  if (overflow) failures++;
  for (const v of r.violations) {
    failures++;
    console.log(`\n✗ ${label}: ${v.id} (${v.impact}) ${v.help}`);
    for (const n of v.nodes.slice(0, 5)) console.log(`   ${n.target.join(' ')}: ${n.failureSummary?.split('\n')[1] ?? ''}`);
  }
}

for (const width of widths) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 } });
  const page = await ctx.newPage();
  for (const p of pages) {
    const res = await page.goto(base + p);
    if (p === '/does-not-exist/' && res.status() !== 404) { failures++; console.log('✗ 404 page did not return HTTP 404'); }
    await page.evaluate(() => document.querySelectorAll('details').forEach((d) => (d.open = true)));
    await audit(page, `${width}px ${p}`);
  }
  // Interactive states
  await page.goto(base + '/contact/?team=balanced-legal-support-unit');
  await page.click('button[type=submit]');
  await audit(page, `${width}px /contact/ errors shown`);
  await page.goto(base + '/team-packages/');
  await page.click('[data-filter=casework]');
  await audit(page, `${width}px /team-packages/ filtered`);
  if (width < 700) {
    await page.goto(base + '/');
    await page.click('.menu');
    await audit(page, `${width}px / menu open`);
  }
  await ctx.close();
}
await browser.close();
server.close();
console.table(rows);
console.log(failures ? `\n${failures} problem(s) found.` : '\nNo axe violations and no horizontal scrolling found.');
process.exit(failures ? 1 : 0);
