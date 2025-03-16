import "../viewss/ProviderClasses.scss";
import ClassesView from "../entitites/ClasssesView.jsx";
import { NavLink } from "react-router-dom";

function ProviderClasses() {
  // Initialization ---------------------------------------------------------

  // State ------------------------------------------------------------------

  // Handlers --------------------------------------------------------------

  // View ------------------------------------------------------------------
  return (
    <>
      <div className="instructors-classes">
        <h1 id="firstTitle1">Hello Provider !</h1>
        <h2 id="secondTitle1">Upcoming Classes</h2>

        <NavLink to="/AddClassForm" className="navLinkButton">
          Add new class
        </NavLink>

        <ClassesView type="provider" ></ClassesView>
      </div>
    </>
  );
}

export default ProviderClasses;
