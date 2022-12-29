import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { baseApi } from './EndPoints/baseEndpoints';
import userReducer from './Slices/UserSlice';
import adminReducer from './Slices/AdminSlice';
import memberReducer from './Slices/MembersSlice';
import clubcurrentmemberReducer from './Slices/ClubMemberSlice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    user: userReducer,
    admin: adminReducer,
    members: memberReducer,
    clubcurrentmember: clubcurrentmemberReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);
