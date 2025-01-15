import '../layoutt/Navbar.scss';

function Navbar(){
    return(
        <nav>
        <div className='navItem'>
          <a to="/">View Classes</a>
        </div>
        <div className='navItem'>
          <a to="/">Waiting List</a>
        </div>
        <div className='navItem'>
          <a to="/">Profile</a>
        </div>
      </nav>

    );
}

export default Navbar;