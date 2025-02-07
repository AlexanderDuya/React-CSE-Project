import "../UI/Form.scss";
import Actions from "../UI/Actions.jsx";

export function FormField({ label, type, name, value, onChange }) {
  return (
    <label>
      {label}
      <input type={type} name={name} value={value} onChange={onChange} />
    </label>
  );
}

export function FormDisplay(props) {
  return (
    <>
      <div className="ClassForm">
        <div className="FormField">{props.children}</div>
        <div className="buttons">
          <Actions.Tray>
            <Actions.Submit showText onClick={props.handleSubmit} />
          </Actions.Tray>

          <Actions.Tray>
            <Actions.Cancel
              showText
              buttonText="Cancel"
              onClick={props.handleCancel}
            />
          </Actions.Tray>
        </div>
      </div>
    </>
  );
}
