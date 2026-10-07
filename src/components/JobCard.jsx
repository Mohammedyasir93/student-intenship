export default function JobCard({ job, onTrackApplication }) {
  return (
    <article className="job-card reveal">
      <div className="job-card-top">
        <div className="company-avatar" aria-hidden="true">{job.company.charAt(0)}</div>
        <span className="category-badge">{job.category}</span>
      </div>
      <h2>{job.title}</h2>
      <p className="job-company">{job.company}</p>
      <div className="job-meta">
        <span>{job.location}</span>
        <span className="meta-dot" aria-hidden="true" />
        <span>{job.type}</span>
      </div>
      <div className="job-actions">
        <a className="text-link" href={job.applyUrl} target="_blank" rel="noreferrer">Find live listings <span aria-hidden="true">↗</span></a>
        <button className="button button-small" type="button" onClick={() => onTrackApplication(job)}>Track application</button>
      </div>
    </article>
  );
}