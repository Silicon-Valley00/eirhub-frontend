import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import Reducers from './Reducers';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
   key: 'root',
   storage,
};

const persistedReducer = persistReducer(persistConfig, Reducers);

const store = configureStore(
   { reducer: persistedReducer },
   applyMiddleware(thunkMiddleware)
);

export const persistor = persistStore(store);
export default store;
