import { createSlice } from "@reduxjs/toolkit";

export const testSlide = createSlice({
    name: "tests",
    initialState: {
        allQuestions: [],
        allIncorrectQuestions: [],
        allRandomQuestions: [],
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
        },

        getAllIncorrectQuestionStart: (state) => {
            state.pendding = true;
        },
        getAllIncorrectQuestionError: (state) => {
            state.pendding = false;
            state.error = true;
        },
        getAllIncorrectQuestionSuccess: (state, action) => {
            state.pendding = false;
            state.error = false;
            state.allIncorrectQuestions = action.payload.data;
        },

        getAllRandomQuesitonStart: (state) => {
            state.pendding = true;
        },
        getAllRandomQuesitonError: (state) => {
            state.pendding = false;
            state.error = true;
        },
        getAllRandomQuesitonSuccess: (state, action) => {
            state.pendding = false;
            state.error = false;
            state.allRandomQuestions = action.payload.data;
        }
    }
})

export const { 
    getAllQuestionStart, 
    getAllQuestionError, 
    getAllQuestionSuccess,
    getQuestionStart,
    getQuestionError,
    getQuestionSuccess,
    getAllIncorrectQuestionStart,
    getAllIncorrectQuestionError,
    getAllIncorrectQuestionSuccess,
    getAllRandomQuesitonStart,
    getAllRandomQuesitonError,
    getAllRandomQuesitonSuccess
} = testSlide.actions;
export default testSlide.reducer;