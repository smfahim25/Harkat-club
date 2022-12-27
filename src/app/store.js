import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { baseApi } from './EndPoints/baseEndpoints';
import userReducer from './Slices/UserSlice';
import membersReducer from './Slices/MembersSlice';
import adminReducer from './Slices/AdminSlice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    user: userReducer,
    members: membersReducer,
    admin: adminReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);
