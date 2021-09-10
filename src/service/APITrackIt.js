import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

function postSignUp(signUpDataObj) {
	const promise = axios.get({ BASE_URL }, signUpDataObj);
	return promise;
}

export { postSignUp };
