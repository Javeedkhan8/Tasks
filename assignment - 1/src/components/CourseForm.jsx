import React, { useState, useEffect } from 'react';
import './CourseForm.css'; // Import the CSS file

function CourseForm({ courses, setCourses }) {
  const [course, setCourse] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  // Load courses from localStorage on component mount
  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
    setCourses(storedCourses);
  }, [setCourses]);

  // Update localStorage whenever courses are updated
  useEffect(() => {
    if (courses.length > 0) {
      localStorage.setItem('courses', JSON.stringify(courses));
    }
  }, [courses]);

  const handleAddOrUpdate = () => {
    if (course.trim()) {
      if (editingIndex !== null) {
        let updatedCourses = [...courses];
        updatedCourses[editingIndex] = course;
        setCourses(updatedCourses);
        setEditingIndex(null);
      } else {
        setCourses([...courses, course]);
      }
      setCourse('');
    }
  };

  const handleEdit = (index) => {
    setCourse(courses[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  };

  return (
    <div className="course-form">
      <h2>Manage Courses</h2>
      <input
        type="text"
        placeholder="Enter course name"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <button onClick={handleAddOrUpdate}>
        {editingIndex !== null ? 'Update' : 'Add'}
      </button>

      {/* Display the list of courses */}
      <ul>
        {courses.length > 0 ? (
          courses.map((c, index) => (
            <li key={index}>
              {c}
              <div>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>No courses added yet.</p>
        )}
      </ul>
    </div>
  );
}

export default CourseForm;
