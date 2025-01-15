import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layoutt/Layout.jsx';
import Classes from './components/viewss/Classes.jsx';
import Home from './components/viewss/Home.jsx';
import Attendee from './components/viewss/Attendee.jsx';
import PageNotFound from './components/viewss/404.jsx';

function App() {
  const loggedInUser = "Alexander Duya";


  return (
    <BrowserRouter>
    
    <Layout loggedInUser={loggedInUser}>
      <Routes>

      <Route path='/' element={<Home />}/>

      <Route path='/Classes' element={<Classes/>}/>

      <Route path='/Attendee' element={<Attendee/>}/>

      <Route path="/*" element={<PageNotFound/>}/>

      
      </Routes>
      
    </Layout>
  
  </BrowserRouter>
    
  );
}

export default App;
