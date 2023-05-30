import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlide";

export default configureStore({
    reducer: {
        courses: courseReducer
    }
})