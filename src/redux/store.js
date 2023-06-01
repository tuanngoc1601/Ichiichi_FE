import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlide";
import wordSlide from "./wordSlide";

export default configureStore({
    reducer: {
        courses: courseReducer,
        word: wordSlide
    }
})