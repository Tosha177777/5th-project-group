import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Header } from './components/Header/Header';
import { Loader } from './components/Loader/Loader';
import RestrictedRoute from './components/RestrictedRoutes/RestrictedRoute';
import { AppContainer } from './App.styled';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SigninPage = lazy(() => import('./pages/SignInPage/SigninPage'));

const appRoutes = [
  { path: '/', element: <WelcomePage /> },
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
];

const App = () => {
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
