import logo from "../assets/logo.jpeg";
import styled from "styled-components";
import StyledLink from "../components/StyledLink";
import InputForm from "../components/InputForm";
import Loader from "../components/Loader";
import { useState } from "react";
import { postLogin } from "../service/TrackIt";

export default function LoginScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isDisabled, setIsDisabled] = useState(false);

	function checkCredentials(event) {
		event.preventDefault();

		postLogin({ email, password }).then(
			(res) => {
				console.log(res.data);
				setIsDisabled(false);
			},
			(err) => {
				console.log(err.response.data.message);
				setIsDisabled(false);
				alert("Usuário e/ou senha inválidos");
			}
		);

		setIsDisabled(true);
	}

	return (
		<LoginScreenWrapper>
			<Logo />

			<InputForm onSubmit={checkCredentials} disabled={isDisabled}>
				<ion-icon name="person-circle-outline"></ion-icon>
				<input
					type="email"
					placeholder="email"
					required
					value={email}
					disabled={isDisabled}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<input
					type="password"
					placeholder="senha"
					required
					value={password}
					disabled={isDisabled}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button type="submit"> {isDisabled ? <Loader /> : "Entrar"}</button>
			</InputForm>
			<StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
		</LoginScreenWrapper>
	);
}

const LoginScreenWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #f7f7f7;
	height: 100vh;
	width: 100vw;
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
