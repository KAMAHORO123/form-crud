import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; 

const Form = () => {
  const [formData, setFormData] = useState({
    title: '',
    first_name: '',
    last_name: '',
    position: '',
    company: '',
    business: '',
    employees: '',
    street: '',
    additional: '',
    zip: '',
    place: '',
    country: '',
    code: '',
    phone: '',
    your_email: '',
    checkbox: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/forms/submit', formData);
      console.log('Form submitted:', response.data);
      // Clear form data after successful submission
      setFormData({
        title: '',
        first_name: '',
        last_name: '',
        position: '',
        company: '',
        business: '',
        employees: '',
        street: '',
        additional: '',
        zip: '',
        place: '',
        country: '',
        code: '',
        phone: '',
        your_email: '',
        checkbox: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="page-content">
      <div className="form-v10-content">
        <form className="form-detail" onSubmit={handleSubmit} id="myform">
          <div className="form-left">
            <h2>General Information</h2>
            <div className="form-row">
              <select name="title" value={formData.title} onChange={handleChange}>
                <option value="title">Title</option>
                <option value="businessman">Businessman</option>
                <option value="reporter">Reporter</option>
                <option value="secretary">Secretary</option>
              </select>
              <span className="select-btn">
                <i className="zmdi zmdi-chevron-down"></i>
              </span>
            </div>
            <div className="form-group">
              <div className="form-row form-row-1">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="input-text"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row form-row-2">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="input-text"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <select name="position" value={formData.position} onChange={handleChange}>
                <option value="position">Position</option>
                <option value="director">Director</option>
                <option value="manager">Manager</option>
                <option value="employee">Employee</option>
              </select>
              <span className="select-btn">
                <i className="zmdi zmdi-chevron-down"></i>
              </span>
            </div>
            <div className="form-row">
              <input
                type="text"
                name="company"
                className="company"
                id="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <div className="form-row form-row-3">
                <input
                  type="text"
                  name="business"
                  className="business"
                  id="business"
                  placeholder="Business Arena"
                  value={formData.business}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row form-row-4">
                <select name="employees" value={formData.employees} onChange={handleChange}>
                  <option value="employees">Employees</option>
                  <option value="trainee">Trainee</option>
                  <option value="colleague">Colleague</option>
                  <option value="associate">Associate</option>
                </select>
                <span className="select-btn">
                  <i className="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="form-right">
            <h2>Contact Details</h2>
            <div className="form-row">
              <input
                type="text"
                name="street"
                className="street"
                id="street"
                placeholder="Street + Nr"
                value={formData.street}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="additional"
                className="additional"
                id="additional"
                placeholder="Additional Information"
                value={formData.additional}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <div className="form-row form-row-1">
                <input
                  type="text"
                  name="zip"
                  className="zip"
                  id="zip"
                  placeholder="Zip Code"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row form-row-2">
                <select name="place" value={formData.place} onChange={handleChange}>
                  <option value="place">Place</option>
                  <option value="Street">Street</option>
                  <option value="District">District</option>
                  <option value="City">City</option>
                </select>
                <span className="select-btn">
                  <i className="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
            </div>
            <div className="form-row">
              <select name="country" value={formData.country} onChange={handleChange}>
                <option value="country">Country</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Malaysia">Malaysia</option>
                <option value="India">India</option>
              </select>
              <span className="select-btn">
                <i className="zmdi zmdi-chevron-down"></i>
              </span>
            </div>
            <div className="form-group">
              <div className="form-row form-row-1">
                <input
                  type="text"
                  name="code"
                  className="code"
                  id="code"
                  placeholder="Code +"
                  value={formData.code}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row form-row-2">
                <input
                  type="text"
                  name="phone"
                  className="phone"
                  id="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <input
                type="text"
                name="your_email"
                id="your_email"
                className="input-text"
                required
                pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                placeholder="Your Email"
                value={formData.your_email}
                onChange={handleChange}
              />
            </div>
            <div className="form-checkbox">
              <label className="container">
                <p>
                  I do accept the <a href="#" className="text">Terms and Conditions</a> of your site.
                </p>
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={formData.checkbox}
                  onChange={(e) => setFormData({ ...formData, checkbox: e.target.checked })}
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="form-row-last">
              <input type="submit" name="register" className="register" value="Register Badge" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
