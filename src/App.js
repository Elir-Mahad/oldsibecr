import "./App.css";
import FirstBox from "./index_components/FirstBox";
import BlogTopics from "./index_components/BlogTopics";
import CpIndex from "./cp_components/CpIndex";
import DevIndex from "./dev_components/DevIndex";
import EssayIndex from "./essay_components/EssayIndex";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/essays">
						<EssayIndex />
					</Route>
					<Route path="/devtips">
						<DevIndex />
					</Route>
					<Route path="/cp">
						<CpIndex />
					</Route>
					<Route path="/">
						<FirstBox />
						<BlogTopics />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
