import "./App.css";
import FirstBox from "./index_components/FirstBox";
import BlogTopics from "./index_components/BlogTopics";
import CpIndex from "./index_components/CpIndex";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
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
