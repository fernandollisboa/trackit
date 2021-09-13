import styled from "styled-components";
import { AiFillCheckSquare } from "react-icons/ai";
import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { postCheckHabit, postUncheckHabit } from "../service/TrackIt";

function TodayHabitCard({ isChecked, title, record, streak, ID, update }) {
	const [isClicked, setIsClicked] = useState(isChecked);
	const { userAuthData } = useContext(UserContext);
	const { token } = userAuthData;
	const [updatedStreak, setUpdatedStreak] = useState(streak);

	function clickHandler() {
		if (isClicked) {
			postUncheckHabit(ID, token).then(() => {
				setUpdatedStreak(updatedStreak - 1);
				update();
				setIsClicked(() => !isClicked);
			});
		} else {
			postCheckHabit(ID, token).then(() => {
				setUpdatedStreak(updatedStreak + 1);
				update();
				setIsClicked(() => !isClicked);
			});
		}
	}

	return (
		<TodayHabitCardWrapper>
			<div>
				<TodayHabitCardTitle>{title}</TodayHabitCardTitle>
				<p className="info">
					Sequência atual:{" "}
					<Span color={isClicked ? "#8FC549" : "#666666"}>{`${updatedStreak} dias`}</Span>
				</p>

				<p className="info">
					Seu recorde:{" "}
					<Span color={record <= updatedStreak ? "#8FC549" : "#666666"}>{`${
						record < updatedStreak ? updatedStreak : record
					} dias`}</Span>
				</p>
			</div>
			<AiFillCheckSquare
				color={isClicked ? "#8FC549" : "#E7E7E7"}
				size={90}
				onClick={clickHandler}
			/>
		</TodayHabitCardWrapper>
	);
}

const TodayHabitCardWrapper = styled.div`
	width: 340px;
	height: 94px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 5px 20px 20px;
	border-radius: 5px;
	font-family: "Lexend Deca", sans-serif;
	background-color: #fff;
	margin-bottom: 10px;
	.info {
		font-size: 12px;
		margin-top: 5px;
	}
`;

const TodayHabitCardTitle = styled.p`
	color: #666666;
	font-size: 22px;
	margin-bottom: 10px;
`;

const Span = styled.span`
	color: ${(props) => props.color};
`;

export default TodayHabitCard;
