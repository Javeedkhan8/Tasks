import React, { useState } from 'react'
import CourseForm from '../components/CourseForm'

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  return 
      <CourseForm courses={courses} setCourses={setCourses} />
}

export default CoursesPage