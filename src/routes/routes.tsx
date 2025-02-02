import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../pages/Login';
import { LOGIN } from './variables';
import { Dashboard } from '../pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={LOGIN} element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/' element={<Dashboard />} />
      </Route>
      <Route path='*' element={<Navigate to={LOGIN} />} />
    </Routes>
  );
};

export default AppRoutes;
