# santi.io

Personal site for Santi Suarez Ordoñez. One page, built with Next.js, React, and Tailwind. All of the words are in `content/site.ts`.

```bash
npm install
npm run dev
```

`npm test` checks that the copy file does not pick up old analytics, the removed contact number, or dash characters the page should not use. `npm run build` is the production build Vercel runs. No project config is required for that deploy.

The public site stays on the current production deployment until this branch is merged and promoted. This repo change does not touch DNS.
