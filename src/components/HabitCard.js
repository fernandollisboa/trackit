import styled from "styled-components";
export default function HabitCard({ key, name, days, removeHabit }) {
	const daysRef = [
		{ name: "D", number: 7 },
		{ name: "S", number: 1 },
		{ name: "T", number: 2 },
		{ name: "Q", number: 3 },
		{ name: "Q", number: 4 },
		{ name: "S", number: 5 },
		{ name: "S", number: 6 },
	];

	return (
		<HabitCardWrapper>
			<HabitTitle>
				{name}
				<ion-icon name="trash" onClick={removeHabit}></ion-icon>
			</HabitTitle>

			<WeekContainer>
				{daysRef.map((eachDay, index) => {
					return (
						<Day key={index} filled={days.includes(eachDay.number)}>
							{eachDay.name}
						</Day>
					);
				})}
			</WeekContainer>
		</HabitCardWrapper>
	);
}

const HabitCardWrapper = styled.div`
	padding: 13px 13px;
	width: 100%;
	height: fit-content;
	background-color: white;
	border-radius: 5px;
	margin: 10px 0px;
`;

const WeekContainer = styled.div`
	display: flex;
`;

const HabitTitle = styled.h1`
	font-size: 20px;
	color: #666666;
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
`;

const Day = styled.div`
	background-color: ${(props) => (props.filled ? "#dbdbdb" : "#fff")};
	color: ${(props) => (props.filled ? "#fff" : "#dbdbdb")};
	border-radius: 5px;
	border: 1px solid #dbdbdb;
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	margin-right: 5px;
`;
