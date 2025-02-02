import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      {children}
    </div>
  );
};
