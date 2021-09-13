import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import styled from "styled-components";
import logo from "../assets/logo_v2.png";

export default function TopBar() {
	const { userAuthData } = useContext(UserContext);
	const { image } = userAuthData;
	return (
		<TopBarWrapper>
			<Logo /> <UserImg image={image} />
		</TopBarWrapper>
	);
}

const TopBarWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #126ba5;
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	height: 70px;
	width: 100vw;
	padding: 10px 18px;
	z-index: 1;
`;

const Logo = styled.div`
	background-image: url(${logo});
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	width: 94px;
	height: 45px;
`;

const UserImg = styled.div`
	background-image: url("${(props) => props.image}");
	background-position: center;
	background-size: contain;
	border-radius: 50%;
	width: 50px;
	height: 50px;
`;
