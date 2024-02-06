import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Loader } from './components/Loader/Loader';
import RestrictedRoute from './components/RestrictedRoutes/RestrictedRoute';
import { AppContainer } from './App.styled';
import { useDispatch } from 'react-redux';
import { refreshThunk } from './redux/authOperations';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SigninPage = lazy(() => import('./pages/SignInPage/SigninPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const appRoutes = [
  {
    path: '/',
    element: (
      <RestrictedRoute>
        <WelcomePage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/signup',
    element: (
      <RestrictedRoute>
        <SignUpPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/signin',
    element: (
      <RestrictedRoute>
        <SigninPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/home-page',
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
  },
];

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <>
      <Header />
      <AppContainer>
        <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </AppContainer>
    </>
  );
};
export default App;
