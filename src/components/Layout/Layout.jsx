import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense>
        <Outlet fallback={null} />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
