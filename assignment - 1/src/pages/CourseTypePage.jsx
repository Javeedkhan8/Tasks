import React, { useState } from 'react'
import CourseTypeForm from '../components/CourseTypeForm';

function CourseTypePage() {
  const [courseTypes,setCourseTypes] = useState([]);
  return <CourseTypeForm courseTypes={courseTypes} setCourseTypes={setCourseTypes}/>

}

export default CourseTypePage