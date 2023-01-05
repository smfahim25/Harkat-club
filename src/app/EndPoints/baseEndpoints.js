import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
const URL = "http://115.245.192.138/harkat";
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}
const csrfToken = Cookies.get('csrftoken')
const csrf = {
    'X-CSRFToken': csrfToken
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
                headers: headers
            }),
            providesTags: ["clubs"]
        }),
        getClubMember: builder.query({
            query: () => ({
                url: `/club-user`,
                method: "GET",
                headers: headers
            }),
            providesTags: ["clubs"]
        }),
        getClubData: builder.query({
            query: (id) => ({
                url: `/club-api/${id}`,
                method: "GET",
                headers: headers
            }),
            providesTags: ["club"]
        }),
        getClubImages: builder.query({
            query: ({ id, page_number }) => ({
                url: `/club-images?club_id=${id}&page=${page_number}`,
                method: "GET",
                headers: headers
            }),
            providesTags: ["club_images"]
        }),
        deleteClubImages: builder.mutation({
            query: (id) => ({
                url: `/api/v1/Club-Images/${id}/`,
                method: "DELETE",
                headers: csrf
            }),
            invalidatesTags: ["club_images"]
        }),
        updateClubImages: builder.mutation({
            query: (data) => {
                const id = data.id;
                const body = data.body;
                return {
                    url: `/api/v1/Club-Images/${id}/`,
                    method: 'PUT',
                    body: body,
                    headers: csrf
                }
            },
            invalidatesTags: ["club_images"]
        }),
        getClubVideos: builder.query({
            query: ({ id, page_number }) => ({
                url: `/club-videos?club_id=${id}&page=${page_number}`,
                method: "GET",
                headers: headers
            }),
            providesTags: ["club_videos"]
        }),
        deleteClubVideos: builder.mutation({
            query: (id) => ({
                url: `/api/v1/Club-Videos/${id}/`,
                method: "DELETE",
                headers: csrf
            }),
            invalidatesTags: ["club_videos"]
        }),
        updateClubVideos: builder.mutation({
            query: (data) => {
                const id = data.id;
                const body = data.body;
                return {
                    url: `/api/v1/Club-Videos/${id}/`,
                    method: 'PUT',
                    body: body,
                    headers: csrf
                }
            },
            invalidatesTags: ["club_videos"]
        }),
        uploadImage: builder.mutation({
            query: (body) => ({
                url: `/api/v1/Club-Images/`,
                method: "POST",
                body: body,
                headers: csrf
            }),
            invalidatesTags: ["club_images"]
        }),
        uploadVideo: builder.mutation({
            query: (body) => ({
                url: `/api/v1/Club-Videos/`,
                method: "POST",
                body: body,
                headers: csrf
            }),
            invalidatesTags: ["club_videos"]
        }),
        createEvent: builder.mutation({
            query: (body) => ({
                url: `/api/v1/Club-Events/`,
                method: "POST",
                body: body,
                headers: csrf
            }),
            invalidatesTags: ["club_events"]
        }),
        requestJoinform: builder.mutation({
            query: (body) => ({
                url: `/api/v1/join-club-member/`,
                method: "POST",
                body: body,
                headers: csrf
            }),
            invalidatesTags: ["join-club-member"]
        }),
        memberUpdate: builder.mutation({
            query: (body) => ({
                url: `/club-member-handler`,
                method: "PUT",
                body: body,
                headers: csrf
            }),
            invalidatesTags: ["join-club-member"]
        }),
        memberDelete: builder.mutation({
            query: (body) => ({
                url: `/club-member-handler`,
                method: "PUT",
                body: body,
                headers: csrf
            }),
            invalidatesTags: ["join-club-member"]
        }),
    }),
})

export const { useGetHatkatDataQuery, useGetClubDataQuery, useUploadImageMutation, useGetClubImagesQuery, useDeleteClubImagesMutation, useUpdateClubImagesMutation, useUpdateClubVideosMutation, useGetClubVideosQuery, useUploadVideoMutation, useDeleteClubVideosMutation, useGetClubMemberQuery, useCreateEventMutation, useRequestJoinformMutation, useMemberUpdateMutation, useMemberDeleteMutation } = baseApi;