import axios from "axios";

export const getAllQuestionService = (id) => {
    return axios.get(`/api/get-all-question?id=${id}`);
}

export const getQuestionByIdService = (id) => {
    return axios.get(`/api/get-question?id=${id}`);
}

export const getCorrectAnswerService = (id) => {
    return axios.get(`/api/get-right-answer?id=${id}`);
}