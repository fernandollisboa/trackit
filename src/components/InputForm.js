import styled from "styled-components";

const InputFormLel = styled.form`
	display: flex;
	flex-direction: column;
	margin-bottom: 25px;
	input {
		width: 303px;
		height: 45px;
		font-size: 20px;
		color: ${(props) => (props.disabled ? "#AFAFAF" : "black")};
		background-color: ${(props) => (props.disabled ? "#F2F2F2" : "transparent")};
		border: 1px solid #d5d5d5;
		margin-bottom: 6px;
		padding: 9px 11px;
		border-radius: 5px;
	}
	button {
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
	}
`;

const InputForm = InputFormLel;

export default InputForm;
