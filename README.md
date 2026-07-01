# Cool Surfers Morocco — Website

React + TypeScript implementation of the Cool Surfers Morocco redesign (surf camp in Tamraght, Morocco). Built with Vite, React Router, and Tabler Icons.

## Pages

- `/` — Home
- `/about` — About
- `/house` — The House
- `/packages` — Packages & Pricing
- `/contact` — Contact

## Project structure

```
public/
  fonts/          TAN Nimbus + Open Sauce font files
  images/         Logo and site photography
src/
  components/     Reusable UI building blocks (Button, Nav, Footer, cards, ...)
  data/           Static content (site info, package pricing, image paths)
  pages/          One component per route
  styles/         Design tokens (colors, fonts) and global CSS
```

## Development

```
npm install
npm run dev      # start local dev server
npm run build    # type-check + production build
npm run lint     # oxlint
```
