import { FormEvent, useState } from 'react';
import { useAuth } from '../context/auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD } from '../routes/variables';
import { Eye, EyeOff } from 'lucide-react';

export const Login = () => {
  const { login, isLoginLoading, loginError } = useAuth();

  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const success = await login({ username, password, rememberMe });
    if (success) {
      navigate(DASHBOARD);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <form
        onSubmit={handleSubmit}
        className='container bg-blue-100 p-6 rounded-2xl shadow-md flex flex-col w-full'
      >
        {isLoginLoading ? (
          <span>Loading...</span>
        ) : (
          <>
            <input
              type='text'
              placeholder='Username'
              value={username}
              className='border border-blue-500 p-2 w-full mb-2 rounded-2xl bg-white'
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className='relative w-full'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                value={password}
                className='border border-blue-500 p-2 w-full mb-2 rounded-2xl bg-white'
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type='button'
                className='absolute inset-y-0 right-3 flex items-center text-gray-500'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <label className='flex items-center space-x-2 p-2'>
              <input
                type='checkbox'
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span>Keep me loggedin</span>
            </label>
            <button
              type='submit'
              className='bg-blue-500 text-white px-4 py-2 rounded-2xl w-full mt-2 cursor-pointer hover:bg-blue-800 hover:shadow-md '
            >
              Login
            </button>
            <div className='pt-2 flex justify-center'>
              {loginError && (
                <p className='text-red-500'>
                  {loginError.message || 'Erro no login.'}
                </p>
              )}
            </div>
          </>
        )}
      </form>
    </div>
  );
};
