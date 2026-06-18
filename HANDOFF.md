# CSH Rentals — Project Handoff

> Onboarding doc for a fresh Claude Code session / new Claude account. Read this first, then the local memory files (see bottom).

## What this project is
Rebuilding https://www.cshrentals.com for owner **Scott** in Wix Studio. Goal: present a ~46-home rental portfolio as **5 geographic cluster portfolios** (each with P&L, rent roll, maps) plus a Geneva-on-the-Lake STR, to attract real-estate investors. The old live site stays untouched until the new build is complete.

## Coordinates
| Thing | Value |
|---|---|
| Local repo | `C:\Pravaltech\Developer\OneDrive - Praval\Desktop\CSHRentals` |
| GitHub repo | `JoelTurlapati/CSHRentals` (PUBLIC) |
| Wix site name | **"CSH Rentals Dev"** — match this in `ListWixSites` to get the siteId; this is the site to touch |
| Wix demo URL | `https://tagplanning.wixstudio.com/cshdemo` |
| Wix login | `scottprivate@tagplanning.com` |
| Wix siteId | Not recorded — resolve from the "CSH Rentals Dev" site via `ListWixSites` before any `UploadImageToWixSite`. (A prior note had `c0bd8f71-520a-4a4c-9e5e-47ea8ceb592d`; verify it matches "CSH Rentals Dev".) |
| Asset trackers | `asset-upload-tracker.csv`, `url-mapping.csv` (image → wixstatic.com URL maps) |

## Two approaches — transition in progress
- **Custom Elements** (`src/public/custom-elements/*.js`) — the approach **currently live in Wix**; each page is a Web Component pasted into the Wix IDE. These are the **most recently edited** files (~2026-06-12).
- **iFrame embed** (`html-pages-iframe/*.html`) — the **target** approach (same pattern as the Affinity project: standalone HTML pasted into a Wix HTML-embed widget). The folder is **`html-pages-iframe`** (not `html-pages`). These 8 files are **older** (~2026-06-05), so they likely **lag** the Custom-Element content — reconcile them before switching.
- `wix dev` is **broken on Windows**, so all edits are **pasted manually into Wix** (IDE for Custom Elements, embed widget for HTML). No auto-sync from GitHub.

## Pages & slugs (already set in Wix Studio)
| Page | Slug | iframe HTML file |
|---|---|---|
| Home | `/` | home.html |
| Investors | `/investors` | investors.html |
| Portfolio West | `/portfolio-west` | portfolio-west.html |
| Portfolio NW | `/portfolio-northwest` | portfolio-northwest.html |
| Portfolio NE | `/portfolio-northeast` | portfolio-northeast.html |
| Portfolio Central | `/portfolio-central` | portfolio-central.html |
| Property Detail | `/property-detail` | property-detail.html |
| Geneva STR | `/geneva-str` | geneva-str.html |
| Tenants | `/tenants` | *(empty — waiting on Cognito Forms embed code)* |

The custom-element folder also has legacy `portfolio-highend`, `portfolio-premium`, `contact`, and `home-investor` pages that are **not** in the current slug list — treat as legacy unless reinstated.

## Key assets & mechanics
- **Logo:** `https://static.wixstatic.com/media/64b604_646bc5dcd19547abb135695264b23b0f~mv2.png`
- **Contact email:** customstarkhomes@gmail.com — **Address:** 1428 Market Ave. N., Canton, OH 44714
- All images live on `wixstatic.com` (Wix iframe CSP blocks github.io). Wix MCP `UploadImageToWixSite` uploads images (not video).
- **property-detail** receives the selected property from the portfolio pages via **localStorage** — preserve this handshake when editing portfolio or detail pages.

## Environment / push (same machine as the Affinity project)
```powershell
cd "C:\Pravaltech\Developer\OneDrive - Praval\Desktop\CSHRentals"
$env:PATH = "C:\Program Files\nvm\v22.22.3;C:\Users\joel.t\AppData\Roaming\npm;C:\Program Files\GitHub CLI;" + $env:PATH
git add .
git commit -m "description"
git push
```
Node v22.22.3 (nvm-windows), GitHub CLI authed as JoelTurlapati.

## New-account setup checklist (same machine)
- [ ] **Reconnect the Wix MCP connector** and log in as `scottprivate@tagplanning.com`.
- [ ] Run `ListWixSites`, find the **"CSH Rentals Dev"** site, and note its siteId before uploading any images.
- [ ] Confirm GitHub CLI is authed as JoelTurlapati (`gh auth status`).
- [ ] Confirm local memory files auto-loaded — they live at
      `C:\Users\joel.t\.claude\projects\C--Pravaltech-Developer-OneDrive---Praval-Desktop-Komal\memory\` (filesystem-based, not tied to the Claude login).

## Open tasks
- **Tenants page**: only a Tenant Pre-Approval Form via **Cognito Forms** embed — code not yet provided by Scott.
- **Sync iframe pages to latest content**: `html-pages-iframe/*.html` lag the Custom-Element files — reconcile before adopting the iframe approach.
- **Verify portfolio numbering consistency** between the home page and each portfolio/detail page (prior builds had mismatched "Portfolio N" labels between home and detail pages).
- **Confirm the cshdemo siteId** (see Coordinates).

## Local memory files (read for full context)
- `MEMORY.md` — index
- `project_csh_rentals.md` — this project's full notes
- `project_affinity_group.md` — sister project, same machine/account/conventions
- `feedback_workflow.md` — editing/push conventions (never paste full files into chat; PowerShell for git)
