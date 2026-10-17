# sandromirr.github.io

Personal portfolio site for Sandro Mirianashvili, built with React, TypeScript, and Tailwind CSS. Deployed automatically to GitHub Pages.

Live at: https://sandromirr.github.io

## Features

- Single-page portfolio with About, Experience, Education, Projects, Skills, Achievements, and Contact sections (in that order)
- Light/dark theme toggle (persisted via `ThemeContext`)
- Content driven by a single data file ([src/data/resume.json](src/data/resume.json)) — no code changes needed to update resume content
- Experience, education, and project descriptions accept HTML, for bullet lists, bold text, and links
- Configurable "available for freelance / full-time" message in the Contact section
- Company and school logos stored locally in `public/`, so the site doesn't depend on other websites
- Prerendered to static HTML at build time ([vite-prerender-plugin](https://github.com/preactjs/vite-prerender-plugin))
- Responsive layout styled with Tailwind CSS
- Icons via [lucide-react](https://lucide.dev/)
- Country flag shown as an SVG image (from `public/flags/`), so it also renders on Windows, which lacks flag emoji

## Tech Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev server and build tooling
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [ESLint](https://eslint.org/) for linting

## Project Structure

```
public/                 # served as-is at the site root
├── sandro_mirianashvili.jpg  # profile photo
├── flags/              # country flag SVGs (ge.svg)
├── *_logo.{png,svg}    # company/school logos (hr, mziuri, gita, geolab, tsu)
└── *_logo_dark.svg     # dark-theme logo variants, where needed (hr)
src/
├── assets/             # Vite template images; not used by the site
├── components/         # section components (About, Experiences, Projects, Contact, ...)
├── data/
│   └── resume.json     # all resume/portfolio content
├── models/             # TypeScript types for resume data
├── App.tsx             # page layout, assembles sections
├── ThemeContext.tsx    # light/dark theme provider
└── main.tsx            # app entry point + prerender hook
```

## Getting Started

### Prerequisites

- Node.js 20+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot module reloading.

### Build

```bash
npm run build
```

Type-checks the project and builds a production bundle to `dist/`.

### Lint

```bash
npm run lint
```

## Editing Content

Update your name, bio, skills, experience, education, and projects by editing [src/data/resume.json](src/data/resume.json). The shape of this file is defined by the types in [src/models/](src/models/).

### Schema

Top-level fields ([Resume.ts](src/models/Resume.ts)):

| Field | Type | Description |
|---|---|---|
| `photoUrl` | `string` | Path to the profile photo, relative to `public/` (e.g. `/sandro_mirianashvili.jpg`) |
| `fullName` | `string` | Displayed name in the hero header |
| `title` | `string` | Tagline shown under the name, e.g. `"Software Engineer from"` |
| `country` | `string?` | Country name, used as the flag's alt text and tooltip (e.g. `"Georgia"`) |
| `flagUrl` | `string?` | Path to the flag image shown after the title, relative to `public/` (e.g. `/flags/ge.svg`). Leave it out to show no flag |
| `githubUrl` | `string` | GitHub profile link (header icon + Contact section) |
| `linkedInUrl` | `string` | LinkedIn profile link (header icon + Contact section) |
| `email` | `string` | Email address, used for the mailto links on the header icon and the Contact section's "Send an email" card (the address itself isn't displayed) |
| `availability` | `Availability` | Controls the "Available for …" line in the Contact section (see below) |
| `about` | `string` | Paragraph shown in the About section |
| `experiences` | `Experience[]` | Work history, rendered in the order listed |
| `educations` | `Education[]` | Education history |
| `projects` | `Project[]` | Portfolio projects |
| `skills` | `SkillCategory[]` | Skills, grouped by category |
| `achievements` | `Achievement[]` | Notable achievements/highlights |

`Availability` ([Availability.ts](src/models/Availability.ts)):

| Field | Type | Description |
|---|---|---|
| `freelance` | `boolean` | Open to freelance projects |
| `fullTime` | `boolean` | Open to full-time opportunities |

The Contact section builds its message from these flags:

| `freelance` | `fullTime` | Message |
|---|---|---|
| `true` | `true` | Available for freelance projects and full-time opportunities |
| `true` | `false` | Available for freelance projects |
| `false` | `true` | Available for full-time opportunities |
| `false` | `false` | *(line hidden — the "Send me a message" button stays)* |

`Experience` ([Experience.ts](src/models/Experience.ts)):

| Field | Type | Description |
|---|---|---|
| `company` | `string` | Employer name |
| `position` | `string` | Job title |
| `period` | `string` | Free-text date range, e.g. `"Jan 2023 - present"` |
| `description` | `string` | Summary of the role, as HTML (see [HTML descriptions](#html-descriptions)). Use `""` to show only the title, company, and period |
| `logo` | `string` | Company logo — a path in `public/` (e.g. `/hr_logo.svg`) or an image URL |
| `logoDark` | `string?` | Optional logo used in the dark theme instead of `logo` (e.g. `/hr_logo_dark.svg`) |

`Education` ([Education.ts](src/models/Education.ts)):

| Field | Type | Description |
|---|---|---|
| `school` | `string` | Institution name |
| `degree` | `string` | Degree/program name |
| `period` | `string` | Free-text date range |
| `description` | `string` | Summary of studies, as HTML (see [HTML descriptions](#html-descriptions)) |
| `logo` | `string` | Institution logo — a path in `public/` (e.g. `/tsu_logo.png`) or an image URL |

`Project` ([Project.ts](src/models/Project.ts)):

| Field | Type | Description |
|---|---|---|
| `title` | `string` | Project name |
| `description` | `string` | Short project summary, as inline HTML (see [HTML descriptions](#html-descriptions)) |
| `link` | `string` | URL to the repo or live project |

`SkillCategory` ([SkillCategory.ts](src/models/SkillCategory.ts)):

| Field | Type | Description |
|---|---|---|
| `category` | `string` | Group heading, e.g. `"Frontend Development"` |
| `skills` | `string[]` | List of skill names in that category |

`Achievement` ([Achievement.ts](src/models/Achievement.ts)):

| Field | Type | Description |
|---|---|---|
| `title` | `string` | Achievement name |
| `description` | `string` | Details of the achievement |
| `highlight` | `string` | Standout callout, e.g. `"🥇 1st Place / Winner"` |

### HTML descriptions

The `description` of experiences, education, and projects is rendered as raw HTML, so you can format it:

- **Experience and Education**: use `<ul><li>…</li></ul>` for a bulleted list, `<p>` for separate paragraphs, and `<strong>` for bold. Plain text without tags works too.
- **Project**: the description sits inside a `<p>`, so use only inline tags such as `<a>` and `<strong>` (no `<ul>` or `<p>`). Links are styled blue. Add `target="_blank" rel="noopener noreferrer"` to open them in a new tab.

Inside JSON strings, escape double quotes as `\"`. The HTML is not sanitized, so only put content you trust in `resume.json`.

### Logos

Logos are shown as a 48×48 square with `object-cover`, so **use square images**. A wide wordmark gets its sides cropped off. Drop the file into `public/` and reference it with a leading slash, e.g. `"logo": "/gita_logo.png"`. Logos only display at 48px, so export PNGs at about 96×96 to keep page loads light.

A transparent background blends into the card, but dark parts of a logo then disappear on the dark-theme card. For logos like that, add a `logoDark` variant with lighter colors (see `hr_logo_dark.svg`).

### Example entry

```json
{
  "availability": {
    "freelance": true,
    "fullTime": false
  },
  "experiences": [
    {
      "company": "IT Center Mziuri",
      "position": "Course Instructor & Mentor",
      "period": "Apr 2019 - present",
      "description": "<ul><li>Designed the Python course syllabus from scratch.</li><li>Teach programming fundamentals in Python and C++.</li></ul><p><strong>Skills:</strong> Python · C++ · Algorithms</p>",
      "logo": "/mziuri_logo.png"
    }
  ],
  "projects": [
    {
      "title": "HRRA Portal",
      "description": "<a href=\"https://hr.ge\" target=\"_blank\" rel=\"noopener noreferrer\">HR.GE</a> is a job portal in Georgia that connects job seekers with employers.",
      "link": "https://hr.ge"
    }
  ]
}
```

## Deployment

Pushes to `master` trigger [.github/workflows/deploy.yaml](.github/workflows/deploy.yaml), which builds the site and publishes `dist/` to GitHub Pages.
