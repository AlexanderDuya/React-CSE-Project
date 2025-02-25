import "../layoutt/Navbar.scss";
import { NavLink } from "react-router-dom";

import { useAuth } from "../UI/useAuth.jsx";

function Navbar() {
  // Initialisation ------------------------------------------
  const { logout,loggedInUser } = useAuth();
  // State ---------------------------------------------------
  // Handlers ------------------------------------------------
  
  // View -----------------------------------------------
  return (
    <nav>
      
      <div className="navItem">
        <NavLink to="/">Home</NavLink>
      </div>
     
     {loggedInUser &&(
        <>
        {console.log(loggedInUser.UserUsertypeName)}
        
        {loggedInUser.UserUsertypeName == "Provider"  &&(
          <>
          <div className="navItem">
            <NavLink to="/ProviderClasses">Provider View</NavLink>
          </div>
          
          <div className="navItem">
            <NavLink to="/ClientClasses">Client View</NavLink>
          </div>

          <div className="navItem">
            <NavLink to="/InstructorsClasses">Instructor View</NavLink>
          </div>
          </>
          )
        }
        {loggedInUser.UserUsertypeName == "Client"  &&(
          <div className="navItem">
            <NavLink to="/ClientClasses">Client View</NavLink>
          </div>)
        }

        {loggedInUser.UserUsertypeName == "Instructor"  &&(
          <>
          <div className="navItem">
            <NavLink to="/ClientClasses">Client View</NavLink>
          </div>

          <div className="navItem">
            <NavLink to="/InstructorsClasses">Instructor View</NavLink>
          </div>
          </>
          )
       }
        </>)
      }
      <div className="navItem">
        <NavLink to="/Login">Login</NavLink>
      </div>

      <div className="navItem">
        <NavLink to="/" onClick={logout}>Logout</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
