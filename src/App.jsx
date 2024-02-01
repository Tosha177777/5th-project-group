import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Header } from './components/Header/Header';
import { Loader } from './components/Loader/Loader';
import RestrictedRoute from './components/RestrictedRoutes/RestrictedRoute';
import { selectAuthIsLoading } from './redux/authSelectors';
import { AppContainer } from './App.styled';
import { useSelector } from 'react-redux';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
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
        <SignInPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/home-page',
    element: <HomePage />,
  },
];

const App = () => {
  const isLoading = useSelector(selectAuthIsLoading);

  return (
    <>
      <Header />
      {isLoading ? (<Loader />) :
        (<AppContainer>
          <Suspense fallback={<Loader />}>
            <Routes>
              {appRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </Suspense>
        </AppContainer>)}
    </>
  );
};
export default App;
