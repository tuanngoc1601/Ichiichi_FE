import {
    getCourseStart,
    getCourseError,
    getCourseSuccess,
    getCourseSearchStart,
    getCourseSearchError,
    getCourseSearchSuccess
} from './courseSlide';
import { 
    getAllWordsStart,
    getAllWordsError,
    getAllWordsSuccess,
    getWordByIdStart, 
    getWordByIdError, 
    getWordByIdSuccess
} from './wordSlide';
import {
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
} from './testSlide';
import { getAllVideosOfWordStart, getAllVideosOfWordError, getAllVideosOfWordSuccess } from './videoSlide';
import { courseService, testService } from '../service';

export const getAllCourses = async (dispatch) => {
    dispatch(getCourseStart());
    try {
        const res = await courseService.getAllCourses();
        dispatch(getCourseSuccess(res.data));
    } catch (e) {
        dispatch(getCourseError());
    }
}

export const getAllWords = async(course_id, dispatch) => {
    dispatch(getAllWordsStart());
    try {
        const res = await courseService.getAllWords(course_id);
        dispatch(getAllWordsSuccess(res.data));
    } catch (e) {
        dispatch(getAllWordsError());
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

export const getAllQuestionCourse = async (id, dispatch) => {
    dispatch(getAllQuestionStart());
    try {
        const res = await testService.getAllQuestionService(id);
        dispatch(getAllQuestionSuccess(res.data));
    } catch (e) {
        dispatch(getAllQuestionError());
    }
}

export const getQuestionById = async (id, dispatch) => {
    dispatch(getQuestionStart());
    try {
        const res = await testService.getQuestionByIdService(id);
        dispatch(getQuestionSuccess(res.data));
    } catch (e) {
        dispatch(getQuestionError());
    }
}

export const getAllIncorrectQuestionTest = async (limit, dispatch) => {
    dispatch(getAllIncorrectQuestionStart());
    try {
        const res = await testService.getAllIncorrectQuestionTestService(limit);
        dispatch(getAllIncorrectQuestionSuccess(res.data));
    } catch (e) {
        dispatch(getAllIncorrectQuestionError());
    }
}

export const getAllRandomQuestionTest = async (limit, dispatch) => {
    dispatch(getAllRandomQuesitonStart());
    try {
        const res = await testService.getAllRandomQuestionTestService(limit);
        dispatch(getAllRandomQuesitonSuccess(res.data));
    } catch (e) {
        dispatch(getAllRandomQuesitonError());
    }
}