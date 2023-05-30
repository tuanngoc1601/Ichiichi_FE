import { createSlice } from "@reduxjs/toolkit";

export const courseSlide = createSlice({
    name: "courses",
    initialState: {
        courseArr: [],
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
        }
    }
})

export const { getCourseStart, getCourseError, getCourseSuccess } = courseSlide.actions;
export default courseSlide.reducer;