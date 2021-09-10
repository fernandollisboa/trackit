import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postSignUp(signUpData) {
	const promise = axios.post(`${BASE_URL}/auth/sign-up`, signUpData);
	return promise;
}

function postLogin(loginData) {
	const promise = axios.post(`${BASE_URL}/auth/login`, loginData);
	return promise;
}

export { postSignUp, postLogin };
