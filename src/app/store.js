import { configureStore } from '@reduxjs/toolkit';
import bookmarksReducer from '../features/bookmarkSlice';

const store = configureStore({
    reducer: {
        bookmarks: bookmarksReducer,
    },
});

export default store;
