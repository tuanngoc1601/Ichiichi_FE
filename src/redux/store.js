import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlide";
import wordSlide from "./wordSlide";
import videoSlide from "./videoSlide";
import testSlide from "./testSlide";

export default configureStore({
    reducer: {
        courses: courseReducer,
        word: wordSlide,
        videos: videoSlide,
        tests: testSlide
    }
})