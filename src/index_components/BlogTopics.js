import React from "react";
import "./BlogTopics.css";
//
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//
import codingtheory from "../assets/codingtheory.png";
import codingtips from "../assets/codingtips.jpeg";
import competitiveprogramming from "../assets/competitiveprogramming.jpg";

function BlogTopics() {
	return (
		<section className="blog_topics">
			<section className="flex-container">
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

						<p>
							Tips, tutorials, and reflections on front end web development.
						</p>
					</div>
				</div>

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
			</section>
		</section>
	);
}

export default BlogTopics;
