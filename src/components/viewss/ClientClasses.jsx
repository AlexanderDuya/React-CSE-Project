import "../viewss/ClientClasses.scss";
import ClassesView from "../entitites/ClasssesView.jsx";
import { NavLink } from "react-router-dom";

function ClientClasses() {
  // Initialization ---------------------------------------------------------

  // State ------------------------------------------------------------------

  // Handlers --------------------------------------------------------------

  // View ------------------------------------------------------------------
  return (
    <>
      <h1 id="firstTitle1">Hello User!</h1>
      <h2 id="secondTitle1">Upcoming classes</h2>

      
      {/* Add Client Button */}
      <NavLink to="/AddClientForm" className="navLinkButton">
        Create an Account
      </NavLink>
      
      <ClassesView type="client" ></ClassesView>
  </>
  );
}
export default ClientClasses;
