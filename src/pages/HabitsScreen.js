import { useContext } from "react";
import TopBar from "../components/TopBar";
import UserContext from "../contexts/UserContext";

export default function HabitsScreen() {
	const { userAuthData } = useContext(UserContext);

	console.log({ userAuthData });
	return (
		<>
			<TopBar />
			<div>FEIJOADA EH BOM D+ LEK</div>
		</>
	);
}
