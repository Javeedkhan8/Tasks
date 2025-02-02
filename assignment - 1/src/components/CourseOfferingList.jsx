import React from 'react';

function CourseOfferingList({ offerings }) {
  // Inline CSS styles
  const containerStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '90%', // Makes the container more responsive
    maxWidth: '450px', // Keeps the max-width on larger screens
    margin: '0 auto',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#2b6cb0',
    fontSize: '1.75rem',
    marginBottom: '20px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
    marginTop: '20px',
  };

  const listItemStyle = {
    backgroundColor: '#f7fafc',
    borderRadius: '4px',
    padding: '10px',
    marginBottom: '8px',
    fontSize: '1.1rem',
    color: '#2d3748',
  };

  const noOfferingsStyle = {
    textAlign: 'center',
    color: '#e53e3e',
    fontSize: '1.2rem',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Available Course Offerings</h2>
      {offerings.length === 0 ? (
        <p style={noOfferingsStyle}>No Course offerings available</p>
      ) : (
        <ul style={listStyle}>
          {offerings.map((offering, index) => (
            <li key={index} style={listItemStyle}>{offering}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CourseOfferingList;
