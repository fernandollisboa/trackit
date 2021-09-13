import { useState } from "react";
import styled from "styled-components";

export default function DaySelector({
	text,
	id,
	toggleSelection,
	controlledInputSelected,
	disabled,
}) {
	const [isSelected, setIsSelected] = useState(false);

	if (isSelected !== controlledInputSelected) {
		setIsSelected(controlledInputSelected);
	}

	function select() {
		toggleSelection(id, isSelected);
		setIsSelected(() => !isSelected);
	}

	return (
		<DaySelectorWrapper filled={isSelected} onClick={select} disabled={disabled}>
			<p>{text}</p>
		</DaySelectorWrapper>
	);
}

const DaySelectorWrapper = styled.button`
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
