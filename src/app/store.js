import { configureStore } from "@reduxjs/toolkit";
import postReducers from '../features/posts/postsSlice';

export const store = configureStore({
    reducer: {
        posts: postReducers,
    }
})