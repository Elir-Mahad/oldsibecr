import React from "react";
import "../index_components/BlogTopics.css";
import codingtheory from "../assets/codingtheory.png";

function TheoryTopics() {
	return (
		<div className="container essay">
			<img
				className="image"
				src={codingtheory}
				alt=""
				//
			/>
			<div className="words">
				<h2>
					Essays <span className="postnumbers"> 0 posts </span>
				</h2>

				<p>
					Analysis on books that focus on a variety of tech topics (both
					technical and non-technical).
				</p>
			</div>
		</div>
	);
}

export default TheoryTopics;
