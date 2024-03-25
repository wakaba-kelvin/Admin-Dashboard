import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { employeeApi } from '../Feature/Employee/Employee';
import { attendanceApi } from '../Feature/Attendance/AttendanceApi';
import { payrollApi } from '../Feature/Payroll/Payroll';

export const store = configureStore({
  reducer: {
    [employeeApi.reducerPath]: employeeApi.reducer,
    [attendanceApi.reducerPath]: attendanceApi.reducer,
    [payrollApi.reducerPath]: payrollApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeApi.middleware, attendanceApi.middleware, payrollApi.middleware) 
});

setupListeners(store.dispatch);
