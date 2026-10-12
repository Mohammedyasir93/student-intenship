import { useState } from 'react';

const initialForm = {
  email: '',
  password: '',
};

export default function StudentLoginPage() {
  const [formData, setFormData] = useState(initialForm);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Please enter both email and password.');
      setMessage('');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError('Please enter a valid student email address.');
      setMessage('');
      return;
    }

    setError('');
    setMessage(`Welcome back, ${formData.email.split('@')[0]}! Student login is ready.`);
    setFormData(initialForm);
  }

  return (
    <div className="page form-page login-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">STUDENT PORTAL</span>
          <h1>Login</h1>
        </div>
        <p>Access your internship dashboard and keep track of the jobs you have applied to.</p>
      </div>

      <form className="application-form login-form" onSubmit={handleSubmit} noValidate>
        {message && <div className="success-message">{message}</div>}

        <div className="login-box">
          <div className="login-intro">
            <span className="login-pill">Student Access</span>
            <h2>Welcome back</h2>
            <p>Use your college email to sign in and continue your internship journey.</p>
          </div>

          <div className="form-grid login-grid">
            <label className="form-field login-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="student@college.edu"
                aria-invalid={error ? 'true' : 'false'}
              />
            </label>

            <label className="form-field login-field">
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                aria-invalid={error ? 'true' : 'false'}
              />
            </label>
          </div>

          {error && <p className="field-error login-error">{error}</p>}

          <div className="form-footer login-footer">
            <p>Need help? Contact your placement office.</p>
            <button type="submit" className="button login-button">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}
