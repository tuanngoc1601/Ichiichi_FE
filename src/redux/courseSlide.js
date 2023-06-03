import { createSlice } from "@reduxjs/toolkit";

export const courseSlide = createSlice({
    name: "courses",
    initialState: {
        courseArr: [],
        searchCourse: [],
        pendding: false,
        error: false
    },
    reducers: {
        getCourseStart: (state) => {
            state.pendding = true;
        },
        getCourseError: (state) => {
            state.pendding = false;
            state.error = true;
        },
        getCourseSuccess: (state, action) => {
            state.pendding = false;
            state.error = false;
            state.courseArr = action.payload.allCourses;
        },

        getCourseSearchStart: (state) => {
            state.pendding = true;
        },
        getCourseSearchError: (state) => {
            state.pendding = false;
            state.error = true;
        },
        getCourseSearchSuccess: (state, action) => {
            state.pendding = false;
            state.error = false;
            state.searchCourse = action.payload.searchCourse;
        }
    }
})

export const { 
    getCourseStart, 
    getCourseError, 
    getCourseSuccess,
    getCourseSearchStart,
    getCourseSearchError,
    getCourseSearchSuccess
} = courseSlide.actions;
export default courseSlide.reducer;