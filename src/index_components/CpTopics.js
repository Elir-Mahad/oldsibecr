import React from "react";
import competitiveprogramming from "../assets/competitiveprogramming.jpg";
import "../index_components/BlogTopics.css";
import { Link } from "react-router-dom";

function CpTopics() {
	return (
		// <Router>
		// 	<Link to="../index_components/FirstBox.js">
		<div className="container algo">
			<Link to="/cp">
				<img
					className="image"
					src={competitiveprogramming}
					alt=""
					//
				/>
			</Link>
			<div className="words">
				<h2>
					Algo world <span className="postnumbers"> 0 posts </span>
				</h2>

				<p>Reflections and tutorials about competitive programming.</p>
			</div>
		</div>
		// 	</Link>
		// </Router>
	);
}

export default CpTopics;
