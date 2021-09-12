import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import styled from "styled-components";
import logo from "../assets/logo_v2.png";

export default function TopBar() {
	const { userAuthData } = useContext(UserContext);
	const photoURL =
		"https://s2.glbimg.com/iaiGJEJUPLm9Gk-61vLiuMMoGf8=/0x0:1468x974/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2018/P/c/c2ICdQSnWZ2mS5RZf0ug/captura-de-tela-2018-08-05-as-7.19.35-am.png";

	console.log(userAuthData.image);
	return (
		<TopBarWrapper>
			<Logo /> <UserImg image={photoURL} />
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
