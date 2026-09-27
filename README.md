# Org Chart — Interactive Organization Chart

A full-screen, interactive organization-chart visualizer. Renders a company hierarchy (CEO → VPs → managers → individual contributors) with zoom, pan, expand/collapse nodes, job-family color coding, and a legend — all client-side, no backend.

## What It Does

- **Visual hierarchy tree** — builds the org tree from a flat employee list, renders cards connected by styled lines
- **Zoom & pan** — zoom controls plus drag-to-pan navigation across large charts
- **Expand / collapse** — click any manager card to collapse or expand their subtree
- **Job-family color coding** — Engineering, Design, Product, Operations, Leadership each get a color, explained in the legend
- **Employee cards** — avatar, name, role, and job family on every card
- **Chart controls** — view options and navigation helpers
- **Dark/light theme support** via `next-themes`

## Tech Stack

- **Next.js 15** (App Router) — `output: "export"` static build
- **React 19**, **TypeScript**
- **Tailwind CSS 3** + **shadcn/ui** components (Radix UI primitives)
- **lucide-react** — icons

## Quick Start

```bash
npm install
npm run dev
# open http://localhost:3000

# production build (static export -> out/)
npm run build
```

No environment variables, no backend, no database — everything runs in the browser.

## Project Structure

```
app/
  page.tsx            # full-screen home, renders <OrgChart />
  layout.tsx          # root layout + theme provider
  globals.css         # Tailwind + custom styles
components/
  org-chart.tsx       # main chart: zoom/pan state, expand/collapse
  employee-card.tsx   # avatar + name + role card
  connection-lines.tsx# SVG lines between nodes
  chart-controls.tsx  # view controls
  zoom-controls.tsx   # zoom in/out buttons
  chart-legend.tsx    # job-family color legend
  ui/                 # shadcn/ui primitives
data/
  employees.ts        # employee list: { name, manager, role, jobFamily }
types/
  org-chart.ts        # OrgNode / Employee types
utils/
  hierarchy.ts        # flat list -> tree builder
  connections.ts      # connection-line geometry
  styling.ts          # job-family color mapping
```

## Customizing the Data

The chart reads from `data/employees.ts` — a flat array where each employee has a `name` and a `manager` (the CEO's manager is an empty string). To visualize your own org, replace that array and keep the same shape:

```ts
{ name: "Jane D", manager: "Emma T", role: "Engineering Manager", jobFamily: "Engineering" }
```

`utils/hierarchy.ts` builds the tree; `utils/styling.ts` maps job families to colors — add your own families there.

## Deployment

Deployed as a **static site** — the Next.js build exports to `out/` and is served from GitHub Pages:

- Live: https://girishlade111.github.io/org-chart-ladestack/

Note: `next.config.mjs` sets `basePath: "/org-chart-ladestack"` for the GitHub Pages subpath. For a root-domain deploy (Vercel, Netlify, Cloudflare Pages), remove the `basePath` line and rebuild.

## Development Notes

- Next.js pinned to 15.2.8 (security fix for CVE-2025-55182, Dec 2025 advisory)
- Build ignores ESLint/TypeScript errors (`ignoreDuringBuilds` / `ignoreBuildErrors`) to keep static export friction-free
- Images set to `unoptimized` — required for static export
- Originally scaffolded with [v0](https://v0.app); customized after export

---

Built by Girish Lade — [ladestack.in](https://ladestack.in)
