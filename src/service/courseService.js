import axios from "axios";

export const getAllCourses = () => {
    return axios.get('/api/get-all-courses');
}