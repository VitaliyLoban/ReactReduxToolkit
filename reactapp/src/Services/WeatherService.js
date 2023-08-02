import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const WeatherService = createApi({
    reducerPath: "WeatheApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3000" }),
    tagTypes: ["Weathers"],
    endpoints: (build) => ({
        getAllWeathers: build.query({
            query: () => ({
                url: "/weatherforecast"
            }),
            providesTags: result => ["Weathers"]
        }),
        createWeather: build.mutation({
            query: (post) => ({
                url: "/weatherforecast",
                method: "post",
                body: post
            }),
            invalidatesTags: ["Weathers"]
        }),
        deleteWeather: build.mutation({
            query: (id) => ({
                url: "/weatherforecast/" + id,
                method: "delete",
            }),
            invalidatesTags: ["Weathers"]
        }),
        updateWeather: build.mutation({
            query: (post) => ({
                url: "/weatherforecast",
                method: "put",
                body: post
            }),
            invalidatesTags: ["Weathers"]
        })
    })
})
