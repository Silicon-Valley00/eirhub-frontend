import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import Reducers from './Reducers';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({ reducer: Reducers });

export default store;
