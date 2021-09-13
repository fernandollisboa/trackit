import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { Reset } from "styled-reset";
import LoginScreen from "./pages/LoginScreen";
import SignUpScreen from "./pages/SignUpScreen";
import HabitsScreen from "./pages/HabitsScreen";
import HistoryScreen from "./pages/HistoryScreen";
import GlobalStyle from "./GlobalStyle";
import UserContext from "./contexts/UserContext";
import TodayScreen from "./pages/TodayScreen";

export default function App() {
	const [userAuthData, setUserAuthData] = useState("");
	const [percentHabitsCompleted, setPercentHabitsCompleted] = useState(0);

	return (
		<BrowserRouter>
			<Reset />
			<GlobalStyle />

			<Switch>
				<Route exact path="/">
					<UserContext.Provider value={{ setUserAuthData, setPercentHabitsCompleted }}>
						<LoginScreen />
					</UserContext.Provider>
				</Route>

				<Route exact path="/cadastro">
					<SignUpScreen />
				</Route>

				<Route exact path="/habitos">
					<UserContext.Provider value={{ userAuthData, percentHabitsCompleted }}>
						<HabitsScreen />
					</UserContext.Provider>
				</Route>

				<Route exact path="/historico">
					<UserContext.Provider value={{ userAuthData, percentHabitsCompleted }}>
						<HistoryScreen />
					</UserContext.Provider>
				</Route>

				<Route exact path="/hoje">
					<UserContext.Provider
						value={{ userAuthData, percentHabitsCompleted, setPercentHabitsCompleted }}
					>
						<TodayScreen />
					</UserContext.Provider>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
