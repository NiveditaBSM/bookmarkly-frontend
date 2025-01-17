import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import bookmarkService from '../services/bookmarks';

export const fetchBookmarks = createAsyncThunk('bookmarks/fetchBookmarks', async () => {
    const response = await bookmarkService.get();
    console.log('response of fetchBookmarks', response.data)
    return response.data;
});

export const addBookmark = createAsyncThunk(
    'bookmarks/addBookmarks', async (newStudent) => {
        const response = await bookmarkService.add(newStudent);
        console.log(response.data)
        return response.data;
    });

export const deleteBookmark = createAsyncThunk(
    'bookmarks/deleteBookmark', async (id) => {
        const response = await bookmarkService.remove(id);
        console.log('deleted bookmark:', response.data)
        return response.data;
    });


const bookmarkSlice = createSlice({
    name: 'bookmarks',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        resetBookmarks: (state) => {
            state.data = [];
            state.status = 'idle';
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookmarks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBookmarks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchBookmarks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addBookmark.fulfilled, (state, action) => {
                console.log(action.payload)
                if (Array.isArray(state.data)) {
                    state.data.push(action.payload);
                } else {
                    state.data = [action.payload];
                }
            })
            .addCase(deleteBookmark.fulfilled, (state, action) => {
                console.log(action)
                state.data = state.data.filter((bookmark) => bookmark.id !== action.payload.id);
            });
    }
});


export const { resetBookmarks } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
