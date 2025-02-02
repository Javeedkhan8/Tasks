import React, { useState } from 'react';
import RegistrationForm from '../components/RegistrationForm';

function StudentRegistrationPage() {
  const [offerings, setOfferings] = useState([]); // ✅ Initialized as empty array
  const [registrations, setRegistrations] = useState([]);

  return (
    <RegistrationForm 
      offerings={offerings} // ✅ Ensure correct prop name
      registrations={registrations} 
      setRegistrations={setRegistrations} 
    />
  );
}

export default StudentRegistrationPage;
