import "../viewss/AddClassForm.scss";
import Actions from "../UI/Actions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { storedClasses, changeSubmit } from "../viewss/storedClasses.jsx";

const initialClass = {
  ClassTitle: "",
  ClassCourseName: "",
  ClassDay: null,
  ClassTime: "18:00",
  ClassDuration: 0,
  ClassLocationName: "",
  ClassCapacity: 0,
  ClassInstructorName: "",
  ClassProviderName: "",
  ClassImageURL: "",
};

function AddClassForm() {
  const navigate = useNavigate();
  const [singleClass, setSingleClass] = useState(initialClass);

  const conformance = {
    html2js: {
      ClassTitle: (value) => (value === "" ? null : value),
      ClassDay: (value) => (value === "" ? null : new Date(value)),
      ClassTime: (value) => (value === "" ? null : value),
      ClassDuration: (value) => (value === "" ? null : parseInt(value)),
      ClassLocationName: (value) => (value === "" ? null : value),
      ClassCapacity: (value) => (value === 0 ? null : parseInt(value)),
      ClassInstructorName: (value) => (value === "" ? null : value),
      ClassProviderName: (value) => (value === "" ? null : value),
      ClassImageURL: (value) => (value === "" ? null : value),
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

  const handleCancel = () => {
    navigate("/ProviderClasses");
  };

  const handleSubmit = () => {
    try {
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
    } catch (error) {
      console.error("The error is ", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSingleClass({
      ...singleClass,
      [name]: conformance.html2js[name](value),
    });
  };

  return (
    <div className="ClassForm">
      <div className="FormField">
        <label>
          Class Title
          <input
            type="text"
            name="ClassTitle"
            value={conformance.js2html.ClassTitle(singleClass.ClassTitle)}
            onChange={handleChange}
          />
        </label>

        <label>
          Class Day
          <input
            type="date"
            name="ClassDay"
            value={conformance.js2html.ClassDay(singleClass.ClassDay)}
            onChange={handleChange}
          />
        </label>

        <label>
          Class Time
          <input
            type="time"
            name="ClassTime"
            value={conformance.js2html.ClassTime(singleClass.ClassTime)}
            onChange={handleChange}
          />
        </label>

        <label>
          Duration (mins)
          <input
            type="number"
            name="ClassDuration"
            value={conformance.js2html.ClassDuration(singleClass.ClassDuration)}
            onChange={handleChange}
          />
        </label>

        <label>
          Location Name
          <input
            type="text"
            name="ClassLocationName"
            value={conformance.js2html.ClassLocationName(
              singleClass.ClassLocationName
            )}
            onChange={handleChange}
          />
        </label>

        <label>
          Capacity
          <input
            type="number"
            name="ClassCapacity"
            value={conformance.js2html.ClassCapacity(singleClass.ClassCapacity)}
            onChange={handleChange}
          />
        </label>

        <label>
          Instructor Name
          <input
            type="text"
            name="ClassInstructorName"
            value={singleClass.ClassInstructorName}
            onChange={handleChange}
          />
        </label>

        <label>
          Provider Name
          <input
            type="text"
            name="ClassProviderName"
            value={conformance.js2html.ClassProviderName(
              singleClass.ClassProviderName
            )}
            onChange={handleChange}
          />
        </label>

        <label>
          Class Image URL
          <input
            type="text"
            name="ClassImageURL"
            value={conformance.js2html.ClassImageURL(singleClass.ClassImageURL)}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="buttons">
        <Actions.Tray>
          <Actions.Submit showText onClick={handleSubmit} />
        </Actions.Tray>

        <Actions.Tray>
          <Actions.Cancel showText buttonText="Cancel" onClick={handleCancel} />
        </Actions.Tray>
      </div>
    </div>
  );
}

export default AddClassForm;
