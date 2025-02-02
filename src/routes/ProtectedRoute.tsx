import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/auth/AuthContext';
import { LOGIN } from './variables';

const ProtectedRoute = () => {
  const { token } = useAuth();

  return token ? <Outlet /> : <Navigate to={LOGIN} />;
};

export default ProtectedRoute;
