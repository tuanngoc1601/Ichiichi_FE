import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlide";
import wordSlide from "./wordSlide";
import videoSlide from "./videoSlide";

export default configureStore({
    reducer: {
        courses: courseReducer,
        word: wordSlide,
        videos: videoSlide
    }
})