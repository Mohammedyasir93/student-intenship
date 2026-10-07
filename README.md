# Job Tracker – Student Internship Directory

A React mini project that helps students explore sample internship opportunities and keep track of their applications. The interface is built with React, Vite, and plain CSS.

> **Note:** The job listings in this project are illustrative sample records. They are not verified live vacancies.

## Live website

https://mohammedyasir93.github.io/student-intenship/

## Features

- Browse 10 sample internships across Electronics, Embedded Systems, IoT, Web Development, and Software.
- Search by job title or company, and combine category and location filters.
- Open a job search link or prefill the application form from a listing.
- Add applications with required-field and email validation.
- Track Applied, Interview, Selected, and Rejected statuses.
- Filter and delete applications with confirmation.
- Persist application data in browser `localStorage` across refreshes.
- Responsive green career-development dashboard and mobile navigation.

## Requirements

- Node.js 18 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Publish on GitHub Pages

For the first deployment, open the repository's **Settings > Pages** and set **Build and deployment > Source** to **GitHub Actions**. After that, pushes to `main` deploy the site automatically. You can also run the **Deploy to GitHub Pages** workflow manually from the Actions tab.

Create a production build with:

```bash
npm run build
```

## Project structure

```text
src/
  components/
    Footer.jsx          # Project footer
    JobCard.jsx         # Reusable internship listing
    Navbar.jsx          # Main navigation
    SearchBar.jsx       # Search and job filters
  pages/
    AddApplication.jsx  # Validated application form
    Applications.jsx    # Application dashboard and status filter
    Home.jsx            # Overview and career progress section
    Jobs.jsx            # Sample listings and combined filters
  App.jsx               # Navigation and application state
  index.css             # Responsive styles
  main.jsx              # React entry point
index.html
vite.config.js
package.json
```

## How it works

- Page navigation uses URL hashes, so no routing library is required.
- Job listings are stored in a JavaScript array in `src/pages/Jobs.jsx`.
- Application records are saved under `student-job-tracker-applications` in browser `localStorage`.
- The application count and dashboard summaries update from the saved records.

## Main components

- `Navbar` links to Home, Jobs, Add Application, and Applications.
- `JobCard` presents one sample opportunity and opens the application form with its job details filled in.
- `SearchBar` controls title/company search and category/location filters.
- `Home` displays project totals and a three-step career progress section.
- `Jobs` filters and renders the sample opportunities.
- `AddApplication` validates and saves application details.
- `Applications` summarizes, filters, and deletes saved application records.
- `Footer` displays the mini-project label and copyright notice.