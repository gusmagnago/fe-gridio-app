import { useAuth } from '../context/auth/AuthContext';

export const Login = () => {
  const { login } = useAuth();

  return (
    <div>
      <div>Login Page</div>
    </div>
  );
};
