import React, { useState } from 'react';
import './Desig.css';

const MyFormTraineeDeveloperTest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    tel: '',
    address: '',
    gender: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [submissionResult, setSubmissionResult] = useState(null);

  const validateForm = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = 'name is a requied field';
    }

    if (!formData.email.trim()) {
      errors.email = 'email is a requied field';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'invalid email format';
    }

    if (!formData.password.trim()) {
      errors.password = 'password is a requied field';
    }

    if (!formData.tel.trim()) {
      errors.tel = 'tel is a requied field';
    } else if (!isValidTel(formData.tel)) {
      errors.tel = 'the phone number format is incorrect.';
    }

    if (!formData.address.trim()) {
      errors.address = 'address is a requied field';
    }

    if (!formData.gender.trim()) {
      errors.gender = 'gender is a requied field';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidTel = (tel) => {
    return /^[0-9]{10}$/.test(tel);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmissionResult({ ...formData });
    }
  };

  return (
    <div className="my-form-container">
      <form onSubmit={handleSubmit} className="my-form">
        <div className="form-group">
        <label htmlFor="name">Name*</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {formErrors.name && <span style={{ color: 'red' }}>{formErrors.name}</span>}
        </div>

        <div>
          <label>Email*</label>
          <input
            type="text"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {formErrors.email && <span style={{ color: 'red' }}>{formErrors.email}</span>}
        </div>

        <div>
          <label>Password*</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          {formErrors.password && <span style={{ color: 'red' }}>{formErrors.password}</span>}
        </div>

        <div>
          <label>Tel*</label>
          <input
            type="text"
            value={formData.tel}
            onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
          />
          {formErrors.tel && <span style={{ color: 'red' }}>{formErrors.tel}</span>}
        </div>

        <div>
          <label>Address*</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
          {formErrors.address && <span style={{ color: 'red' }}>{formErrors.address}</span>}
        </div>

        <div>
          <label>Gender*</label>
          <select
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          >
            <option value="">select gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          {formErrors.gender && <span style={{ color: 'red' }}>{formErrors.gender}</span>}
        </div>

        <button type="submit">submit</button>
      </form>

      {submissionResult && (
        <div className="submission-result">
          <h2>Submission from form</h2>
          <p>
            <strong>Name*</strong> {submissionResult.name}
          </p>
          <p>
            <strong>Email*</strong> {submissionResult.email}
          </p>
          <p>
            <strong>Tel*</strong> {submissionResult.tel}
          </p>
          <p>
            <strong>Address*</strong> {submissionResult.address}
          </p>
          <p>
            <strong>Gender:</strong> {submissionResult.gender}
          </p>
        </div>
      )}
    </div>
  );
};

export default MyFormTraineeDeveloperTest;
