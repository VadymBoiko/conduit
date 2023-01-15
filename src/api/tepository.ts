import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../core/axios-base-query'
import { GlobalFeedIn } from '../dto/globalfeed'



export const feedApi = createApi({
    reducerPath: 'feedApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://api.realworld.io/api/'
        }),
    endpoints: (builder) => ({
        getGlobalFeed: builder.query<GlobalFeedIn, any>({
            query: () => ({
                url: '/articles',
                method: 'get'
            })
        })
    })
})

export const {useGetGlobalFeedQuery} = feedApi