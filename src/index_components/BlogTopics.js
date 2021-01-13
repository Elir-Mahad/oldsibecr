import React from "react";
import "./BlogTopics.css";
//
import CpTopics from "./CpTopics";
import DevTopics from "./DevTopics";
import TheoryTopics from "./TheoryTopics";
//

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

export default BlogTopics;
