import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='min-h-screen bg-shark-600 text-crimson-500'>{children}</div>
  );
};
