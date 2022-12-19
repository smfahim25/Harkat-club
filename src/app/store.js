import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { baseApi } from './EndPoints/baseEndpoints';
import userReducer from './Slices/UserSlice';
import memberReducer from './Slices/MembersSlice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    user: userReducer,
    member: memberReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);
