import React, { useState } from 'react';
import './App.css';
// import './design.css';
;
const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rollNo: '',
    errors: {
      name: '',
      email: '',
      phone: '',
      rollNo: '',
      duplicateRollNo: ''
    },
    submittedData: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errors = { ...formData.errors };
  
    switch (name) {
      case 'name':
        errors.name = value.length === 0 ? 'Name cannot be blank' : '';
        if (!/^[a-zA-Z0-9 ]+$/.test(value)) {
          errors.name = 'Name must not contain special characters';
        }
        break;
      case 'email':
        errors.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
        break;
      case 'phone':
        errors.phone = !/^\d{10}$/.test(value) ? 'Phone number must be 10 digits' : '';
        break;
      case 'rollNo':
        
        errors.duplicateRollNo = formData.submittedData.some(data => data.rollNo === value) ? 'Roll number already exists' : '';
        break;
      default:
        break;
    }
  
    setFormData({
      ...formData,
      [name]: value,
      errors: { ...errors, [name]: errors[name] }
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = { ...formData.errors };
    let hasError = false;

    Object.keys(formData).forEach(key => {
      if (key !== 'errors' && key !== 'submittedData' && !formData[key]) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} cannot be blank`;
        hasError = true;
      }
    });

    setFormData({ ...formData, errors });

    if (!hasError) {
      const newData = { ...formData };
      delete newData.errors;
      newData.submittedData.push(newData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        rollNo: '',
        errors: {
          name: '',
          email: '',
          phone: '',
          rollNo: '',
          duplicateRollNo: ''
        },
        submittedData: newData.submittedData
      });
    }
  };

  return (
    <div className="container">
      <h2>Validation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {formData.errors.name && <span className="error">{formData.errors.name}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {formData.errors.email && <span className="error">{formData.errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {formData.errors.phone && <span className="error">{formData.errors.phone}</span>}
        </div>
        <div className="form-group">
          <label>Roll No:</label>
          <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} />
          {formData.errors.rollNo && <span className="error">{formData.errors.rollNo}</span>}
          {formData.errors.duplicateRollNo && <span className="error">{formData.errors.duplicateRollNo}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {formData.submittedData.length > 0 && (
        <div className="submitted-data">
          <h2>Submitted Data</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Roll No</th>
              </tr>
            </thead>
            <tbody>
              {formData.submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.rollNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
