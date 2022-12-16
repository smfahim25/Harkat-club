import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const URL = "http://115.246.78.132/harkat";
const authenticationsHeader = {
    "xsrfHeaderName": "X-CSRFToken",
    "xsrfCookieName": "csrftoken",
}
export const baseApi = createApi({
    reducerPath: "HarkatBase",
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    tagTypes: ["harkat", "club", "post"],
    endpoints: (builder) => ({
        getHatkatData: builder.query({
            query: () => ({
                url: `/api/v1/Clubs`,
                method: "GET",
                headers: authenticationsHeader
            }),
            providesTags: ["clubs"]
        }),
        getClubData: builder.query({
            query: (id) => ({
                url: `/club-api/${id}`,
                method: "GET",
                headers: authenticationsHeader
            }),
            providesTags: ["club"]
        }),
        getClubImages: builder.query({
            query: ({ id, page_number }) => ({
                url: `/club-images?club_id=${id}&page=${page_number}`,
                method: "GET",
                headers: authenticationsHeader
            }),
            providesTags: ["club_images"]
        }),
        deleteClubImages: builder.mutation({
            query: (id) => ({
                url: `/api/v1/Club-Images/${id}/`,
                method: "DELETE",
                // headers: { 'content-type': 'application/json' }
                headers: authenticationsHeader
            }),
            invalidatesTags: ["club_images"]
        }),
        updateClubImages: builder.mutation({
            query: (id) => ({
                url: `/api/v1/Club-Images/${id}/`,
                method: "PUT",
                // headers: { 'content-type': 'application/json' }
                headers: authenticationsHeader
            }),
            invalidatesTags: ["club_images"]
        }),
        getClubVideos: builder.query({
            query: ({ id, page_number }) => ({
                url: `/club-videos?club_id=${id}&page=${page_number}`,
                method: "GET",
                headers: authenticationsHeader
            }),
            providesTags: ["club_videos"]
        }),
        deleteClubVideos: builder.mutation({
            query: (id) => ({
                url: `/api/v1/Club-Videos/${id}/`,
                method: "DELETE",
                // headers: { 'content-type': 'application/json' }
                headers: authenticationsHeader
            }),
            invalidatesTags: ["club_videos"]
        }),
        updateClubVideos: builder.mutation({
            query: (id) => ({
                url: `/api/v1/Club-videos/${id}/`,
                method: "PUT",
                // headers: { 'content-type': 'application/json' }
                headers: authenticationsHeader
            }),
            invalidatesTags: ["club_videos"]
        }),
        uploadImage: builder.mutation({
            query: (body) => ({
                url: `/api/v1/Club-Images/`,
                method: "POST",
                body: body,
                headers: authenticationsHeader
            }),
            invalidatesTags: ["club_images"]
        }),
        uploadVideo: builder.mutation({
            query: (body) => ({
                url: `/api/v1/Club-Videos/`,
                method: "POST",
                body: body,
                headers: authenticationsHeader
            }),
            invalidatesTags: ["club_videos"]
        }),
    }),
})


export const { useGetHatkatDataQuery, useGetClubDataQuery, useUploadImageMutation, useGetClubImagesQuery, useDeleteClubImagesMutation, useUpdateClubImagesMutation, useUpdateClubVideosMutation, useGetClubVideosQuery, useUploadVideoMutation, useDeleteClubVideosMutation } = baseApi;