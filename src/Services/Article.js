import { createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react'









// creating an setting up Apis
export const articleApi = createApi({
    reducerPath:'articleApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key', import.meta.env.VITE_API_KEY),
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com')
            return headers
        },

    }),
    endpoints:(builder)=>({
        getSummary:builder.query({

            // some times url might have special characters  that cause some unexpexted behavior like causing errors that why we   are wrapping it to encodeURIComponet so that special character read as part of URL
            query:(params)=>`summarize?url=${encodeURIComponent((params.articleUrl))}&length=3`,
         }),

    }),
         
    
})


// using useLazyGetSummaryQuery as we want it fire onlhy on demand
export const {useLazyGetSummaryQuery}=articleApi