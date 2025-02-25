import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layoutt/Layout.jsx";
import ClientClasses from "./components/viewss/ClientClasses.jsx";
import Home from "./components/viewss/Home.jsx";
import Attendee from "./components/viewss/Attendee.jsx";
import ProviderClasses from "./components/viewss/ProviderClasses.jsx";
import PageNotFound from "./components/viewss/404.jsx";
import InstructorClasses from "./components/viewss/InstructorsClasses.jsx";
import AddClassForm from "./components/viewss/AddClassForm.jsx";
import AddClientForm from "./components/viewss/AddClientForm.jsx";
import { AuthProvider } from "./components/UI/useAuth.jsx";
import Login from "./components/viewss/Login.jsx";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/ProviderClasses" element={<ProviderClasses />} />

            <Route path="/AddClassForm" element={<AddClassForm />} />

            <Route path="/AddClientForm" element={<AddClientForm />} />

            <Route path="/ClientClasses" element={<ClientClasses />} />

            <Route path="/InstructorsClasses" element={<InstructorClasses />} />

            <Route path="/Attendee" element={<Attendee />} />
            
            <Route path="/Login" element={<Login />} />

            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
