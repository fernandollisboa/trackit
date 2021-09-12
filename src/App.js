import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import LoginScreen from "./pages/LoginScreen";
import SignUpScreen from "./pages/SignUpScreen";
import HabitsScreen from "./pages/HabitsScreen";
import GlobalStyle from "./GlobalStyle";
import UserContext from "./contexts/UserContext";

export default function App() {
	const [userAuthData, setUserAuthData] = useState("");

	return (
		<BrowserRouter>
			<GlobalStyle />

			<Switch>
				<Route exact path="/">
					<UserContext.Provider value={{ setUserAuthData }}>
						<LoginScreen />
					</UserContext.Provider>
				</Route>

				<Route exact path="/cadastro">
					<SignUpScreen />
				</Route>

				<Route exact path="/habitos">
					<UserContext.Provider value={{ userAuthData }}>
						<HabitsScreen />
					</UserContext.Provider>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
