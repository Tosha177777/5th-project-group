import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './authReducer';
// import { userReducer } from './userInfoReducer';
import { waterReducer } from './waterReducer';
const authConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  water: waterReducer,
  auth: persistReducer(authConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
