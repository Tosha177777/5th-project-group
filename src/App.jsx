import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Loader } from './components/Loader/Loader';
import RestrictedRoute from './components/RestrictedRoutes/RestrictedRoute';
import { AppContainer } from './App.styled';
import { useDispatch } from 'react-redux';
import { refreshThunk } from './redux/authOperations';
// import { EditWater } from './components/AddWater/EditWater';
import { AddWater } from './components/AddWater/AddWater';
const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SigninPage = lazy(() => import('./pages/SignInPage/SigninPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const onSave = (waterCards) => {
  console.log(waterCards);
};

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
    element: <HomePage />,
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
      {/* <EditWater
        onSave={onSave}
        waterCardsSave={{ amountWater: 100, time: '13:20' }}
      /> */}
      <AddWater onSave={onSave} />
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
