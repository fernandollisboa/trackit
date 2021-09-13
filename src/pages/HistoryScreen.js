import FooterMenu from "../components/FooterMenu";
import TopBar from "../components/TopBar";
import { PageTitle, PageWarningMsg, PageWrapper } from "../components/CommonStyles";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

export default function HistoryScreen() {
	const { percentHabitsCompleted } = useContext(UserContext);

	return (
		<>
			<TopBar />

			<PageWrapper>
				<PageTitle> Histórico</PageTitle>
				<PageWarningMsg>Em breve você poderá ver o histórico dos seus hábitos aqui!</PageWarningMsg>
			</PageWrapper>

			<FooterMenu />
		</>
	);
}
