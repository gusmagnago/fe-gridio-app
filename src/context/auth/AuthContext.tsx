import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createContext, ReactNode, useContext, useState } from 'react';
import { login } from '../../api/auth/auth';
import { IAuthContext, IAuthLogin } from './AuthContext.types';
import { AUTHTOKEN } from '../../utils/variables';

const AuthContext = createContext<IAuthContext | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem(AUTHTOKEN) || null;
  });

  const signInMutation = useMutation({
    mutationFn: login,
    onSuccess: (data, options) => {
      const { rememberMe } = options as IAuthLogin;
      setToken(data.accessToken);

      if (rememberMe) {
        localStorage.setItem(AUTHTOKEN, data.accessToken);
      }
    },
  });

  const loginHandler = async (credentials: IAuthLogin) => {
    try {
      await signInMutation.mutateAsync(credentials);
      return true;
    } catch (error) {
      return false;
    }
  };

  const logoutHandler = () => {
    queryClient.removeQueries({ queryKey: ['authToken'] });
    localStorage.removeItem(AUTHTOKEN);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        login: loginHandler,
        logout: logoutHandler,
        token,
        isLoginLoading: signInMutation.isPending,
        loginError: signInMutation.error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export default AuthProvider;
