import "../layoutt/Header.scss";
import { useAuth } from "../UI/useAuth.jsx";

function Header() {
  const {loggedInUser} = useAuth();

  return (
    <header>
      <h1>React Event Booking System</h1>
      {
        loggedInUser &&
          <p>Welcome {loggedInUser.UserFirstname} {loggedInUser.UserLastname}</p>
      }
    </header>
  );
}

export default Header;
