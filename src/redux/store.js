import { configureStore } from '@reduxjs/toolkit';
import { userAPI } from './api/userApi';
import { tutorAPI } from './api/tutorApi';
import { tuitionCenterAPI } from './api/tuitioncenterApi';

export const server = process.env.REACT_APP_SERVER;

const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [tutorAPI.reducerPath]: tutorAPI.reducer,
    [tuitionCenterAPI.reducerPath]: tuitionCenterAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userAPI.middleware,
      tutorAPI.middleware,
      tuitionCenterAPI.middleware 
    ),
});

export default store;
