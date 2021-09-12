import FooterMenu from "../components/FooterMenu";
import TopBar from "../components/TopBar";
import { PageTitle, PageWarningMsg, PageWrapper } from "../components/CommonStyles";

export default function HistoryScreen() {
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
