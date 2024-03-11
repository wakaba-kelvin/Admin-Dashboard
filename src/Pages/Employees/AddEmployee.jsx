import React, { useState } from 'react';
import './AddEmployee.scss';

function AddEmployee() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    dob: '',
    contact: '',
    gender: 'male',
    position: '',
    email: '',
    photo: null,
  });

  const [employeeFormData, setEmployeeFormData] = useState({
    employeeId: generateEmployeeId(),
    department: '',
    designation: '',
    basicSalary: '',
    joiningDate: '',
    status: '',
  });

  const [financialFormData, setFinancialFormData] = useState({
    accountHolderName: '',
    accountNumber: '',
    bankName: '',
  });

  const handleChange = (e, formType) => {
    const { name, value, type, files } = e.target;
    const newValue = type === 'file' ? files[0] : value;

    if (formType === 'employee') {
      setEmployeeFormData({
        ...employeeFormData,
        [name]: newValue,
      });
    } else if (formType === 'financial') {
      setFinancialFormData({
        ...financialFormData,
        [name]: newValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: newValue,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Personal Details submitted:', formData);
    console.log('Employee Details submitted:', employeeFormData);
    console.log('Financial Details submitted:', financialFormData);
  };

  // Function to generate a random employee ID (for demonstration purposes)
  function generateEmployeeId() {
    return Math.floor(1000 + Math.random() * 9000);
  }

  return (
    <div className="AddEmployee">
      <div className="personal">
        <div className="employees-details">
          <form onSubmit={handleSubmit} className="employees-details-form">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={(e) => handleChange(e, 'personal')} required />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={(e) => handleChange(e, 'personal')} required />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={(e) => handleChange(e, 'personal')} required />
            </div>

            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" name="dob" value={formData.dob} onChange={(e) => handleChange(e, 'personal')} required />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact:</label>
              <input type="tel" id="contact" name="contact" value={formData.contact} onChange={(e) => handleChange(e, 'personal')} required />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select id="gender" name="gender" value={formData.gender} onChange={(e) => handleChange(e, 'personal')} required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="position">Position:</label>
              <input type="text" id="position" name="position" value={formData.position} onChange={(e) => handleChange(e, 'personal')} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={(e) => handleChange(e, 'personal')} required />
            </div>

            <div className="form-group">
              <label htmlFor="photo">Photo:</label>
              <input type="file" id="photo" name="photo" onChange={(e) => handleChange(e, 'personal')} accept="image/*" />
            </div>

            <button type="submit">Submit Personal Details</button>
          </form>
        </div>
        <div className="company">
          <div className="logins">
            <h2>Employee Details</h2>
            <hr />
            <form onSubmit={handleSubmit} className="employee-details">
              <div className="form-group">
                <label htmlFor="employeeId">Employee ID:</label>
                <input type="text" id="employeeId" name="employeeId" value={employeeFormData.employeeId} readOnly />
              </div>

              <div className="form-group">
                <label htmlFor="department">Department:</label>
                <input type="text" id="department" name="department" value={employeeFormData.department} onChange={(e) => handleChange(e, 'employee')} required />
              </div>

              <div className="form-group">
                <label htmlFor="designation">Designation:</label>
                <input type="text" id="designation" name="designation" value={employeeFormData.designation} onChange={(e) => handleChange(e, 'employee')} required />
              </div>

              <div className="form-group">
                <label htmlFor="basicSalary">Basic Salary:</label>
                <input type="number" id="basicSalary" name="basicSalary" value={employeeFormData.basicSalary} onChange={(e) => handleChange(e, 'employee')} required />
              </div>

              <div className="form-group">
                <label htmlFor="joiningDate">Joining Date:</label>
                <input type="date" id="joiningDate" name="joiningDate" value={employeeFormData.joiningDate} onChange={(e) => handleChange(e, 'employee')} required />
              </div>

              <div className="form-group">
                <label htmlFor="status">Status:</label>
                <input type="text" id="status" name="status" value={employeeFormData.status} onChange={(e) => handleChange(e, 'employee')} required />
              </div>

              <button type="submit">Submit Employee Details</button>
            </form>

            <h2>Financial Details</h2>
            <form onSubmit={handleSubmit} className="financial-details">
              <div className="form-group">
                <label htmlFor="accountHolderName">Account Holder Name:</label>
                <input type="text" id="accountHolderName" name="accountHolderName" value={financialFormData.accountHolderName} onChange={(e) => handleChange(e, 'financial')} required />
              </div>

              <div className="form-group">
                <label htmlFor="accountNumber">Account Number:</label>
                <input type="text" id="accountNumber" name="accountNumber" value={financialFormData.accountNumber} onChange={(e) => handleChange(e, 'financial')} required />
              </div>

              <div className="form-group">
                <label htmlFor="bankName">Bank Name:</label>
                <input type="text" id="bankName" name="bankName" value={financialFormData.bankName} onChange={(e) => handleChange(e, 'financial')} required />
              </div>

              <button type="submit">Submit Financial Details</button>
            </form>
          </div>
        </div>
      </div>
      <div className="accounts-details"></div>
    </div>
  );
}

export default AddEmployee;
