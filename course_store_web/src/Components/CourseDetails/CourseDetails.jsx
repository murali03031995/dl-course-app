import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./CourseDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteCourse } from "../../Services/DeleteService";

export default function CourseDetails({ courses, onDeleteCourse, onEditCourse }) {

  const handleDelete = async (courseId, courseName) => {
    try {
      await deleteCourse(courseId);
      onDeleteCourse(); // Notify the parent component to reload courses
      toast.success(`${courseName} course deleted successfully!`);
    } catch (error) {
      console.error("Error deleting course:", error);
      toast.error("Error deleting course. Please try again.");
    }
  };

  const handleEdit = (course) => {
    onEditCourse(course); // Pass the selected course to the parent component
  };

  return (
    <div className="container mb-4">
      <div className="row justify-content-center mt-5">
        <div className="col-sm-11">
          <div className="row details justify-content-center py-1">
            <div className="col-md-1 d-flex justify-content-center ">
              <h4>ID</h4>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <h4>Course Name</h4>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <h4>Trainer Name</h4>
            </div>
            <div className="col-md-2 d-flex justify-content-center">
              <h4>Course Price</h4>
            </div>
            <div className="col-md-1 d-flex justify-content-center">
              <h4>Edit</h4>
            </div>
            <div className="col-md-1 d-flex justify-content-center">
              <h4>Delete</h4>
            </div>
          </div>
          {courses.map((course) => (
            <div
              className="row details justify-content-center py-2"
              key={course.id}
            >
              <div className="col-md-1 d-flex justify-content-center">{course.courseId}</div>
              <div className="col-md-3 d-flex justify-content-center">{course.courseName}</div>
              <div className="col-md-3 d-flex justify-content-center">{course.trainerName}</div>
              <div className="col-md-2 d-flex justify-content-center">{course.price}</div>
              <div className="col-md-1 d-flex justify-content-center bg-transparent">
                <button className="icon-button" onClick={() => handleEdit(course)}>
                  <FontAwesomeIcon className="edit-icon" icon={faEdit} />
                </button>
              </div>
              <div className="col-md-1 d-flex justify-content-center bg-transparent">
                <button 
                  className="icon-button" 
                  onClick={() => handleDelete(course.courseId, course.courseName)} 
                >
                  <FontAwesomeIcon className="del-icon" icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
