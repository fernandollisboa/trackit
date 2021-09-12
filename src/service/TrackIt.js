import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function getBearerTokenHeader(token) {
	return { headers: { Authorization: `Bearer ${token}` } };
}

function postSignUp(signUpData) {
	const promise = axios.post(`${BASE_URL}/auth/sign-up`, signUpData);
	return promise;
}

function postLogin(loginData) {
	const promise = axios.post(`${BASE_URL}/auth/login`, loginData);
	return promise;
}

function getHabits(token) {
	const promise = axios.get(`${BASE_URL}/habits`, getBearerTokenHeader(token));
	return promise;
}

function postNewHabit(body, token) {
	const promise = axios.post(`${BASE_URL}/habits`, body, getBearerTokenHeader(token));
	return promise;
}

export { postSignUp, postLogin, getHabits, postNewHabit };
