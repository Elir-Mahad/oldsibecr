import React from "react";
import "./BlogTopics.css";
//
import CpTopics from "./CpTopics";
import DevTopics from "./DevTopics";
import TheoryTopics from "./TheoryTopics";
//
// import { Switch, Route } from "react-router-dom";

function BlogTopics() {
	return (
		<section className="blog_topics">
			<section className="flex-container">
				<CpTopics />
				<DevTopics />
				<TheoryTopics />
			</section>
		</section>
	);
}

// return (
// 	<Switch>
// 		<Route exact path="/" component={BlogTopics} />
// 		<Route path="/cp" component={CpTopics} />
// 		<Route path="/dev" component={DevTopics} />
// 		<Route path="/theory" component={TheoryTopics} />
// 		<Route component={NotFound} />
// 	</Switch>
// );

export default BlogTopics;
