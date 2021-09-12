import { useContext } from "react";
import styled from "styled-components";
import StyledLink from "./StyledLink";
import TodayProgressBar from "./TodayProgressBar";

export default function FooterMenu() {
	return (
		<FooterMenuWrapper>
			<TodayLink>
				<TodayProgressBar />
			</TodayLink>

			<BottomBar>
				<Habits to="/habits">Hábitos</Habits>

				<History to="/historico">Histórico</History>
			</BottomBar>
		</FooterMenuWrapper>
	);
}

const FooterMenuWrapper = styled.div`
	display: flex;
	position: fixed;
	justify-content: center;
	width: 100vw;
	bottom: 3%;
`;

const BottomBar = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 22px 36px;
	font-size: 17px;
	font-weight: 700;
	width: 100vw;
	height: 70px;
	overflow-y: visible;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
`;

const Habits = styled(StyledLink)`
	text-decoration: none;
`;

const History = styled(StyledLink)`
	text-decoration: none;
`;

const TodayLink = styled(StyledLink)`
	height: 91px;
	width: 91px;
	background-color: #52b6ff;
	border-radius: 50%;
	padding: 6px;
	z-index: 1;
`;
