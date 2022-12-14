import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Toaster } from 'react-hot-toast';
import GlobalStyles from '@mui/material/GlobalStyles';
import { AppCss } from './AppCss';

import { HeaderAppBar } from './AppBar/AppBar';
import Contacts from 'pages/Contacts/Contacts';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import Home from 'pages/Home/Home';

import { Loader } from './Loader/Loader';

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
          <HeaderAppBar />
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

