import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth.jsx';

export default function ProtectedRoute({children}) {
  const { loggedInUser } = useAuth();
  return loggedInUser
    ? children
    : <Navigate to="/login" />;
}