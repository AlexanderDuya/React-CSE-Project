import "../viewss/AddClassForm.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { storedClasses, changeSubmit } from "../viewss/storedClasses.jsx";
import { FormField, FormDisplay } from "../UI/Form.jsx";

const initialClass = {
  ClassTitle: "",
  ClassCourseName: "",
  ClassDay: null,
  ClassTime: "",
  ClassDuration: 0,
  ClassLocationName: "",
  ClassCapacity: 0,
  ClassInstructorName: "",
  ClassProviderName: "",
  ClassImageURL: "",
};

function AddClassForm() {
  // Initialisation ----------------------------------------------

  const apiURL = "https://softwarehub.uk/unibase/events/api";
  const myClassesEndPoint = `${apiURL}/classes`;
  const myInstructors = `${apiURL}/users/instructors`;
  const mylocations = `${apiURL}/locations`;

  const conformance = {
    html2js: {
      ClassTitle: (value) => (value === "" ? "" : value),
      ClassDay: (value) => (value === "" ? null : new Date(value)),
      ClassTime: (value) => (value === "" ? "" : value),
      ClassDuration: (value) => (value === null ? 0 : parseInt(value) || 0),
      ClassLocationName: (value) => (value === "" ? "" : value),
      ClassCapacity: (value) => (value === "" ? 0 : parseInt(value) || 0),
      ClassInstructorName: (value) => (value === "" ? "" : value),
      ClassProviderName: (value) => (value === "" ? "" : value),
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
      ClassLocationName: (value) => (value === null ? "" : value),
      ClassCapacity: (value) => (value === null ? 0 : value),
      ClassInstructorName: (value) => (value === null ? "" : value),
      ClassProviderName: (value) => (value === null ? "" : value),
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
  
    const apiGet = async (endpoint,setState) => {
      const response = await fetch(endpoint);
      const result = await response.json();
      setState(result);
    };
  
    useEffect(() => {
      apiGet(myInstructors,setInstructors);
    }, [myInstructors]);

    useEffect(() => {
      apiGet(mylocations,setLocations);
    }, [mylocations]);

  // Handlers --------------------------------------------------

  const handleCancel = () => {
    navigate("/ProviderClasses");
  };

  const handleSubmit = () => {
    if (validate(singleClass)) {
      const updatedClass = {
        ...singleClass,
        ClassDay:
          singleClass.ClassDay instanceof Date
            ? singleClass.ClassDay
            : new Date(singleClass.ClassDay),
      };

      storedClasses().classes.push(updatedClass);
      changeSubmit();
      navigate("/ProviderClasses");

      console.log(`Class=[${JSON.stringify(updatedClass)}]`);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "ClassDay")
    {
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

    if (newClass.ClassTitle === initialClass.ClassTitle) {
      errors.ClassTitle = "Title is not complete";
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
    if (newClass.ClassLocationName === initialClass.ClassLocationName) {
      errors.ClassLocationName = "ClassLocationName is not complete";
      isValid = false;
    }
    if (!newClass.ClassCapacity || newClass.ClassCapacity <= 0) {
      errors.ClassCapacity = "ClassCapacity must be greater than 0";
      isValid = false;
    }
    if (newClass.ClassInstructorName === initialClass.ClassInstructorName) {
      errors.ClassInstructorName = "ClassInstructorName is not complete";
      isValid = false;
    }
    if (newClass.ClassProviderName === initialClass.ClassProviderName) {
      errors.ClassProviderName = "ClassProviderName is not complete";
      isValid = false;
    }
    if (newClass.ClassImageURL === initialClass.ClassImageURL) {
      errors.ClassImageURL = "ClassImageURL is not complete";
      isValid = false;
    }

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

      <FormField
        label="Location Name"
        type="text"
        name="ClassLocationName"
        value={conformance.js2html.ClassLocationName(
          singleClass.ClassLocationName
        )}
        onChange={handleChange}
      ></FormField>
      {errors.ClassLocationName != null && (
        <p className="unsuccess">{errors.ClassLocationName}</p>
      )}

    <label>
        Location Name
        {
          !locations ? (
            <p>Loading records.....</p>
          ):(
            <select
              name="ClassLocationName"
              value={conformance.js2html.ClassLocationName(
                singleClass.ClassLocationName
              )}
              onChange={handleChange}
            >
              <option value="0">None Selected</option>
              {locations.map((location)=>(
                <option key={location.LocationID} value={location.LocationID}>
                  {location.LocationName}
                </option>
              ))}
            </select>

          )
        }
      </label>

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

      <FormField
        label="Instructor Name"
        type="text"
        name="ClassInstructorName"
        value={singleClass.ClassInstructorName}
        onChange={handleChange}
      ></FormField>
      {errors.ClassInstructorName != null && (
        <p className="unsuccess">{errors.ClassInstructorName}</p>
      )}

      <label>
        Instructor Name
        {
          !instructors ? (
            <p>Loading records.....</p>
          ):(
            <select
              name="ClassInstructorName"
              value={singleClass.ClassInstructorName}
              onChange={handleChange}
            >
              <option value="0">None Selected</option>
              {instructors.map((instructor)=>(
                <option key={instructor.UserID} value={instructor.UserID}>
                  {instructor.UserFirstname}
                </option>
              ))}
            </select>

          )
        }
      </label>

      <FormField
        label="Provider Name"
        type="text"
        name="ClassProviderName"
        value={conformance.js2html.ClassProviderName(
          singleClass.ClassProviderName
        )}
        onChange={handleChange}
      ></FormField>
      {errors.ClassProviderName != null && (
        <p className="unsuccess">{errors.ClassProviderName}</p>
      )}

      <FormField
        label="Class Image URL"
        type="text"
        name="ClassImageURL"
        value={conformance.js2html.ClassImageURL(singleClass.ClassImageURL)}
        onChange={handleChange}
      ></FormField>
      {errors.ClassImageURL != null && (
        <p className="unsuccess">{errors.ClassImageURL}</p>
      )}
    </FormDisplay>
  );
}

export default AddClassForm;
