import { useState } from 'react';
import JobCard from '../components/JobCard.jsx';
import SearchBar from '../components/SearchBar.jsx';

const jobs = [
  { id: 1, title: 'Embedded Systems Intern', company: 'CircuitRoot Labs', location: 'Bengaluru, India', category: 'Embedded Systems', type: 'Hybrid' },
  { id: 2, title: 'Frontend Developer Intern', company: 'Northstar Digital', location: 'Remote', category: 'Web Development', type: 'Remote' },
  { id: 3, title: 'IoT Engineering Intern', company: 'Fieldnote Technologies', location: 'Pune, India', category: 'IoT', type: 'On-site' },
  { id: 4, title: 'Electronics Design Intern', company: 'Brightwave Devices', location: 'Chennai, India', category: 'Electronics', type: 'Hybrid' },
  { id: 5, title: 'Software QA Intern', company: 'Juniper Stack', location: 'Remote', category: 'Software', type: 'Remote' },
  { id: 6, title: 'IoT Product Intern', company: 'Greenline Sensors', location: 'Hyderabad, India', category: 'IoT', type: 'On-site' },
  { id: 7, title: 'Web Application Intern', company: 'Studio Current', location: 'Mumbai, India', category: 'Web Development', type: 'Hybrid' },
  { id: 8, title: 'Hardware Validation Intern', company: 'Lumen Circuit Works', location: 'Bengaluru, India', category: 'Electronics', type: 'On-site' },
  { id: 9, title: 'Software Engineering Intern', company: 'Cedarbyte Systems', location: 'Pune, India', category: 'Software', type: 'Hybrid' },
  { id: 10, title: 'Firmware Development Intern', company: 'Morrow Embedded', location: 'Remote', category: 'Embedded Systems', type: 'Remote' },
].map((job) => ({ ...job, applyUrl: `https://www.google.com/search?q=${encodeURIComponent(`${job.title} internships`)}` }));

const categories = ['Electronics', 'Embedded Systems', 'IoT', 'Web Development', 'Software'];
const locations = [...new Set(jobs.map((job) => job.location))].sort();

export default function Jobs({ onTrackApplication }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const filteredJobs = jobs.filter((job) => {
    const query = search.trim().toLowerCase();
    const matchesSearch = !query || job.title.toLowerCase().includes(query) || job.company.toLowerCase().includes(query);
    return matchesSearch && (!category || job.category === category) && (!location || job.location === location);
  });

  return (
    <section className="page jobs-page">
      <div className="page-heading reveal">
        <div><span className="eyebrow">OPPORTUNITY DIRECTORY</span><h1>Find your starting point.</h1><p>Explore sample internships across growing fields. Listings are examples, not verified live vacancies.</p></div>
        <span className="result-count">{filteredJobs.length} <span>opportunities</span></span>
      </div>
      <SearchBar search={search} onSearch={setSearch} category={category} onCategoryChange={setCategory} location={location} onLocationChange={setLocation} categories={categories} locations={locations} />
      {filteredJobs.length > 0 ? (
        <div className="jobs-grid">{filteredJobs.map((job) => <JobCard key={job.id} job={job} onTrackApplication={onTrackApplication} />)}</div>
      ) : (
        <div className="empty-state"><span className="empty-icon" aria-hidden="true">⌕</span><h2>No results found</h2><p>Try another title, company, category, or location.</p></div>
      )}
      <p className="sample-disclaimer">Sample records for a student project. Company names and vacancies are illustrative and are not verified.</p>
    </section>
  );
}