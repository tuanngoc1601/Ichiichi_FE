import { getCourseStart, getCourseError, getCourseSuccess } from './courseSlide';
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