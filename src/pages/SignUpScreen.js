import logo from "../assets/logo.jpeg";
import styled from "styled-components";
import StyledLink from "../components/StyledLink";
import InputForm from "../components/InputForm";
import Loader from "../components/Loader";
import { useState } from "react";
import { postSignUp } from "../service/TrackIt";

export default function SignUpScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [photoURL, setPhotoURL] = useState("");
	const [isDisabled, setIsDisabled] = useState(false);

	function submitUser() {
		postSignUp({ email, password, name, photoURL })
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err.response.data.message));
	}

	return (
		<SignUpScreenWrapper>
			<Logo />
			<InputForm onSubmit={submitUser} disabled={isDisabled}>
				<input
					type="email"
					required
					placeholder="email"
					value={email}
					disabled={isDisabled}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<input
					type="text"
					required
					placeholder="senha"
					value={password}
					disabled={isDisabled}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<input
					type="text"
					required
					placeholder="nome"
					value={name}
					disabled={isDisabled}
					onChange={(e) => setName(e.target.value)}
				/>

				<input
					type="url"
					required
					placeholder="foto"
					value={photoURL}
					disabled={isDisabled}
					onChange={(e) => setPhotoURL(e.target.value)}
				/>

				<button type="submit">{isDisabled ? <Loader /> : "Cadastrar"}</button>
			</InputForm>

			<StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
		</SignUpScreenWrapper>
	);
}

const SignUpScreenWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #f7f7f7;
	height: 100vh;
`;

const Logo = styled.div`
	background-image: url(${logo});
	width: 180px;
	height: 180px;
	background-size: contain;
	background-repeat: no-repeat;
	margin-top: 70px;
	margin-bottom: 30px;
`;
