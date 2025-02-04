import "../viewss/AddClassForm.scss";
import Actions from "../UI/Actions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { storedClasses, changeSubmit } from "../viewss/storedClasses.jsx";

const initialClass = {
  ClassTitle: null,
  ClassCourseName: null,
  ClassDay: null,
  ClassTime: null,
  ClassDuration: null,
  ClassLocationName: null,
  ClassCapacity: null,
  ClassInstructorName: null,
  ClassProviderName: null,
  ClassImageURL: null,
};

function AddClassForm() {
  const navigate = useNavigate();
  const [singleClass, setSingleClass] = useState(initialClass);

  const conformance = {
    html2js: {
      ClassTitle: (value) => (value === "" ? null : value),
      ClassCourseName: (value) => (value === "" ? null : value),
      ClassDay: (value) => (value === "" ? null : value),
      ClassTime: (value) => (value === "" ? null : value),
      ClassDuration: (value) => (value === "" ? null : value),
      ClassLocationName: (value) => (value === "" ? null : value),
      ClassCapacity: (value) => (value === 0 ? null : parseInt(value)),
      ClassInstructorName: (value) => (value === "" ? null : value),
      ClassProviderName: (value) => (value === "" ? null : value),
      ClassImageURL: (value) => (value === "" ? null : value),
    },
  };

  const handleCancel = () => {
    navigate("/ProviderClasses");
  };

  const handleSubmit = () => {
    storedClasses().classes.push(initialClass);
    changeSubmit();
    navigate("/ProviderClasses");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSingleClass({
      ...initialClass,
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
            name="ClassTitle "
            value={initialClass.ClassTitle}
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
