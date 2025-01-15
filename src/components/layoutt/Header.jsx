import '../layoutt/Header.scss';

function Header(props){
    return(
        <header>
        <h1>React Event Booking System</h1>
        <p className='welcome'>Hello {props.loggedInUser}!</p>
      </header>
    );

}

export default Header;