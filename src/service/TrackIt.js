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

function deleteHabit(habitData, token) {
	console.log(habitData);
	const promise = axios.delete(`${BASE_URL}/habits/${habitData.id}`, getBearerTokenHeader(token), {
		data: { habitData },
	});
	return promise;
}

function getTodayHabits(token) {
	const promise = axios.get(`${BASE_URL}/habits/today`, getBearerTokenHeader(token));
	return promise;
}

function postCheckHabit(habitId, token) {
	const promise = axios.post(
		`${BASE_URL}/habits/${habitId}/check`,
		{},
		getBearerTokenHeader(token)
	);
	return promise;
}

function postUncheckHabit(habitId, token) {
	const promise = axios.post(
		`${BASE_URL}/habits/${habitId}/uncheck`,
		{},
		getBearerTokenHeader(token)
	);
	return promise;
}

export {
	postSignUp,
	postLogin,
	getHabits,
	postNewHabit,
	deleteHabit,
	getTodayHabits,
	postCheckHabit,
	postUncheckHabit,
};
