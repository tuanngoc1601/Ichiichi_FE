import axios from "axios";

export const getAllCourses = () => {
    return axios.get('/api/get-all-courses');
}

export const getAllWords = (course_id) => {
    return axios.get(`/api/get-all-words?course_id=${course_id}`);
}

export const getWordByIdService = (id) => {
    return axios.get(`/api/get-word?id=${id}`);
}