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
import ProtectedRoute from "./components/UI/ProtectedRoute.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/ProviderClasses"
              element={
                <ProtectedRoute>
                  <ProviderClasses />
                </ProtectedRoute>
              }
            />

            <Route
              path="/AddClassForm"
              element={
                <ProtectedRoute>
                  <AddClassForm />
                </ProtectedRoute>
              }
            />

            <Route
              path="/AddClientForm"
              element={
                <ProtectedRoute>
                  <AddClientForm />
                </ProtectedRoute>
              }
            />

            <Route
              path="/ClientClasses"
              element={
                <ProtectedRoute>
                  <ClientClasses />
                </ProtectedRoute>
              }
            />

            <Route
              path="/InstructorsClasses"
              element={
                <ProtectedRoute>
                  <InstructorClasses />
                </ProtectedRoute>
              }
            />

            <Route
              path="/Attendee"
              element={
                <ProtectedRoute>
                  <Attendee />
                </ProtectedRoute>
              }
            />

            <Route path="/Login" element={<Login />} />

            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
