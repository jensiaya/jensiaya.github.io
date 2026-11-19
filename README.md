# Pangasinan Heritage Digital Showcase

Starter implementation for Activity 1.1 using **React + Next.js 14 App Router**.

## Requirements
- Node.js 18.17+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production/static build
```bash
npm run build
```

The project is configured with `output: "export"` so the production build can be deployed as a static site.

## Project structure
- `app/` — pages and global styling
- `components/` — reusable UI component examples
- `next.config.mjs` — static export configuration
- `package.json` — dependencies and scripts

No `node_modules` directory is included in the submission ZIP.

## Visual theme
The interface uses a cohesive pink theme for icons, buttons, links, accents, borders, and decorative backgrounds.

## Destination photographs
The `public/heritage/` folder contains the three photographs supplied for this activity:
- `hundred-islands.jpg`
- `balungao-hot-spring.jpg`
- `bolinao-lighthouse.jpg`

The destination cards display these images with descriptive alternative text and lazy loading.
