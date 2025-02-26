import "../viewss/AddClassForm.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { storedClasses, changeSubmit } from "../viewss/storedClasses.jsx";
import { FormField, FormDisplay } from "../UI/Form.jsx";
import { apiGet, apiPost } from "./API.jsx";

const initialClass = {
  ClassTitle: "",
  ClassCourseName: "",
  ClassDay: null,
  ClassTime: "",
  ClassDuration: 0,
  ClassLocationID: 0,
  ClassCapacity: 0,
  ClassInstructorID: 0,
  ClassCourseID: 0,
  ClassImageURL: "",
};

function AddClassForm() {
  // Initialisation ----------------------------------------------

  const apiURL = "https://softwarehub.uk/unibase/events/api";
  const myClassesEndPoint = `${apiURL}/classes`;
  const myInstructors = `${apiURL}/users/instructors`;
  const mylocations = `${apiURL}/locations`;
  const mycourses = `${apiURL}/courses`;

  const conformance = {
    html2js: {
      ClassTitle: (value) => (value === "" ? "" : value),
      ClassDay: (value) => (value === "" ? null : new Date(value)),
      ClassTime: (value) => (value === "" ? "" : value + ":00"),
      ClassDuration: (value) => (value === null ? 0 : parseInt(value) || 0),
      ClassLocationID: (value) => (value === "" ? 0 : parseInt(value) || 0),
      ClassCapacity: (value) => (value === "" ? 0 : parseInt(value) || 0),
      ClassInstructorID: (value) => (value === "" ? 0 : parseInt(value) || 0),
      ClassCourseID: (value) => (value === "" ? 0 : parseInt(value) || 0),
      ClassImageURL: (value) => (value === "" ? "" : value),
    },

    js2html: {
      ClassTitle: (value) => (value === null ? "" : value),
      ClassDay: (value) =>
        value === null
          ? ""
          : value instanceof Date
          ? value.toISOString().split("T")[0]
          : value,
      ClassTime: (value) => (value === null ? "" : value),
      ClassDuration: (value) => (value === null ? 0 : value),
      ClassLocationID: (value) => (value === null ? 0 : value),
      ClassCapacity: (value) => (value === null ? 0 : value),
      ClassInstructorID: (value) => (value === null ? 0 : value),
      ClassCourseID: (value) => (value === null ? 0 : value),
      ClassImageURL: (value) => (value === null ? "" : value),
    },
  };

  // State --------------------------------------------------

  const navigate = useNavigate();
  const [singleClass, setSingleClass] = useState(initialClass);
  const [valid, setValid] = useState(null);
  const [errors, setErrors] = useState({});

  const [instructors, setInstructors] = useState(null);
  const [locations, setLocations] = useState(null);
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    apiGet(myInstructors, setInstructors, setErrors);
  }, [myInstructors]);

  useEffect(() => {
    apiGet(mylocations, setLocations);
  }, [mylocations]);

  useEffect(() => {
    apiGet(mycourses, setCourses);
  }, [mycourses]);

  // Handlers --------------------------------------------------

  const handleCancel = () => {
    navigate("/ProviderClasses");
  };

  const handleSubmit = async () => {
    if (validate(singleClass)) {
      const updatedClass = {
        ...singleClass,
        ClassDay:
          singleClass.ClassDay instanceof Date
            ? singleClass.ClassDay
            : new Date(singleClass.ClassDay),
      };

      const postResult = await apiPost(myClassesEndPoint, singleClass);
      postResult.isSuccess
        ? console.log("Successful")
        : console.log(`Not Successful:${postResult.message}`);
      storedClasses().classes.push(updatedClass);
      changeSubmit();
      navigate("/ProviderClasses");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "ClassDay") {
      console.log(value);
    }

    setSingleClass({
      ...singleClass,
      [name]: conformance.html2js[name](value),
    });
  };

  const validate = (newClass) => {
    let isValid = true;
    let errors = {};

    if (
      newClass.ClassTitle === initialClass.ClassTitle ||
      newClass.ClassTitle.length < 8
    ) {
      errors.ClassTitle = "Title is not complete or is less than 8 characters";
      isValid = false;
    }
    if (newClass.ClassDay === initialClass.ClassDay) {
      errors.ClassDay = "ClassDay is not complete";
      isValid = false;
    }
    if (newClass.ClassTime === initialClass.ClassTime) {
      errors.ClassTime = "ClassTime is not complete";
      isValid = false;
    }
    if (!newClass.ClassDuration || newClass.ClassDuration <= 0) {
      errors.ClassDuration = "ClassDuration must be greater than 0";
      isValid = false;
    }
    if (newClass.ClassLocationID === initialClass.ClassLocationID) {
      errors.ClassLocationID = "You have not selected a location";
      isValid = false;
    }
    if (!newClass.ClassCapacity || newClass.ClassCapacity <= 0) {
      errors.ClassCapacity = "ClassCapacity must be greater than 0";
      isValid = false;
    }
    if (newClass.ClassInstructorID === initialClass.ClassInstructorID) {
      errors.ClassInstructorID = "You have not selected an Instructor";
      isValid = false;
    }
    if (newClass.ClassCourseID === initialClass.ClassCourseID) {
      errors.ClassCourseID = "You have not selected a course";
      isValid = false;
    }
    //if (newClass.ClassImageURL === initialClass.ClassImageURL) {
    //errors.ClassImageURL = "ClassImageURL is not complete";
    //isValid = false;
    //}

    setErrors(errors);
    setValid(isValid);
    return isValid;
  };

  // View -------------------------------------------------------

  return (
    <FormDisplay handleSubmit={handleSubmit} handleCancel={handleCancel}>
      <FormField
        label="Class Name"
        type="text"
        name="ClassTitle"
        value={conformance.js2html.ClassTitle(singleClass.ClassTitle)}
        onChange={handleChange}
      ></FormField>
      {errors.ClassTitle != null && (
        <p className="unsuccess">{errors.ClassTitle}</p>
      )}

      <FormField
        label="Class Day"
        type="date"
        name="ClassDay"
        value={conformance.js2html.ClassDay(singleClass.ClassDay)}
        onChange={handleChange}
      ></FormField>
      {errors.ClassDay != null && (
        <p className="unsuccess">{errors.ClassDay}</p>
      )}

      <FormField
        label="Class Time"
        type="time"
        name="ClassTime"
        value={conformance.js2html.ClassTime(singleClass.ClassTime)}
        onChange={handleChange}
      ></FormField>
      {errors.ClassTime != null && (
        <p className="unsuccess">{errors.ClassTime}</p>
      )}

      <FormField
        label="Class Duration"
        type="text"
        name="ClassDuration"
        value={conformance.js2html.ClassDuration(singleClass.ClassDuration)}
        onChange={handleChange}
      ></FormField>
      {errors.ClassDuration != null && (
        <p className="unsuccess">{errors.ClassDuration}</p>
      )}

      <label>
        Location Name<br></br>
        {!locations ? (
          <p>Loading records.....</p>
        ) : (
          <select
            className="select-field"
            name="ClassLocationID"
            value={conformance.js2html.ClassLocationID(
              singleClass.ClassLocationID
            )}
            onChange={handleChange}
          >
            <option value="0">None Selected</option>
            {locations.map((location) => (
              <option key={location.LocationID} value={location.LocationID}>
                {location.LocationName}
              </option>
            ))}
          </select>
        )}
      </label>
      {errors.ClassLocationID != null && (
        <p className="unsuccess">{errors.ClassLocationID}</p>
      )}

      <FormField
        label="Capacity"
        type="text"
        name="ClassCapacity"
        value={conformance.js2html.ClassCapacity(singleClass.ClassCapacity)}
        onChange={handleChange}
      ></FormField>
      {errors.ClassCapacity != null && (
        <p className="unsuccess">{errors.ClassCapacity}</p>
      )}

      <label>
        Instructor Name<br></br>
        {!instructors ? (
          <p>Loading records.....</p>
        ) : (
          <select
            className="select-field"
            name="ClassInstructorID"
            value={singleClass.ClassInstructorID}
            onChange={handleChange}
          >
            <option value="0">None Selected</option>
            {instructors.map((instructor) => (
              <option key={instructor.UserID} value={instructor.UserID}>
                {instructor.UserFirstname}
              </option>
            ))}
          </select>
        )}
      </label>
      {errors.ClassInstructorID != null && (
        <p className="unsuccess">{errors.ClassInstructorID}</p>
      )}

      <label>
        Course name<br></br>
        {!courses ? (
          <p>Loading records.....</p>
        ) : (
          <select
            className="select-field"
            name="ClassCourseID"
            value={singleClass.ClassCourseID}
            onChange={handleChange}
          >
            <option value="0">None Selected</option>
            {courses.map((course) => (
              <option key={course.CourseID} value={course.CourseID}>
                {course.CourseName}
              </option>
            ))}
          </select>
        )}
      </label>
      {errors.ClassCourseID != null && (
        <p className="unsuccess">{errors.ClassCourseID}</p>
      )}

      {/* <FormField
        label="Class Image URL"
        type="text"
        name="ClassImageURL"
        value={conformance.js2html.ClassImageURL(singleClass.ClassImageURL)}
        onChange={handleChange}
      ></FormField>
      {errors.ClassImageURL != null && (
        <p className="unsuccess">{errors.ClassImageURL}</p>
      )}*/}
    </FormDisplay>
  );
}

export default AddClassForm;
