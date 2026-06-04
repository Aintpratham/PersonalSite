# aintpratham.com — Pratham Shah's portfolio

A single-file, zero-build personal site. Just static files — no npm, no build step.

## Files
- `index.html` — the whole site (HTML + CSS + JS inline)
- `resume.pdf` — downloadable résumé (linked from the site)
- `assets/me.jpg` — portrait
- `CNAME` — custom domain (aintpratham.com)
- `.nojekyll` — tells GitHub Pages to serve files as-is

## Deploy to GitHub Pages
1. Create a repo (e.g. `aintpratham.github.io`, or any repo).
2. Upload **all** of these files (keep the `assets/` folder structure).
3. Repo → Settings → Pages → Source: `main` branch, `/ (root)` → Save.
4. For the custom domain, keep `CNAME` and point your DNS at GitHub Pages.

To preview locally: just open `index.html` in a browser (or run `python3 -m http.server`).

## Editing
- Text lives directly in `index.html` — search for the section you want.
- Swap the photo by replacing `assets/me.jpg`.
- Replace `resume.pdf` to update the downloadable résumé.
