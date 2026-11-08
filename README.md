<div align="center">

[![English](https://img.shields.io/badge/English-7ed957?style=for-the-badge&labelColor=07090c)](README.md)
[![Português](https://img.shields.io/badge/Portugu%C3%AAs-2b2f36?style=for-the-badge)](README.pt-BR.md)

</div>

# Portfolio

Personal portfolio of **Everton Gonçalves**: a modern, responsive, dark-themed single-page site built with Angular.

## Features

- Sections: Home, About, Experience, Known Technologies, Works and Contact.
- English / Portuguese switch in the navigation bar (remembers your choice).
- Work experience with durations calculated from the dates, so they keep updating on their own.
- Technologies grouped by Back-end, Front-end, AI and Utilitaries.
- Project cards with Back-End / Front-End filters.
- Scroll-reveal animations, sticky navigation bar and mobile menu.
- Content driven by JSON files (easy to update, no code changes needed).

## Tech stack

- [Angular 21](https://angular.dev) (LTS): standalone components, signals and the new control flow (`@if` / `@for`)
- TypeScript 5.9
- SCSS with CSS custom properties
- [Bootstrap Icons](https://icons.getbootstrap.com)
- Karma + Jasmine for unit tests

## Requirements

- **Node.js 20.19+ or 22.12+** (Angular 21 requirement)
- npm

## Getting started

```bash
# install dependencies
npm install

# start the dev server
npm start
```

Open <http://localhost:4200/>. The app reloads automatically when you change a source file.

## Scripts

| Command         | Description                                     |
| --------------- | ----------------------------------------------- |
| `npm start`     | Dev server on `http://localhost:4200`           |
| `npm run build` | Production build into `dist/portfolio`          |
| `npm test`      | Unit tests with Karma (watch mode)              |

## Updating the content

| What                  | File                                                                          |
| --------------------- | ----------------------------------------------------------------------------- |
| Projects              | `src/assets/cards-jsons/projects.json`                                        |
| Back-end skills       | `src/assets/jsons/backend.json`                                               |
| Front-end skills      | `src/assets/jsons/frontend.json`                                              |
| AI skills             | `src/assets/jsons/ai.json`                                                    |
| Utilitaries           | `src/assets/jsons/Utilitaries.json`                                           |
| Work experience       | `src/assets/jsons/experience.json` (dates, type, skills)                      |
| Texts / translations  | `src/assets/i18n/en.json` and `src/assets/i18n/pt.json`                       |
| Profile photo         | `src/assets/imgs/photo.jpg`                                                   |

## Translations

Every visible text lives in `src/assets/i18n/<lang>.json` and is read through translation keys:

```html
<h2>{{ 'works.title' | translate }}</h2>
```

To add a text, create the same key in both files. If a key is missing in Portuguese, the English text is shown.

## Project structure

```text
src/
├── app/
│   ├── first-page/            # Hero section
│   ├── who-i-am/              # About section
│   ├── known-technologies/    # Skills section
│   ├── experience/            # Work experience timeline
│   ├── works/                 # Projects section
│   ├── contact/               # Contact + footer
│   ├── i18n/                  # Language service and `translate` pipe
│   ├── shared/                # Reusable pieces (scroll-reveal directive, duration helpers)
│   ├── Services/              # Data services (HTTP + JSON)
│   └── interfaces/            # TypeScript models
├── assets/                    # Images and JSON data
└── styles.scss                # Global design tokens and utilities
```

## Contact

- GitHub: [EvertonMLGoncalves](https://github.com/EvertonMLGoncalves)
- LinkedIn: [Everton Mikey Litka Gonçalves](https://www.linkedin.com/in/everton-mikey-litka-gonçalves)
- Email: evertonmlgoncalves@gmail.com
