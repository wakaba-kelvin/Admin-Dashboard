import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const employeeApi = createApi({
    reducerPath: 'employeeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/employee/' }),
    tagTypes: ['employee'],

    endpoints: (builder) => ({
        addEmployee: builder.mutation({
            query: (employee) => ({
                url: 'register',
                method: 'POST',
                body: employee
            }),
            invalidatesTags: ['employee'],
        }),
        login: builder.mutation({
            query: ({ Email, Password }) => ({
                url: 'login',
                method: 'POST',
                body: { Email: Email, Password: Password }
            }),
            invalidatesTags: ['employee'],
        }),
        getAllEmployees: builder.query({
            query: () => '',
            providesTags: ['employee'],
        }), 
        deleteEmployee: builder.mutation({
            query: (employeeId) => ({
                url: `/${employeeId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['employee'],
        }),
    }),
});

export const { useAddEmployeeMutation, useLoginMutation, useGetAllEmployeesQuery, useDeleteEmployeeMutation } = employeeApi;