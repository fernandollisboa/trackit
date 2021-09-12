import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import FooterMenu from "../components/FooterMenu";
import TopBar from "../components/TopBar";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import { getHabits } from "../service/TrackIt";
import NewHabitBuilder from "../components/NewHabitBuilder";
import HabitCard from "../components/HabitCard";
import { PageTitle, PageWarningMsg, PageWrapper } from "../components/CommonStyles";

export default function HabitsScreen() {
	const { userAuthData } = useContext(UserContext);
	const { token } = userAuthData;
	const [updated, setUpdated] = useState(0);
	const [habits, setHabits] = useState([]);
	const [isDisabled, setIsDisabled] = useState(false);
	const [newHabitBuilderVisible, setNewHabitBuilderVisible] = useState(false);
	const history = useHistory();

	useEffect(
		() =>
			getHabits(token).then(
				(res) => {
					setHabits(res.data);
					setIsDisabled(false);
				},
				() => {
					alert("Erro de autenticação de usuário!");
					history.push("/");
				}
			),
		[updated]
	);

	return (
		<>
			<TopBar />

			<PageWrapper>
				<CreateNewHabitContainer>
					<PageTitle>Meus hábitos</PageTitle>

					<CreateNewHabitButton onClick={() => setNewHabitBuilderVisible(!newHabitBuilderVisible)}>
						+
					</CreateNewHabitButton>
				</CreateNewHabitContainer>

				<NewHabitBuilder
					isDisabled={isDisabled}
					isVisible={newHabitBuilderVisible}
					closeButton={() => setNewHabitBuilderVisible(false)}
					update={() => setUpdated(updated + 1)}
				/>

				{habits.length === 0 && !isDisabled ? (
					<PageWarningMsg>
						Você não tem nenhuma hábito cadastrado ainda, adicione um hábito para começar a
						trackear!
					</PageWarningMsg>
				) : (
					habits.map((habit) => {
						return <HabitCard key={habit.id} name={habit.name} days={habit.days} />;
					})
				)}
			</PageWrapper>

			<FooterMenu />
		</>
	);
}

const CreateNewHabitContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const CreateNewHabitButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	background-color: #52b6ff;
	font-size: 25px;
	cursor: pointer;
	color: white;
	width: 40px;
	height: 35px;
`;
