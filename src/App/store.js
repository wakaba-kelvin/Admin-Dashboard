import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import { employeeApi } from '../Feature/Employee/Employee';

export const store = configureStore({
  reducer: {
    [employeeApi.reducerPath]: employeeApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeApi.middleware)
});

setupListeners(store.dispatch);