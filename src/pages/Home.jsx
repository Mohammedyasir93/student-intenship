const careerSteps = [
  { number: '01', title: 'Discover', copy: 'Find a role that fits your interests.' },
  { number: '02', title: 'Apply', copy: 'Keep each opportunity moving forward.' },
  { number: '03', title: 'Grow', copy: 'Build experience, one step at a time.' },
];

export default function Home({ jobCount, applicationCount }) {
  return (
    <div className="page home-page">
      <section className="hero reveal">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER STARTS HERE</span>
          <h1>Student Job<br /><span>Tracker</span></h1>
          <p>Find internships, explore opportunities, and track your applications.</p>
          <div className="hero-actions">
            <a className="button" href="#/jobs">Explore jobs <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="#/applications">Track applications</a>
          </div>
        </div>
        <div className="hero-art" aria-label="Career growth illustration">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-sun" />
          <div className="art-hill hill-back" />
          <div className="art-hill hill-front" />
          <div className="art-path" />
          <span className="art-label label-top">GROW WITH PURPOSE</span>
          <span className="art-label label-bottom">YOUR JOURNEY, IN MOTION</span>
        </div>
      </section>

      <section className="home-overview" aria-label="Tracker overview">
        <div className="overview-intro">
          <span className="eyebrow">YOUR WORKSPACE</span>
          <h2>Progress starts with a plan.</h2>
        </div>
        <div className="summary-card">
          <span className="summary-icon jobs-icon" aria-hidden="true">↗</span>
          <span className="summary-label">Total jobs</span>
          <strong>{jobCount}</strong>
          <a href="#/jobs">Browse internships <span aria-hidden="true">→</span></a>
        </div>
        <div className="summary-card">
          <span className="summary-icon apps-icon" aria-hidden="true">✓</span>
          <span className="summary-label">Total applications</span>
          <strong>{applicationCount}</strong>
          <a href="#/applications">View your progress <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="career-section">
        <div className="career-heading">
          <div><span className="eyebrow">CAREER PROGRESS</span><h2>Small steps. Big momentum.</h2></div>
          <p>Every application is a chance to learn, connect, and get closer to the work you want to do.</p>
        </div>
        <div className="career-steps">
          {careerSteps.map((step, index) => (
            <article className="career-step" key={step.number}>
              <span className="step-number">{step.number}</span>
              <div className="step-content"><h3>{step.title}</h3><p>{step.copy}</p></div>
              <div className="step-track" aria-hidden="true"><span style={{ width: `${[100, 67, 34][index]}%` }} /></div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}