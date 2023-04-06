import { configureStore } from '@reduxjs/toolkit';
import Reducers from './Reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
   key: 'root',
   storage,
};

const persistedReducer = persistReducer(persistConfig, Reducers);

const store = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(store);
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
