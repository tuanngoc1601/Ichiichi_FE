import { createSlice } from "@reduxjs/toolkit";

export const testSlide = createSlice({
    name: "tests",
    initialState: {
        allQuestions: [],
        question: {},
        pendding: false,
        error: false
    },
    reducers: {
        getAllQuestionStart: (state) => {
            state.pendding = true;
        },
        getAllQuestionError: (state) => {
            state.pendding = false;
            state.error = true;
        },
        getAllQuestionSuccess: (state, action) => {
            state.pendding = false;
            state.error = false;
            state.allQuestions = action.payload.question;
        },

        getQuestionStart: (state) => {
            state.pendding = true;
        },
        getQuestionError: (state) => {
            state.pendding = false;
            state.error = true;
        },
        getQuestionSuccess: (state, action) => {
            state.pendding = false;
            state.error = false;
            state.question = action.payload.question;
        }
    }
})

export const { 
    getAllQuestionStart, 
    getAllQuestionError, 
    getAllQuestionSuccess,
    getQuestionStart,
    getQuestionError,
    getQuestionSuccess
} = testSlide.actions;
export default testSlide.reducer;