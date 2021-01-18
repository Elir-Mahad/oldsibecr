import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//
import FirstBox from "./index_components/FirstBox";
import BlogTopics from "./index_components/BlogTopics";
//
import DevBlogsSum from "./dev_components/DevBlogsSum.js";
import EssayBlogsSum from "./essay_components/EssayBlogsSum";
import CpBlogsSum from "./cp_components/CpBlogsSum";
//
import DeployHtmlSiteGit from "./dev_components/DeployHtmlSiteGit";
import DeployReactSiteGit from "./dev_components/DeployReactSiteGit";
import MarginBlog from "./dev_components/MarginBlog";
import DoubleClassing from "./dev_components/DoubleClassing";
//
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					{/* below are the third level pages */}
					<Route path="/htmlgit">
						<FirstBox />
						<DeployHtmlSiteGit />
					</Route>
					<Route path="/reactgit">
						<FirstBox />
						<DeployReactSiteGit />
					</Route>
					<Route path="/margin">
						<FirstBox />
						<MarginBlog />
					</Route>
					<Route path="/doubleclass">
						<FirstBox />
						<DoubleClassing />
					</Route>

					{/* New Layer above */}

					{/*  */}
					<Route path="/essaysummaries">
						{/* this is the essay index page, contains the header and essay blogs */}
						<FirstBox />
						<EssayBlogsSum />
					</Route>
					<Route path="/devsummaries">
						{/* this is the devtips index page, contains the header and dev blogs */}
						<FirstBox />
						<DevBlogsSum />
					</Route>
					<Route path="/cpsummaries">
						{/* this is the cp index page, contains the header and cp blogs */}
						<FirstBox />
						<CpBlogsSum />
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
