import React from "react";
import competitiveprogramming from "../assets/competitiveprogramming.jpg";
import "../index_components/BlogTopics.css";

function CpTopics() {
	return (
		<div className="container algo">
			<img
				className="image"
				src={competitiveprogramming}
				alt=""
				//
			/>
			<div className="words">
				<h2>
					Algo world <span className="postnumbers"> 0 posts </span>
				</h2>

				<p>Reflections and tutorials about competitive programming.</p>
			</div>
		</div>
	);
}

export default CpTopics;
