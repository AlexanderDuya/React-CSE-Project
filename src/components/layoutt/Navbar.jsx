import '../layoutt/Navbar.scss';
import { NavLink} from 'react-router-dom';

function Navbar(){
    return(
        <nav>
        <div className='navItem'>
          <NavLink to="/">Home</NavLink>
        </div>
        <div className='navItem'>
          <NavLink to="/Classes">Classes</NavLink>
        </div>
        <div className='navItem'>
          <NavLink to="/Attendee">Attendees</NavLink>
        </div>
      </nav>

    );
}

export default Navbar;