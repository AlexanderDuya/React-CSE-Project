import '../layoutt/Navbar.scss';
import { NavLink} from 'react-router-dom';

function Navbar(){
    return(
        <nav>
        <div className='navItem'>
          <NavLink to="/">Home</NavLink>
        </div>
        <div className='navItem'>
          <NavLink to="/Classes">Client View</NavLink>
        </div>
        <div className='navItem'>
          <NavLink to="/Attendee">Instructor View</NavLink>
        </div>
      </nav>

    );
}

export default Navbar;