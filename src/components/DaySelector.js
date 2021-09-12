import { useState } from "react";
import styled from "styled-components";

export default function DaySelector({ text, id, toggleSelection }) {
	const [isSelected, setIsSelected] = useState(false);

	function clickHandler() {
		toggleSelection(id, isSelected);
		setIsSelected(() => !isSelected);
	}

	return (
		<DaySelectorWrapper filled={isSelected} onClick={clickHandler}>
			<p>{text}</p>
		</DaySelectorWrapper>
	);
}

const DaySelectorWrapper = styled.div`
	background-color: ${(props) => (props.filled ? "#dbdbdb" : "#fff")};
	color: ${(props) => (props.filled ? "#fff" : "#dbdbdb")};
	border-radius: 5px;
	border: 2px solid #dbdbdb;
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	margin-right: 5px;
`;
