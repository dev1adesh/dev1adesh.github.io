# Adesh Partap Singh — Portfolio

A fast, dependency‑free personal/career website (plain HTML, CSS, and vanilla JS — no build step). Dark/light theme, animated hero, filterable project gallery with a detail modal, and a downloadable résumé.

Live target: **https://adeshpartapsingh.com**

---

## 1. Project structure

```
adeshps_website/
├── index.html          # All page content & sections
├── styles.css          # All styling + dark/light themes (CSS variables)
├── script.js           # Project data, filtering, modal, theme toggle, animations
├── favicon.svg         # "APS" monogram favicon
├── robots.txt          # SEO
├── sitemap.xml         # SEO
├── CNAME               # Custom domain for GitHub Pages (adeshpartapsingh.com)
├── .nojekyll           # Tells GitHub Pages to serve files as‑is (no Jekyll)
└── assets/
    ├── Adesh-Partap-Singh-Resume.pdf
    └── projects/       # Optimized project photos (jpg)
```

## 2. Editing content

- **Text** (bio, experience, skills, contact): edit `index.html` directly — sections are clearly commented (`<!-- ===== EXPERIENCE ===== -->`, etc.).
- **Projects**: edit the `projects` array near the top of `script.js`. Each project is an object: `title`, `category` (`robotics` | `embedded` | `software` | `digital`), `catLabel`, `images` (array of paths), `blurb`, `details`, `tags`. To add a project, copy an existing object and add a photo to `assets/projects/`.
- **Colors/theme**: the `:root` and `[data-theme="light"]` blocks at the top of `styles.css` control every color via CSS variables (`--accent`, `--bg`, etc.).
- **Résumé**: replace `assets/Adesh-Partap-Singh-Resume.pdf` (keep the same filename, or update the two links in `index.html`).

### ⚠️ Update before launch
The GitHub and LinkedIn links are **placeholders** and appear in three places (hero, contact buttons, footer is text‑only):
- `https://github.com/adeshpartapsingh`
- `https://www.linkedin.com/in/adeshpartapsingh`

Search `index.html` for `github.com` and `linkedin.com` and replace with your real profile URLs.

## 3. Preview locally

Any static server works. For example:

```bash
cd adeshps_website
python3 -m http.server 8000      # then open http://localhost:8000
# or:  npx serve .
```

---

## 4. Deploy to GitHub Pages

You chose **GitHub Pages** (free, with automatic HTTPS). Easiest path is a **user site** repo.

1. Create a GitHub account if you don't have one. Your username matters below — call it `<USERNAME>`.
2. Create a **new public repository** named exactly:
   ```
   <USERNAME>.github.io
   ```
   (A repo with this exact name is served at the root of your GitHub Pages — simplest for a personal site.)
3. Upload these files to the repo (drag‑and‑drop in the GitHub web UI works, or use git — see below). Make sure `index.html`, `CNAME`, and `.nojekyll` are in the **root** of the repo.
4. In the repo, go to **Settings → Pages**. Under **Build and deployment**, set **Source = Deploy from a branch**, **Branch = `main`** (folder `/root`), then **Save**.
5. Wait ~1 minute, then visit `https://<USERNAME>.github.io` to confirm the site is live.

### Push with git (optional, instead of drag‑and‑drop)
This folder is already a local git repo with an initial commit. Just point it at your GitHub repo:

```bash
cd adeshps_website
git remote add origin https://github.com/<USERNAME>/<USERNAME>.github.io.git
git branch -M main
git push -u origin main
```

> The `CNAME` file already contains `adeshpartapsingh.com`. Keep it in the repo — it's what binds the custom domain. If GitHub's **Settings → Pages → Custom domain** ever shows empty after a redeploy, re‑enter `adeshpartapsingh.com` and Save.

---

## 5. Connect your GoDaddy domain (adeshpartapsingh.com)

You keep the domain at GoDaddy and just point its DNS at GitHub Pages. **Do not change nameservers** — you only add/replace DNS records.

### A) In GitHub
1. Repo → **Settings → Pages → Custom domain** → enter `adeshpartapsingh.com` → **Save**. (This already matches the `CNAME` file in the repo.)

### B) In GoDaddy
1. Sign in at godaddy.com → **My Products** → find `adeshpartapsingh.com` → **DNS** (or **Manage DNS**).
2. **Delete GoDaddy's default parking records first.** GoDaddy usually ships a default `A` record for host `@` pointing at a parking IP (e.g. `Parked`/`WebsiteBuilder`), and sometimes a `CNAME www → @`. Remove/replace the `@` `A` record, and turn off any **Domain Forwarding** (under the domain's settings) — these will hijack your site if left in place.
3. **Add these records** (TTL can stay default / 1 hour):

   | Type  | Name (Host) | Value                                   |
   |-------|-------------|-----------------------------------------|
   | A     | `@`         | `185.199.108.153`                       |
   | A     | `@`         | `185.199.109.153`                       |
   | A     | `@`         | `185.199.110.153`                       |
   | A     | `@`         | `185.199.111.153`                       |
   | AAAA  | `@`         | `2606:50c0:8000::153`                   |
   | AAAA  | `@`         | `2606:50c0:8001::153`                   |
   | AAAA  | `@`         | `2606:50c0:8002::153`                   |
   | AAAA  | `@`         | `2606:50c0:8003::153`                   |
   | CNAME | `www`       | `<USERNAME>.github.io`                  |

   The four `A` records (IPv4) are required; the four `AAAA` records (IPv6) are recommended. The `www` `CNAME` makes `www.adeshpartapsingh.com` redirect to your apex domain. Replace `<USERNAME>` with your GitHub username.
   *(These IPs are GitHub's official, documented Pages addresses.)*

### C) Wait, then enable HTTPS
- DNS changes typically propagate in **a few minutes to a couple of hours** (occasionally up to 24–48h).
- Back in **Settings → Pages**, GitHub runs a DNS check. Once it passes and a TLS certificate is issued (can take up to 24h), tick **Enforce HTTPS** so the site always loads over `https://`.

### D) Verify
```bash
# Apex should return the four GitHub IPs:
dig adeshpartapsingh.com +noall +answer
# www should resolve to <USERNAME>.github.io:
dig www.adeshpartapsingh.com +noall +answer
```
Then open `https://adeshpartapsingh.com` in a browser. Done. 🎉

---

## Notes
- The Space Grotesk / Inter fonts load from Google Fonts; if that ever fails, the site falls back to clean system fonts automatically.
- Everything is static — there's no backend, database, or build pipeline to maintain.
