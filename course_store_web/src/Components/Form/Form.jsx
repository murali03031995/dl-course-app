import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowsRotate, faPen, faBook, faUser, faKey, faDollar } from "@fortawesome/free-solid-svg-icons";
import "./Form.css";
import { newCourse } from "../../Services/FormService";
import { updateCourse } from "../../Services/UpdateService";
import { toast } from 'react-toastify';

export default function Form({ editingCourse, onCourseAdded }) {
  const [formData, setFormData] = useState({
    courseId: "",
    courseName: "",
    trainerName: "",
    price: ""
  });

  useEffect(() => {
    if (editingCourse) {
      setFormData(editingCourse);
    }
  }, [editingCourse]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const postData = async () => {
    try {
      if (editingCourse) {
        await updateCourse(formData);
        toast.success(`${formData.courseName} updated successfully!`);
      } else {
        await newCourse(formData);
        toast.success('Course created successfully!');
      }
      setFormData({
        courseId: "",
        courseName: "",
        trainerName: "",
        price: ""
      });
      onCourseAdded(); // Notify the parent component to reload courses
    } catch (error) {
      toast.error('Failed to save course. Please try again.');
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="row mb-3">
              <div className="col d-flex">
                <div className="icon p-2 bg-warning">
                  <FontAwesomeIcon icon={faKey} />
                </div>
                <input
                  name="courseId"
                  type="text"
                  className="form-control"
                  placeholder="Course ID"
                  value={formData.courseId}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col d-flex">
                <div className="icon p-2 bg-warning">
                  <FontAwesomeIcon icon={faBook} />
                </div>
                <input
                  name="courseName"
                  type="text"
                  className="form-control"
                  placeholder="Course Name"
                  value={formData.courseName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col d-flex">
                <div className="icon p-2 bg-warning">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <input
                  name="trainerName"
                  type="text"
                  className="form-control"
                  placeholder="Trainer Name"
                  value={formData.trainerName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col d-flex">
                <div className="icon p-2 bg-warning">
                  <FontAwesomeIcon icon={faDollar} />
                </div>
                <input
                  name="price"
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row pt-1 justify-content-center">
            <div className="col-sm-2">
              <div className="row mb-3">
                <div className="col d-flex justify-content-between">
                  <button onClick={postData} className="btn btn-primary">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button className="btn btn-success" onClick={onCourseAdded}>
                    <FontAwesomeIcon icon={faArrowsRotate} />
                  </button>
                  <button className="btn btn-warning" onClick={postData}>
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
