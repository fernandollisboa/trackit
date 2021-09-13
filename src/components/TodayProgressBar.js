import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function TodayProgressBar({ percentage }) {
	return (
		<CircularProgressbar
			value={percentage * 100}
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
