
import Layout from './components/layoutt/Layout.jsx';
import Classes from './components/viewss/Classes.jsx';
import Home from './components/viewss/Home.jsx';
import Attendee from './components/viewss/Attendee.jsx';

function App() {
  const loggedInUser = "Alexander Duya";


  return (
    <>
    <p>hello world!</p>
    <Layout loggedInUser={loggedInUser}>
      <Home></Home>
      <Classes></Classes>
      <Attendee></Attendee>
    </Layout>
  
  </>
  );
}

export default App;
