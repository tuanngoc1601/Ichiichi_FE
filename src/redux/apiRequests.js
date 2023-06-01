import { getCourseStart, getCourseError, getCourseSuccess } from './courseSlide';
import { getWordByIdStart, getWordByIdError, getWordByIdSuccess } from './wordSlide';
import { courseService } from '../service';

export const getAllCourses = async (dispatch) => {
    dispatch(getCourseStart());
    try {
        const res = await courseService.getAllCourses();
        dispatch(getCourseSuccess(res.data));
    } catch (e) {
        dispatch(getCourseError());
    }
}

export const getWordById = async (id, dispatch) => {
    dispatch(getWordByIdStart());
    try {
        const res = await courseService.getWordByIdService(id);
        dispatch(getWordByIdSuccess(res.data));
    } catch (e) {
        dispatch(getWordByIdError());
    }
}