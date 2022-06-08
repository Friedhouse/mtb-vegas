import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { trailsReducer } from '../trails/TrailsSlice'
import { commentsReducer } from '../comments/commentsSlice';
import { partnersReducer } from '../partners/partnersSlice';
import { promotionsReducer } from '../promotions/promotionsSlice';
import { userReducer } from '../user/userSlice';

export const store = configureStore({
    reducer: {
        trails: trailsReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
