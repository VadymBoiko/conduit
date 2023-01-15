import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { feedApi } from '../api/tepository';

export const store = configureStore({
    reducer:{
        [feedApi.reducerPath]: feedApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(feedApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch