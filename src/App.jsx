import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layoutt/Layout.jsx";
import ClientClasses from "./components/viewss/ClientClasses.jsx";
import Home from "./components/viewss/Home.jsx";
import Attendee from "./components/viewss/Attendee.jsx";
import InstructorsClasses from "./components/viewss/InstructorsClasses.jsx";
import PageNotFound from "./components/viewss/404.jsx";
import InstructorClasses from "./components/viewss/InstructorsClasses.jsx";

function App() {
  const loggedInUser = "Alexander Duya";

  return (
    <BrowserRouter>
      <Layout loggedInUser={loggedInUser}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/ClientClasses" element={<ClientClasses />} />

          <Route path="/InstructorsClasses" element={<InstructorClasses />} />

          <Route path="/Attendee" element={<Attendee />} />

          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
