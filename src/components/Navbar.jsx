const links = [
  { label: 'Home', page: 'home', href: '#/' },
  { label: 'Jobs', page: 'jobs', href: '#/jobs' },
  { label: 'Add Application', page: 'add-application', href: '#/add-application' },
  { label: 'Applications', page: 'applications', href: '#/applications' },
];

export default function Navbar({ activePage }) {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#/" aria-label="Job Tracker home">
          <span className="brand-mark" aria-hidden="true">J</span>
          <span>Job Tracker</span>
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a
              key={link.page}
              href={link.href}
              className={activePage === link.page ? 'nav-link active' : 'nav-link'}
              aria-current={activePage === link.page ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}