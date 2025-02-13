import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { serverLink } from '../../../server';

// Define an API slice
export const apiSlice = createApi({
    reducerPath: 'apiquery',
    baseQuery: fetchBaseQuery({
        baseUrl: serverLink, headers: {
            'Content-Type': 'application/json',

        }
        ,
        credentials: 'include',
    }),
    endpoints: (builder) => ({
        allPosts: builder.query({
            query: (searchQuery) => `/post/getposts?${searchQuery}`,
        }),
        postsData: builder.query({
            query: () => '/post/getposts?limit=5',
        }),
        usersData: builder.query({
            query: () => '/user/getusers?limit=5',

        }),
        commentsData: builder.query({
            query: () => '/comment/getcomments?limit=5',
        }),

    }),
});

export const { useAllPostsQuery, usePostsDataQuery, useUsersDataQuery, useCommentsDataQuery } = apiSlice;
