import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Jobs from './pages/Jobs.jsx';
import AddApplication from './pages/AddApplication.jsx';
import Applications from './pages/Applications.jsx';

const STORAGE_KEY = 'student-job-tracker-applications';

function readApplications() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Unable to read saved applications:', error);
    return [];
  }
}

function getPage() {
  const page = window.location.hash.replace(/^#\/?/, '').split('/')[0];
  return ['jobs', 'add-application', 'applications'].includes(page) ? page : 'home';
}

export default function App() {
  const [page, setPage] = useState(getPage);
  const [applications, setApplications] = useState(readApplications);
  const [selectedJob, setSelectedJob] = useState(null);
  const [storageError, setStorageError] = useState('');

  useEffect(() => {
    const syncPage = () => setPage(getPage());
    window.addEventListener('hashchange', syncPage);
    return () => window.removeEventListener('hashchange', syncPage);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
      setStorageError('');
    } catch (error) {
      console.error('Unable to save applications:', error);
      setStorageError('Your changes could not be saved in this browser.');
    }
  }, [applications]);

  function openApplicationForm(job = null) {
    setSelectedJob(job);
    window.location.hash = '#/add-application';
  }

  function saveApplication(application) {
    setApplications((current) => [{ ...application, id: crypto.randomUUID() }, ...current]);
    setSelectedJob(null);
  }

  function deleteApplication(id) {
    setApplications((current) => current.filter((application) => application.id !== id));
  }

  let content;
  if (page === 'jobs') {
    content = <Jobs onTrackApplication={openApplicationForm} />;
  } else if (page === 'add-application') {
    content = <AddApplication initialJob={selectedJob} onSave={saveApplication} />;
  } else if (page === 'applications') {
    content = <Applications applications={applications} onDelete={deleteApplication} />;
  } else {
    content = <Home jobCount={10} applicationCount={applications.length} />;
  }

  return (
    <div className="app-shell">
      <Navbar activePage={page} />
      {storageError && <div className="storage-notice" role="alert">{storageError}</div>}
      <main className="main-content" key={page}>{content}</main>
      <Footer />
    </div>
  );
}