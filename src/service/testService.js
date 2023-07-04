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

export const updateTestScoreService = (data) => {
    return axios.put('/api/update-test-score', data);
}

export const addResultQuestionService = (data) => {
    return axios.post('/api/add-result-question', data);
}

export const getAllIncorrectQuestionTestService = (limit) => {
    return axios.get(`/api/get-incorrect-question-test?limit=${limit}`);
}

export const getAllRandomQuestionTestService = (limit) => {
    return axios.get(`/api/get-random-question?limit=${limit}`);
}

export const getAllTestPreivewService = (user_id) => {
    return axios.get(`/api/get-result-test-preview?user_id=${user_id}`);
}