import '../layoutt/Layout.scss';
import Header from './Header.jsx';
import Navbar from '../layoutt/Navbar.jsx';
import Footer from '../layoutt/Footer.jsx';

function Layout(props){

    return(
        <div className="layout">
        <Header loggedInUser={props.loggedInUser}/>
        <Navbar />      
   
         <main>
            {
                props.children
            }
         </main>
   
         <Footer/>
        
       </div>
    );
}

export default Layout;