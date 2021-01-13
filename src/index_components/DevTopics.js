import React from "react";
import "../index_components/BlogTopics.css";
import codingtips from "../assets/codingtips.jpeg";

function DevTopics() {
	return (
		<div className="container tips">
			<img
				className="image"
				src={codingtips}
				alt=""
				//
			/>
			<div className="words">
				<h2>
					Coding tips <span className="postnumbers"> 0 posts </span>
				</h2>

				<p>Tips, tutorials, and reflections on front end web development.</p>
			</div>
		</div>
	);
}

export default DevTopics;
