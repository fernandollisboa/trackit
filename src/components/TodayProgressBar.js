import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 75;

export default function TodayProgressBar() {
	return (
		<CircularProgressbar
			value={percentage}
			text="Hoje"
			styles={buildStyles({
				textSize: "25px",
				trailColor: "#52b6ff",
				pathColor: "#FFFFFF",
				textColor: "#FFFFFF",
			})}
		/>
	);
}
