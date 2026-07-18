# sandromirr.github.io

Personal portfolio site for Sandro Mirianashvili, built with React, TypeScript, and Tailwind CSS. Deployed automatically to GitHub Pages.

Live at: https://sandromirr.github.io

## Features

- Single-page portfolio with About, Skills, Achievements, Experience, Education, Projects, and Contact sections
- Light/dark theme toggle (persisted via `ThemeContext`)
- Content driven by a single data file ([src/data/resume.json](src/data/resume.json)) — no code changes needed to update resume content
- Responsive layout styled with Tailwind CSS
- Icons via [lucide-react](https://lucide.dev/)

## Tech Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev server and build tooling
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [ESLint](https://eslint.org/) for linting

## Project Structure

```
src/
├── assets/          # images and logos
├── components/      # section components (About, Skills, Experiences, Projects, Contact, ...)
├── data/
│   └── resume.json  # all resume/portfolio content
├── models/           # TypeScript types for resume data
├── App.tsx            # page layout, assembles sections
├── ThemeContext.tsx    # light/dark theme provider
└── main.tsx            # app entry point
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
| `title` | `string` | Tagline shown under the name |
| `githubUrl` | `string` | GitHub profile link (header icon + Contact section) |
| `linkedInUrl` | `string` | LinkedIn profile link (header icon + Contact section) |
| `email` | `string` | Email address (mailto link + Contact section) |
| `about` | `string` | Paragraph shown in the About section |
| `experiences` | `Experience[]` | Work history, rendered newest-first as given |
| `educations` | `Education[]` | Education history |
| `projects` | `Project[]` | Portfolio projects |
| `skills` | `SkillCategory[]` | Skills, grouped by category |
| `achievements` | `Achievement[]` | Notable achievements/highlights |

`Experience` ([Experience.ts](src/models/Experience.ts)):

| Field | Type | Description |
|---|---|---|
| `company` | `string` | Employer name |
| `position` | `string` | Job title |
| `period` | `string` | Free-text date range, e.g. `"2020 - Present"` |
| `description` | `string` | Summary of the role |
| `logo` | `string` | Company logo URL |

`Education` ([Education.ts](src/models/Education.ts)):

| Field | Type | Description |
|---|---|---|
| `school` | `string` | Institution name |
| `degree` | `string` | Degree/program name |
| `period` | `string` | Free-text date range |
| `description` | `string` | Summary of studies |
| `logo` | `string` | Institution logo URL |

`Project` ([Project.ts](src/models/Project.ts)):

| Field | Type | Description |
|---|---|---|
| `title` | `string` | Project name |
| `description` | `string` | Short project summary |
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
| `highlight` | `string` | Standout metric/callout, e.g. `"40% increase in team productivity"` |

### Example entry

```json
{
  "experiences": [
    {
      "company": "HRRA",
      "position": "Senior Software Engineer",
      "period": "2020 - Present",
      "description": "Led development of enterprise web applications using React and Node.js.",
      "logo": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=128&h=128&auto=format&fit=crop"
    }
  ]
}
```

## Deployment

Pushes to `master` trigger [.github/workflows/deploy.yaml](.github/workflows/deploy.yaml), which builds the site and publishes `dist/` to GitHub Pages.
