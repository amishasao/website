<div align="center">
<!-- <img alt="Portfolio" src="https://github.com/dillionverma/portfolio/assets/16860528/57ffca81-3f0a-4425-b31d-094f61725455" width="90%"> -->
</div>

# About

Hi! Thank you for taking the time to look at this repo!
If you do choose to use this website template, please attribute me by linking back to this GitHub repo.

# Portfolio [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdillionverma%2Fportfolio)

Built with next.js, [shadcn/ui](https://ui.shadcn.com/), and [magic ui](https://magicui.design/), deployed on Vercel.

# Features

- Setup only takes a few minutes by editing the [single config file](./src/data/resume.tsx)
- Built using Next.js 14, React, Typescript, Shadcn/UI, TailwindCSS, Framer Motion, Magic UI
- Includes a blog
- Responsive for different devices
- Optimized for Next.js and Vercel

# Adding content

Everything on the homepage comes from two data files. Add an entry and the layout adapts on its own.

**Experience, education, skills, hackathons, other work:** [`src/data/resume.tsx`](./src/data/resume.tsx)

- **Experience:** add to `work`. Logos go in `public/`.
- **Hackathons:** add to `hackathons`. Optional fields:
  - `role: "Organizer"` or `"Builder"` shows next to the location and counts toward the intro sentence.
  - `featured: true` shows the hackathon before the "Show all" toggle. If nothing is featured, the first 4 show.
- **Other work:** add to `projects` with a `title`, `href` and short `tagline`. The Other work column grows to fit.

**Case studies:** three steps.

1. Add an entry to `CASE_STUDIES` in [`src/data/case-studies.ts`](./src/data/case-studies.ts):
   - `slug` becomes the URL: `/work/<slug>`.
   - `name`, `tagline`, `role`, `highlight` and `image` fill the homepage tile.
   - `outcome` appears in the case study header.
   - `tile` (optional) sets the tile's colors. Without it, the tile uses the default sage and coral.
2. Copy [`src/app/work/_template/`](./src/app/work/_template/page.tsx) to `src/app/work/<slug>/` and set `SLUG` at the top to match.
3. Put the cover and other images in `public/case-studies/<slug>/`.

The homepage tile, the `/work` page and the "Next" link at the bottom of each case study update automatically. Tiles appear in the same order as `CASE_STUDIES`. The first three fill the zigzag grid, and any more pair up below it.

# Getting Started Locally

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/amishasao/website
   ```

2. Move to the cloned directory

   ```bash
   cd portfolio
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the local Server:

   ```bash
   pnpm dev
   ```

5. Open the [Config file](./src/data/resume.tsx) and make changes

# License
