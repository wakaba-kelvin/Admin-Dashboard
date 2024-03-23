

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const attendanceApi = createApi({
  reducerPath: 'attendanceApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/attendance/' }),
  tagTypes: ['attendance'],

  endpoints: (builder) => ({
    fetchEmployees: builder.query({
      query: (params) => {
        const { date, departmentId } = params;
        return `fetchEmployees?date=${date}&departmentId=${departmentId}`;
      },
      providesTags: ['attendance'],
    }),
  }),
});

export const { useFetchEmployeesQuery } = attendanceApi;
