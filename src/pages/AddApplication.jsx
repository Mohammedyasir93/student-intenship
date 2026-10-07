import { useState } from 'react';

const initialValues = { studentName: '', email: '', jobTitle: '', company: '', applicationDate: new Date().toISOString().slice(0, 10), status: 'Applied' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function AddApplication({ initialJob, onSave }) {
  const [values, setValues] = useState(() => ({ ...initialValues, ...(initialJob ? { jobTitle: initialJob.title, company: initialJob.company } : {}) }));
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSaved(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};
    ['studentName', 'email', 'jobTitle', 'company', 'applicationDate', 'status'].forEach((field) => {
      if (!values[field].trim()) nextErrors[field] = 'This field is required.';
    });
    if (values.email && !emailPattern.test(values.email.trim())) nextErrors.email = 'Enter a valid email address, such as name@example.com.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    onSave({ ...values, studentName: values.studentName.trim(), email: values.email.trim(), jobTitle: values.jobTitle.trim(), company: values.company.trim() });
    setValues({ ...initialValues, applicationDate: new Date().toISOString().slice(0, 10) });
    setSaved(true);
  }

  return (
    <section className="page form-page">
      <div className="page-heading reveal"><div><span className="eyebrow">KEEP YOUR MOMENTUM</span><h1>Log an application.</h1><p>Capture the details now, so you can focus on what comes next.</p></div></div>
      <form className="application-form reveal" onSubmit={handleSubmit} noValidate>
        {saved && <div className="success-message" role="status">Application saved. Your progress is up to date.</div>}
        <div className="form-grid">
          <FormField label="Student name" name="studentName" value={values.studentName} onChange={updateField} error={errors.studentName} placeholder="Your full name" />
          <FormField label="Email address" name="email" type="email" value={values.email} onChange={updateField} error={errors.email} placeholder="you@example.com" />
          <FormField label="Job title" name="jobTitle" value={values.jobTitle} onChange={updateField} error={errors.jobTitle} placeholder="e.g. Software Intern" />
          <FormField label="Company name" name="company" value={values.company} onChange={updateField} error={errors.company} placeholder="Company or organization" />
          <FormField label="Application date" name="applicationDate" type="date" value={values.applicationDate} onChange={updateField} error={errors.applicationDate} />
          <label className="form-field">
            <span>Application status</span>
            <select name="status" value={values.status} onChange={updateField} aria-invalid={Boolean(errors.status)}>
              {['Applied', 'Interview', 'Selected', 'Rejected'].map((status) => <option key={status}>{status}</option>)}
            </select>
            {errors.status && <span className="field-error">{errors.status}</span>}
          </label>
        </div>
        <div className="form-footer"><p>All fields are required.</p><button className="button" type="submit">Save application <span aria-hidden="true">→</span></button></div>
      </form>
    </section>
  );
}

function FormField({ label, name, type = 'text', value, onChange, error, placeholder }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} />
      {error && <span className="field-error" id={`${name}-error`}>{error}</span>}
    </label>
  );
}