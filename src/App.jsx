import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Header } from './components/Header/Header';
import { AppContainer } from './App.styled';
import { Loader } from './components/Loader/Loader';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SigninPage = lazy(() => import('./pages/SignInPage/SigninPage'));

const appRoutes = [
  { path: '/', element: <WelcomePage /> },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/sign-in',
    element: <SigninPage />,
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
