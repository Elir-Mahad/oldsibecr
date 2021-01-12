import "./App.css";
import FirstBox from "./index_components/FirstBox";
import BlogTopics from "./index_components/BlogTopics";
//
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<FirstBox />
			<BlogTopics />
		</div>
	);
}

export default App;
