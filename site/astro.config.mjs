// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL is set at build time once the domain is decided (proposed hosting decision).
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
});
