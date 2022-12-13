import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Toaster } from 'react-hot-toast';
import GlobalStyles from '@mui/material/GlobalStyles';
import { AppCss } from './AppCss';

import { Loader } from './Loader/Loader';

const AppBar = lazy(() => import('./AppBar/AppBar'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Home = lazy(() => import('../pages/Home/Home'));


export default function App() {

  const dispatch = useDispatch();
  const refresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !refresh && (
      <>
        <Suspense fallback={<Loader />}>
          <GlobalStyles styles={AppCss}/>
          <AppBar />
          <Toaster />
          <Routes>
            <Route>
              <Route index element={<Home />} />
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <Contacts />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
      </>
    )
  );
};

