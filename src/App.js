import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import SignUpScreen from "./pages/SignUpScreen";
import GlobalStyle from "./GlobalStyle";

export default function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Switch />
			<Route exact path="/">
				<LoginScreen />
			</Route>

			<Route exact path="/cadastro">
				<SignUpScreen />
			</Route>
		</BrowserRouter>
	);
}
