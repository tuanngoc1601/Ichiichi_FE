import { createSlice } from "@reduxjs/toolkit";

export const videoSlide = createSlice({
    name: "videos",
    initialState: {
        videos: {},
        pendding: false,
        error: false
    },
    reducers: {
        getAllVideosOfWordStart: (state) => {
            state.pendding = true;
        },
        getAllVideosOfWordError: (state) => {
            state.pendding = false;
            state.error = true;
        },
        getAllVideosOfWordSuccess: (state, action) => {
            state.pendding = false;
            state.error = false;
            state.videos = action.payload.VideoOfWords;
        }
    }
})

export const { getAllVideosOfWordStart, getAllVideosOfWordError, getAllVideosOfWordSuccess } = videoSlide.actions;
export default videoSlide.reducer;