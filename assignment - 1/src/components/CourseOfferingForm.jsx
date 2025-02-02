import React, { useState, useEffect } from 'react';
import './CourseOffering.css'; // Import the CSS file

function CourseOfferingForm({ courses, courseTypes, offerings, setOfferings }) {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  // Load offerings from localStorage when the component mounts
  useEffect(() => {
    const storedOfferings = JSON.parse(localStorage.getItem('offerings')) || [];
    setOfferings(storedOfferings);
  }, [setOfferings]);

  // Update localStorage whenever offerings are updated
  useEffect(() => {
    if (offerings.length > 0) {
      localStorage.setItem('offerings', JSON.stringify(offerings));
    }
  }, [offerings]);

  const handleAddOrUpdate = () => {
    if (selectedCourse && selectedType) {
      const newOffering = `${selectedType} - ${selectedCourse}`;
      if (editingIndex !== null) {
        let updatedOfferings = [...offerings];
        updatedOfferings[editingIndex] = newOffering;
        setOfferings(updatedOfferings);
        setEditingIndex(null);
      } else {
        setOfferings([...offerings, newOffering]);
      }
      setSelectedCourse('');
      setSelectedType('');
    }
  };

  const handleEdit = (index) => {
    const [type, course] = offerings[index].split(' - ');
    setSelectedType(type);
    setSelectedCourse(course);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedOfferings = offerings.filter((_, i) => i !== index);
    setOfferings(updatedOfferings);
  };

  return (
    <div className="course-offering-form">
      <h2>Manage Course Offerings</h2>

      {/* Course Type Selection */}
      <select onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
        <option value="">Select Course Type</option>
        {courseTypes.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>

      {/* Course Selection */}
      <select onChange={(e) => setSelectedCourse(e.target.value)} value={selectedCourse}>
        <option value="">Select Course</option>
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <option key={index} value={course}>{course}</option>
          ))
        ) : (
          <option disabled>No courses available</option>
        )}
      </select>

      <button onClick={handleAddOrUpdate}>
        {editingIndex !== null ? 'Update' : 'Add'}
      </button>

      {/* List of Offerings */}
      <ul>
        {offerings.length > 0 ? (
          offerings.map((offering, index) => (
            <li key={index}>
              {offering}
              <div>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>No offerings available.</p>
        )}
      </ul>
    </div>
  );
}

export default CourseOfferingForm;
