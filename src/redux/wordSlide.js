import { createSlice } from "@reduxjs/toolkit";

export const wordSlide = createSlice({
    name: "word",
    initialState: {
        word: {},
        wordArr: {},
        pendding: false,
        error: false
    },
    reducers: {
        getAllWordsStart: (state) => {
            state.pendding = true;
        },
        getAllWordsError: (state) => {
            state.pendding = false;
            state.error = true;
        },
        getAllWordsSuccess: (state, action) => {
            state.pendding = false;
            state.error = false;
            state.wordArr = action.payload.allWords;
        },
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

export const {
    getAllWordsStart,
    getAllWordsError,
    getAllWordsSuccess,
    getWordByIdStart,
    getWordByIdError,
    getWordByIdSuccess
} = wordSlide.actions;
export default wordSlide.reducer;