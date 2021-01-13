import React from "react";
import "./BlogTopics.css";
//
import CpTopics from "./CpTopics";
import DevTopics from "./DevTopics";
import EssayTopics from "./EssayTopics";
//

function BlogTopics() {
	return (
		<section className="blog_topics">
			<section className="flex-container">
				<CpTopics />
				<DevTopics />
				<EssayTopics />
			</section>
		</section>
	);
}

export default BlogTopics;
