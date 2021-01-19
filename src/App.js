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
import ProblemSolving from "./cp_components/ProblemSolving";
import FrequencyCounterPart1 from "./cp_components/FrequencyCounterPart1";
import FrequencyCounterPart2 from "./cp_components/FrequencyCounterPart2";
import MultiplePointersPart1 from "./cp_components/MultiplePointersPart1";
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

					{/* below paths for the cp summaries */}
					<Route path="/problemsolving">
						<FirstBox />
						<ProblemSolving />
					</Route>
					<Route path="/frequencycounter1">
						<FirstBox />
						<FrequencyCounterPart1 />
					</Route>
					<Route path="/frequencycounter2">
						<FirstBox />
						<FrequencyCounterPart2 />
					</Route>
					<Route path="/multiplepointers1">
						<FirstBox />
						<MultiplePointersPart1 />
					</Route>

					{/* below paths for dev summaries  */}
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
