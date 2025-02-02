import React, { useState, useEffect } from 'react';
import "./Registration.css"

function RegistrationForm({ offerings = [], registrations, setRegistrations }) {
  const [studentName, setStudentName] = useState('');
  const [selectedOffering, setSelectedOffering] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  // Load registrations from localStorage when the component mounts
  useEffect(() => {
    const storedRegistrations = JSON.parse(localStorage.getItem('registrations')) || [];
    setRegistrations(storedRegistrations);
  }, [setRegistrations]);

  // Update localStorage whenever registrations are updated
  useEffect(() => {
    if (registrations.length > 0) {
      localStorage.setItem('registrations', JSON.stringify(registrations));
    }
  }, [registrations]);

  const handleRegisterOrUpdate = () => {
    if (studentName && selectedOffering) {
      const newRegistration = { name: studentName, course: selectedOffering, confirmed: false };

      if (editingIndex !== null) {
        let updatedRegistrations = [...registrations];
        updatedRegistrations[editingIndex] = newRegistration;
        setRegistrations(updatedRegistrations);
        setEditingIndex(null);
      } else {
        setRegistrations([...registrations, newRegistration]);
      }

      setStudentName('');
      setSelectedOffering('');
    }
  };

  const handleEdit = (index) => {
    setStudentName(registrations[index].name);
    setSelectedOffering(registrations[index].course);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedRegistrations = registrations.filter((_, i) => i !== index);
    setRegistrations(updatedRegistrations);
  };

  const handleConfirm = (index) => {
    let updatedRegistrations = [...registrations];
    updatedRegistrations[index].confirmed = true;
    setRegistrations(updatedRegistrations);
  };

  return (
    <div>
      <h2>Register Student</h2>
      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <select onChange={(e) => setSelectedOffering(e.target.value)} value={selectedOffering}>
        <option value="">Select Course Offering</option>
        {(offerings || []).map((offering, index) => (
          <option key={index} value={offering}>{offering}</option>
        ))}
      </select>

      <button onClick={handleRegisterOrUpdate}>
        {editingIndex !== null ? 'Update' : 'Register'}
      </button>

      <ul>
        {registrations.map((reg, index) => (
          <li key={index} style={{ color: reg.confirmed ? 'green' : 'black' }}>
            {reg.name} - {reg.course} {reg.confirmed ? "(Completed ✅)" : ""}
            {!reg.confirmed && <button onClick={() => handleConfirm(index)}>Confirm</button>}
            {!reg.confirmed && <button onClick={() => handleEdit(index)}>Edit</button>}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RegistrationForm;
