import logo from "../assets/logo.jpeg";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function LoginScreen() {
	return (
		<LoginScreenWrapper>
			<Logo />
			<InputCell>
				<input type="text" required={true} placeholder="email"></input>
				<input type="text" required={true} placeholder="senha"></input>
			</InputCell>
			<SubmitButton>Entrar</SubmitButton>
			<Link style={{ textDecoration: "none" }}>alou</Link>
		</LoginScreenWrapper>
	);
}

const LoginScreenWrapper = styled.div`
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
	margin-bottom: 40px;
`;

const InputCell = styled.div`
	display: flex;
	flex-direction: column;
	input {
		width: 303px;
		height: 45px;
		font-size: 20px;
		background-color: transparent;
		border: 1px solid #d5d5d5;
		margin-bottom: 6px;
		padding: 9px 11px;
		border-radius: 5px;
	}
`;

const SubmitButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 303px;
	height: 45px;
	background-color: #52b6ff;
	border: none;
	border-radius: 5px;
	color: white;
	font-size: 21px;
	cursor: pointer;
	font-weight: 700;
	padding: 8px 0px;
	margin-bottom: 16px;
`;
