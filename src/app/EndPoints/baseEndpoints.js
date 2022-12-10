import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const URL = "https://mynextfilm.com/harkat";
export const baseApi = createApi({
    reducerPath: "HarkatBase",
    baseQuery: fetchBaseQuery({
        baseUrl: URL
    }),
    tagTypes: ["harkat", "club", "post"],
    endpoints: (builder) => ({
        getHatkatData: builder.query({
            query: () => ({
                url: `/api/v1/Clubs`,
                method: "GET"
            }),
            providesTags: ["clubs"]
        }),
        getClubData: builder.query({
            query: (id) => ({
                url: `/club-api/${id}`,
                method: "GET"
            }),
            providesTags: ["club"]
        }),
    }),
})


export const { useGetHatkatDataQuery, useGetClubDataQuery } = baseApi;