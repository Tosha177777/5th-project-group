import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Header } from './components/Header/Header';
import { Loader } from './components/Loader/Loader';
import RestrictedRoute from './components/RestrictedRoutes/RestrictedRoute';
import { AppContainer } from './App.styled';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SigninPage = lazy(() => import('./pages/SignInPage/SigninPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

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
  {
    path: '/home-page',
<<<<<<< HEAD
    element: 
    
        <HomePage />
      
=======
    element: <HomePage />,
>>>>>>> bb2e24364ed54dd974bedc023f7835f2d2824fe9
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
