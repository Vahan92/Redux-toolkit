import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { ICreate, IEdit, IUsersInfo } from '../models/IUser';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    fetchAllPosts: build.query<IUsersInfo, number>({
      query: (page: number = 1) => ({
        url: `users?page=${page}`,
      }),
      providesTags: (result) => ['Post'],
    }),
    createPost: build.mutation<ICreate, ICreate>({
      query: (post) => ({
        url: 'users',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    updatePost: build.mutation<IEdit, IEdit>({
      query: ({ id, name, job }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: { name, job },
      }),
      invalidatesTags: ['Post'],
    }),
    deletePost: build.mutation<number, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});
