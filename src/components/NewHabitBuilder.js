import styled from "styled-components";
import { useState, useContext } from "react";
import DaySelector from "./DaySelector";
import { postNewHabit } from "../service/TrackIt";
import UserContext from "../contexts/UserContext";

export default function NewHabitBuilder({ isDisabled, isVisible, closeButton }) {
	const [habitData, setHabitData] = useState({ name: "", days: [] });
	const { userAuthData } = useContext(UserContext);
	const { token } = userAuthData;
	const days = [
		{ name: "D", number: 7 },
		{ name: "S", number: 1 },
		{ name: "T", number: 2 },
		{ name: "Q", number: 3 },
		{ name: "Q", number: 4 },
		{ name: "S", number: 5 },
		{ name: "S", number: 6 },
	];

	function toggleDaySelection(thisDay, wasSelected) {
		let newDaysData;

		if (!wasSelected) {
			newDaysData = [...habitData.days, thisDay];
			console.log("add" + thisDay);
		} else {
			newDaysData = habitData.days.filter((value) => value !== thisDay);
			console.log("rem" + thisDay);
		}

		console.log(newDaysData);

		setHabitData({
			name: habitData.name,
			days: [...newDaysData],
		});
	}

	function submitHabit() {
		if (isCorrectlyFilled()) {
			console.log({ habitData });
			postNewHabit(habitData, token).then(
				(res) => console.log(res.data),
				(err) => err.response.data
			);
		}
	}

	function isCorrectlyFilled() {
		if (habitData.name.trim().length === 0) {
			alert("Por favor insira um nome válido para seu hábito!");
			return false;
		}

		if (habitData.days.length === 0) {
			alert("Por favor selecione pelo menos um dia para seu hábito!");
			return false;
		}

		return true;
	}

	return (
		<NewHabitBuilderWrapper isVisible={isVisible}>
			<input
				placeholder="nome do hábito"
				value={habitData.name}
				required
				onChange={(e) =>
					setHabitData({
						name: e.target.value,
						days: habitData.days,
					})
				}
			/>

			<DaysInput isVisible={isVisible}>
				{days.map((day, index) => (
					<DaySelector
						key={index}
						text={day.name}
						id={day.number}
						toggleSelection={toggleDaySelection}
					/>
				))}
			</DaysInput>

			<ButtonsContainer isVisible={isVisible}>
				<CancelButton onClick={closeButton}>Cancelar</CancelButton>
				<SendButton onClick={submitHabit}>Enviar</SendButton>
			</ButtonsContainer>
		</NewHabitBuilderWrapper>
	);
}

const NewHabitBuilderWrapper = styled.div`
	background-color: #ffffff;
	border-radius: 5px;
	overflow: hidden;
	width: 100%;
	height: ${(props) => (props.isVisible ? "170px" : "0")};
	padding: ${(props) => (props.isVisible ? "18px" : "0")};
	margin: ${(props) => (props.isVisible ? "18px 0px" : "0")};
	transition: all 0.65s ease-out;

	input {
		width: 100%;
		display: ${(props) => (props.isVisible ? "block" : "none")};
		padding: 9px 11px;
		font-size: 20px;
		border: 1px solid #d5d5d5;
		border-radius: 5px;
	}
`;

const DaysInput = styled.div`
	margin-top: 10px;
	display: flex;
	overflow: hidden;
	height: ${(props) => (props.isVisible ? "fit-content" : "0")};
`;

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	overflow: hidden;
	height: ${(props) => (props.isVisible ? "fit-content" : "0")};
	margin-top: 15px;
	width: 100%;
`;

const CancelButton = styled.button`
	color: #52b6ff;
	background-color: transparent;
	font-size: 16px;
	width: 84px;
	height: 35px;
	border: none;
	border-radius: 4px;
`;

const SendButton = styled.button`
	color: white;
	background-color: #52b6ff;
	font-size: 16px;
	width: 84px;
	height: 35px;
	border: none;
	border-radius: 4px;
`;
