import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import GlobalStyle from "./GlobalStyle";

export default function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Switch />
			<Route exact path="/">
				<LoginScreen />
			</Route>
		</BrowserRouter>
	);
}
