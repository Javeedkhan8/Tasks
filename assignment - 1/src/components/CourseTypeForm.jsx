import React, { useState, useEffect } from 'react';
import './CourseTypeForm.css';

function CourseTypeForm({ courseTypes, setCourseTypes }) {
  const [courseType, setCourseType] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  // Load course types from localStorage when the component mounts
  useEffect(() => {
    const storedCourseTypes = JSON.parse(localStorage.getItem("courseTypes")) || [];
    setCourseTypes(storedCourseTypes); // Update the parent state
  }, [setCourseTypes]);

  // Update localStorage whenever courseTypes changes
  useEffect(() => {
    if (courseTypes.length > 0) {
      localStorage.setItem("courseTypes", JSON.stringify(courseTypes));
    }
  }, [courseTypes]);

  const handleAddOrUpdate = () => {
    if (courseType.trim()) {
      if (editingIndex !== null) {
        let updatedTypes = [...courseTypes];
        updatedTypes[editingIndex] = courseType;
        setCourseTypes(updatedTypes);
        setEditingIndex(null);
      } else {
        setCourseTypes([...courseTypes, courseType]);
      }
      setCourseType('');
    }
  };

  const handleEdit = (index) => {
    setCourseType(courseTypes[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedList = courseTypes.filter((_, i) => i !== index);
    setCourseTypes(updatedList);
  };

  return (
    <div className="course-type-form">
      <h2>Manage Course Types</h2>
      <input
        type="text"
        placeholder="Enter course type"
        value={courseType}
        onChange={(e) => setCourseType(e.target.value)}
      />
      <button onClick={handleAddOrUpdate}>
        {editingIndex !== null ? "Update" : "Add"}
      </button>

      <ul>
        {courseTypes.length > 0 ? (
          courseTypes.map((type, index) => (
            <li key={index}>
              {type}
              <div>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>No course types added yet.</p>
        )}
      </ul>
    </div>
  );
}

export default CourseTypeForm;
