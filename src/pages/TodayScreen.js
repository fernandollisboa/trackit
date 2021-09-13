import styled from "styled-components";
import TodayHabitCard from "../components/TodayHabitsCard";
import { PageTitle, PageWrapper } from "../components/CommonStyles";
import TopBar from "../components/TopBar";
import UserContext from "../contexts/UserContext";
import { useEffect, useState, useContext } from "react";
import { getTodayHabits } from "../service/TrackIt";
import FooterMenu from "../components/FooterMenu";
import { useHistory } from "react-router";

export default function TodayScreen() {
	const { userAuthData, percentHabitsCompleted, setPercentHabitsCompleted } =
		useContext(UserContext);
	const { token } = userAuthData;
	const [updated, setUpdated] = useState(0);
	const [todaysHabits, setTodaysHabits] = useState([]);
	const history = useHistory();

	const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

	useEffect(
		() =>
			getTodayHabits(token).then(
				(res) => {
					setTodaysHabits([...res.data]);

					if (todaysHabits.length > 0) {
						setPercentHabitsCompleted(
							res.data.filter((habit) => habit.done).length / res.data.length
						);
					}
				},
				() => {
					alert("Erro de autenticação de usuário!");
					history.push("/");
				}
			),
		[updated]
	);

	function update() {
		setUpdated(updated + 1);
	}

	function generateDate() {
		const date = new Date();
		const weekDay = dias[date.getDay()];
		const monthDay = date.getDate();
		let month = `${date.getMonth()}`;

		if (month.length === 1) month = "0" + month;

		return `${weekDay}, ${monthDay}/${month}`;
	}

	return (
		<>
			<TopBar />
			<PageWrapper>
				<PageTitle>{generateDate()}</PageTitle>
				<SectionSubTitle color={percentHabitsCompleted === 0 ? null : "#8FC549"}>
					{percentHabitsCompleted === 0
						? "Nenhum hábito concluído ainda"
						: `${parseInt(percentHabitsCompleted * 100)}% dos hábitos concluídos`}
				</SectionSubTitle>

				{todaysHabits.map((habit) => (
					<TodayHabitCard
						key={habit.id}
						title={habit.name}
						isChecked={habit.done}
						streak={habit.currentSequence}
						record={habit.highestSequence}
						ID={habit.id}
						update={update}
					/>
				))}
			</PageWrapper>

			<FooterMenu />
		</>
	);
}

const SectionSubTitle = styled.p`
	font-family: "Lexend Deca", sans-serif;
	font-size: 18px;
	color: ${(props) => props.color || "#bababa"};
	margin-bottom: 20px;
	margin-top: 10px;
`;
