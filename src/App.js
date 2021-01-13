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
						{/* this is the essay index page, contains the header and essay blogs */}
						<FirstBox />
						<EssayIndex />
					</Route>
					<Route path="/devtips">
						{/* this is the devtips index page, contains the header and dev blogs */}
						<FirstBox />
						<DevIndex />
					</Route>
					<Route path="/cp">
						{/* this is the cp index page, contains the header and cp blogs */}
						<FirstBox />
						<CpIndex />
					</Route>
					<Route path="/">
						{/* this is the home page, contains the header and the blog topics */}
						<FirstBox />
						<BlogTopics />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
