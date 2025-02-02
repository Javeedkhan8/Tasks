import React, { useState } from 'react'
import CourseOfferingForm from '../components/CourseOfferingForm'
import CourseOfferingList from '../components/CourseOfferingList'

function CourseOfferingPage() {
  const [courses,setCourses] = useState([]);
  const [courseTypes,setCourseTypes] = useState([]);
  const [offerings,setOfferings] = useState([]);
  return (
    <div>
      <CourseOfferingForm courses={courses} courseTypes={courseTypes} offerings={offerings} setOfferings={setOfferings} />
      <CourseOfferingList offerings={offerings}/>
    </div>
  )
}

export default CourseOfferingPage