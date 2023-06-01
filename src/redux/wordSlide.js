import { createSlice } from "@reduxjs/toolkit";

export const wordSlide = createSlice({
    name: "word",
    initialState: {
        word: {},
        pendding: false,
        error: false
    },
    reducers: {
        getWordByIdStart: (state) => {
            state.pendding = true;
        },
        getWordByIdError: (state) => {
            state.pendding = false;
            state.error = true;
        },
        getWordByIdSuccess: (state, action) => {
            state.pendding = false;
            state.error = false;
            state.word = action.payload.word;
        }
    }
})

export const { getWordByIdStart, getWordByIdError, getWordByIdSuccess } = wordSlide.actions;
export default wordSlide.reducer;