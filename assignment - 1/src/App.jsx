import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { useState } from "react";
import CourseTypeForm from "./components/CourseTypeForm";
import CourseForm from "./components/CourseForm";
import CourseOfferingForm from "./components/CourseOfferingForm";
import CourseOfferingList from "./components/CourseOfferingList";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  // States to hold data
  const [courseTypes, setCourseTypes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [offerings, setOfferings] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  return (
    <Router>
      <div>
        <h1>Student Registration System</h1>

        {/* Navigation Menu */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/course-types">Manage Course Types</Link></li>
            <li><Link to="/courses">Manage Courses</Link></li>
            <li><Link to="/course-offerings">Manage Course Offerings</Link></li>
            <li><Link to="/registrations">Student Registrations</Link></li>
          </ul>
        </nav>

        {/* Routes for Pages */}
        <Routes>
          <Route path="/" element={<h2>Welcome to Student Registration System</h2>} />

          {/* Manage Course Types */}
          <Route 
            path="/course-types" 
            element={<CourseTypeForm courseTypes={courseTypes} setCourseTypes={setCourseTypes} />} 
          />

          {/* Manage Courses */}
          <Route 
            path="/courses" 
            element={<CourseForm courses={courses} setCourses={setCourses} />} 
          />

          {/* Manage Course Offerings */}
          <Route 
            path="/course-offerings" 
            element={
              <>
                <CourseOfferingForm 
                  courses={courses} 
                  courseTypes={courseTypes} 
                  offerings={offerings} 
                  setOfferings={setOfferings} 
                />
                <CourseOfferingList offerings={offerings} />
              </>
            } 
          />

          {/* Register Students */}
          <Route 
            path="/registrations" 
            element={<RegistrationForm offerings={offerings} registrations={registrations} setRegistrations={setRegistrations} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
