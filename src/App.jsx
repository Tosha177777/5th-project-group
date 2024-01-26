import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Header } from './components/Header/Header';
import { AppWrapper } from './App.styled';

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
    <AppWrapper>
      <Header />
      <Suspense fallback={<div>Loader...</div>}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </AppWrapper>
  );
};
export default App;
