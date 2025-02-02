import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createContext, ReactNode, useContext } from 'react';
import { login } from '../../api/auth/auth';
import { ISingin } from '../../api/auth/auth.types';

interface IAuthContext {
  login: ({ username, password }: ISingin) => Promise<boolean>;
  logout: () => void;
  token: string | null;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();
  const token = queryClient.getQueryData<string>(['authToken']) || null;

  const signInMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      queryClient.setQueryData(['authToken'], data.accessToken);
    },
  });

  const loginHandler = async ({ username, password }: ISingin) => {
    try {
      await signInMutation.mutateAsync({ username, password });
      return true;
    } catch (error) {
      return false;
    }
  };

  const logoutHandler = () => {
    queryClient.removeQueries({ queryKey: ['authToken'] });
  };

  return (
    <AuthContext.Provider
      value={{ login: loginHandler, logout: logoutHandler, token }}
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
