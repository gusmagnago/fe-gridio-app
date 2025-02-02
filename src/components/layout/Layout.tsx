import { ReactNode } from 'react';
import AuthProvider from '../../context/auth/AuthContext';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center'>
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
};
