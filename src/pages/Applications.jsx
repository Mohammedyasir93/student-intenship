import { useState } from 'react';

const statuses = ['Applied', 'Interview', 'Selected', 'Rejected'];

export default function Applications({ applications, onDelete }) {
  const [statusFilter, setStatusFilter] = useState('');
  const filteredApplications = applications.filter((application) => !statusFilter || application.status === statusFilter);
  const activeCount = applications.filter((application) => ['Applied', 'Interview'].includes(application.status)).length;
  const selectedCount = applications.filter((application) => application.status === 'Selected').length;
  const progress = applications.length ? Math.round((selectedCount / applications.length) * 100) : 0;

  function confirmDelete(application) {
    if (window.confirm(`Delete your application for ${application.jobTitle} at ${application.company}?`)) onDelete(application.id);
  }

  return (
    <section className="page applications-page">
      <div className="page-heading reveal">
        <div><span className="eyebrow">YOUR CAREER DASHBOARD</span><h1>Keep your progress in view.</h1><p>Every step counts. Review your applications and see where things stand.</p></div>
      </div>
      <div className="dashboard-stats reveal">
        <div className="dashboard-stat"><span>Total applications</span><strong>{applications.length}</strong><small>Opportunities you've pursued</small></div>
        <div className="dashboard-stat"><span>In progress</span><strong>{activeCount}</strong><small>Applied or interviewing</small></div>
        <div className="dashboard-stat progress-stat"><span>Selected</span><strong>{selectedCount}</strong><div className="progress-track" role="progressbar" aria-label="Selected application share" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"><span style={{ width: `${progress}%` }} /></div><small>{progress}% of your tracked applications</small></div>
      </div>
      <div className="applications-toolbar">
        <div><h2>Your applications</h2><span className="list-count">{filteredApplications.length} shown</span></div>
        <label className="select-field status-select"><span className="visually-hidden">Filter applications by status</span><select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}><option value="">All statuses</option>{statuses.map((status) => <option key={status}>{status}</option>)}</select></label>
      </div>
      {filteredApplications.length ? (
        <div className="applications-list">
          {filteredApplications.map((application) => (
            <article className="application-card reveal" key={application.id}>
              <div className="application-company-mark" aria-hidden="true">{application.company.charAt(0).toUpperCase()}</div>
              <div className="application-main"><span className="application-company">{application.company}</span><h3>{application.jobTitle}</h3><div className="application-details"><span>{application.studentName}</span><span>{formatDate(application.applicationDate)}</span><span>{application.email}</span></div></div>
              <span className={`status-badge status-${application.status.toLowerCase()}`}>{application.status}</span>
              <button className="delete-button" type="button" onClick={() => confirmDelete(application)} aria-label={`Delete ${application.jobTitle} at ${application.company}`}>Delete</button>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state"><span className="empty-icon" aria-hidden="true">↗</span><h2>No applications found</h2><p>{applications.length ? 'No applications match this status. Try another filter.' : 'Add your first application to start tracking your career progress.'}</p>{!applications.length && <a className="button" href="#/add-application">Add an application <span aria-hidden="true">→</span></a>}</div>
      )}
    </section>
  );
}

function formatDate(date) {
  const parsed = new Date(`${date}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? date : new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(parsed);
}