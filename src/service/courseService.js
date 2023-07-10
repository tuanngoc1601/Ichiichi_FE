import axios from "../axios";

export const getAllCourses = () => {
    return axios.get('/api/get-all-courses');
}

export const getSearchCouseServices = (data) => {
    return axios.post('/api/search-course', data);
}

export const getAllWords = (course_id) => {
    return axios.get(`/api/get-all-words?course_id=${course_id}`);
}

export const getWordByIdService = (id) => {
    return axios.get(`/api/get-word?id=${id}`);
}

export const getAllVideosOfWordService = (content_id) => {
    return axios.get(`/api/get-content?content_id=${content_id}`);
}

export const createVideoWatchedSerivce = (data) => {
    return axios.post('/api/create-video-watch', data);
}

export const getAllVideoWatchedService = (content_id) => {
    return axios.get(`/api/get-all-video-watched?content_id=${content_id}`);
}

export const updateProgressCourseService = (course_id) => {
    return axios.put(`/api/update-progress-course?course_id=${course_id}`);
}