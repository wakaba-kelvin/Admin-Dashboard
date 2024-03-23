import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { employeeApi } from '../Feature/Employee/Employee';
import { attendanceApi } from '../Feature/Attendance/AttendanceApi'; // Import the attendance API slice

export const store = configureStore({
  reducer: {
    [employeeApi.reducerPath]: employeeApi.reducer,
    [attendanceApi.reducerPath]: attendanceApi.reducer // Add attendance reducer to the store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeApi.middleware, attendanceApi.middleware) // Add attendance middleware
});

setupListeners(store.dispatch);
