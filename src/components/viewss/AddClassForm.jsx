import "../viewss/AddClassForm.scss";
import Actions from "../UI/Actions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

  const handleCancel = () => {
    navigate("/ProviderClasses");
  };

  const [singleClass, setSingleClass] = useState(initialClass);

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
      <Actions.Tray>
        <Actions.Cancel showText buttonText="Cancel" onClick={handleCancel} />
      </Actions.Tray>
    </div>
  );
}

export default AddClassForm;
