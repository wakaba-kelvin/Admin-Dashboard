import React, { useState } from 'react';
import { useAddEmployeeMutation } from '../../Feature/Employee/Employee';
import './AddEmployee.scss';

function AddEmployee() {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Address: '',
    BirthDate: '',
    ContactInfo: '',
    Gender: 'Male',
    Position: '',
    Email: '',
    Password: '',
    PhotoURL: 'https://example.com/photo.jpg',
    Schedule: '9AM-5PM',
    HourlyRate: '', // New field
    GrossPay: '', // New field
    NHIF: '', // New field
    NSSF: '', // New field
  });

  const [addEmployeeMutation, { isLoading }] = useAddEmployeeMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEmployeeMutation(formData);
      setFormData({
        FirstName: '',
        LastName: '',
        Address: '',
        BirthDate: '',
        ContactInfo: '',
        Gender: 'Male',
        Position: '',
        Email: '',
        Password: '',
        PhotoURL: 'www.photoexmple.com',
        Schedule: '',
        Role: 'employee',
        HourlyRate: '', // Reset new field
        GrossPay: '', // Reset new field
        NHIF: '', // Reset new field
        NSSF: '', // Reset new field
      });
      toast.success('Employee added successfully!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000 
      });
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div className="AddEmployee">
      <div className="header">
        <h2>Add New Employee</h2>
      </div>
      <div className="personal">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="FirstName">First Name:</label>
            <input type="text" id="FirstName" name="FirstName" value={formData.FirstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="LastName">Last Name:</label>
            <input type="text" id="LastName" name="LastName" value={formData.LastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="Address">Address:</label>
            <input type="text" id="Address" name="Address" value={formData.Address} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="BirthDate">Date of Birth:</label>
            <input type="date" id="BirthDate" name="BirthDate" value={formData.BirthDate} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="ContactInfo">Contact:</label>
            <input type="tel" id="ContactInfo" name="ContactInfo" value={formData.ContactInfo} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="Gender">Gender:</label>
            <select id="Gender" name="Gender" value={formData.Gender} onChange={handleChange} required>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Position">Position:</label>
            <input type="text" id="Position" name="Position" value={formData.Position} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="Schedule">Schedule</label>
            <input type='text' id='Schedule' name='Schedule' value={formData.Schedule} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="PhotoURL">Photo:</label>
            <input type="file" id="PhotoURL" name="PhotoURL" onChange={handleChange} accept="image/*" />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email:</label>
            <input type="email" id="Email" name="Email" value={formData.Email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password:</label>
            <input type="password" id="Password" name="Password" value={formData.Password} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="HourlyRate">Hourly Rate:</label>
            <input type="number" id="HourlyRate" name="HourlyRate" value={formData.HourlyRate} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="GrossPay">Gross Pay:</label>
            <input type="number" id="GrossPay" name="GrossPay" value={formData.GrossPay} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="NHIF">NHIF:</label>
            <input type="number" id="NHIF" name="NHIF" value={formData.NHIF} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="NSSF">NSSF Deduction:</label>
            <input type="number" id="NSSF" name="NSSF" value={formData.NSSF} onChange={handleChange} required />
          </div>
          <button type="submit" disabled={isLoading}>Add Employee</button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
