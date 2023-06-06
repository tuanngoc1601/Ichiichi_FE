import {
    getCourseStart,
    getCourseError,
    getCourseSuccess,
    getCourseSearchStart,
    getCourseSearchError,
    getCourseSearchSuccess
} from './courseSlide';
import { getWordByIdStart, getWordByIdError, getWordByIdSuccess } from './wordSlide';
import { getAllVideosOfWordStart, getAllVideosOfWordError, getAllVideosOfWordSuccess } from './videoSlide';
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

export const getSearchCourse = async (data, dispatch) => {
    dispatch(getCourseSearchStart());
    try {
        const res = await courseService.getSearchCouseServices(data);
        dispatch(getCourseSearchSuccess(res.data));
    } catch (e) {
        dispatch(getCourseSearchError());
    }
}

export const getAllVideoDetails = async (content_id, dispatch) => {
    dispatch(getAllVideosOfWordStart());
    try {
        const res = await courseService.getAllVideosOfWordService(content_id);
        dispatch(getAllVideosOfWordSuccess(res.data));
    } catch (e) {
        dispatch(getAllVideosOfWordError());
    }
}