# Sabbir Web Solutions — Agency Website

A premium, production-ready marketing site built with **Next.js 14 (App Router)**, **React 18**, and **Tailwind CSS**. Fully responsive, SEO-friendly, and easy to edit — all copy lives in a single content file.

---

## 1. Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 2. Build for production

```bash
npm run build
npm run start
```

---

## 3. Editing content (the important part)

**You almost never need to touch the components.** Open:

```
content/site.js
```

Everything on the page — headline, services, portfolio projects, pricing,
case study, testimonials, contact details, SEO — is in that one file.
Change the text between the quotes, or add/remove items inside the `[ ... ]`
arrays.

### Add real images
1. Put the file in `public/images/` (see `public/images/README.txt`).
2. Set the matching `image` field in `content/site.js`, e.g.
   `about.image = "/images/sabbir.jpg"`.
   Leave a field as `null` to keep the built-in placeholder graphic.

### Contact links
- **WhatsApp:** set `contact.whatsappNumber` (international format, digits only,
  e.g. `8801712345678`).
- **Email:** set `contact.email`.

### Re-theme colors
Brand colors live in two mirrored places — update both to re-theme:
- `components/HomePage.jsx` → the `C` object (used by inline styles)
- `tailwind.config.js` → `theme.extend.colors.brand`
- `app/globals.css` → the hard-coded hex values in the effects

> The contact form is front-end only (no backend yet). To make it send,
> connect it to a form service (Formspree, Web3Forms) or a Next.js route
> handler / server action.

---

## 4. Deploy

### Option A — Vercel (recommended, free)
1. Push this folder to a GitHub repository.
2. Go to https://vercel.com → **Add New Project** → import the repo.
3. Framework preset is auto-detected as **Next.js**. Click **Deploy**.
4. Add your custom domain (`sabbirwebsolutions.site`) in **Project → Settings → Domains**.

### Option B — Any Node host
```bash
npm run build
npm run start   # serves on port 3000
```

### Before going live
- Set the real domain in `content/site.js` → `seo.siteUrl`.
- Add `og-image.jpg` (1200×630) in `public/images/`.
- Add a `favicon.ico` inside the `app/` folder.

---

## Project structure

```
sabbir-web-solutions/
├── app/
│   ├── layout.jsx      # fonts + SEO metadata
│   ├── page.jsx        # home route
│   ├── globals.css     # Tailwind + animations
│   ├── robots.js       # /robots.txt
│   └── sitemap.js      # /sitemap.xml
├── components/
│   └── HomePage.jsx    # the full homepage UI
├── content/
│   └── site.js         # ← edit everything here
├── public/images/      # your images
├── tailwind.config.js
├── next.config.mjs
└── package.json
```

Built for Sabbir Hossain · Sabbir Web Solutions.
