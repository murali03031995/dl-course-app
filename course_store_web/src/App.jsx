import React, { useState, useEffect } from "react";
import './App.css';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCourses } from './Services/CourseService';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);

  const loadCourses = async () => {
    try {
      const coursesData = await fetchCourses();
      setCourses(coursesData);
    } catch (error) {
      console.error("Error loading courses:", error);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  const handleEditCourse = (course) => {
    setEditingCourse(course);
  };

  return (
    <div>
      <ToastContainer />
      <Header />
      <Form editingCourse={editingCourse} onCourseAdded={loadCourses} />
      <CourseDetails courses={courses} onDeleteCourse={loadCourses} onEditCourse={handleEditCourse} />
    </div>
  );
}

export default App;
