import React from "react";
//
import problemsolvingimage from "../assets/problemsolvingimage.png";
import frequencycounterimage from "../assets/frequencypatternimage.png";
import multiplepointersimage from "../assets/multiplepointersimage.png";
//
import { Link } from "react-router-dom";
//
function CpBlogsSum() {
	return (
		<div className="synopsis">
			<div className="synopsisbox">
				<Link
					style={{ textDecoration: "none" }}
					//
					to="problemsolving"
				>
					<h2> The process for solving coding problems</h2>
					<img
						//
						className="blogimage"
						src={problemsolvingimage}
						alt=""
					/>
					<p>
						There is a thick line between regular programming, and competitive
						programming. In regular programming, you learn how write code, and
						then you build things. During this process ...
					</p>
				</Link>
			</div>
			<div className="synopsisbox">
				<Link
					style={{ textDecoration: "none" }}
					//
					to="frequencycounter1"
				>
					<h2>The Frequency counter pattern - part 1</h2>
					<img
						//
						className="blogimage"
						src={frequencycounterimage}
						alt=""
					/>
					<p>
						{" "}
						The frequency counter pattern is one of the many patterns, that
						competitive progammers use to solve coding problems. This pattern
						uses ...
					</p>
				</Link>
			</div>
			<div className="synopsisbox">
				<Link
					style={{ textDecoration: "none" }}
					//
					to="frequencycounter2"
				>
					<h2>The Frequency counter pattern - part 2</h2>
					<img
						//
						className="blogimage"
						src={frequencycounterimage}
						alt=""
					/>
					<p>
						{" "}
						In part 2, we will enhance our understanding of the frequency
						counter pattern by solving the 'anagram problem'. An anagram is a
						word, phrase, or name ...
					</p>
				</Link>
			</div>

			<div className="synopsisbox">
				<Link
					style={{ textDecoration: "none" }}
					//
					to="multiplepointers1"
				>
					<h2>The multiple pointers pattern - part 1</h2>
					<img
						//
						className="blogimage"
						src={multiplepointersimage}
						alt=""
					/>
					<p>
						{" "}
						The new pattern that we are going to examine today is called
						multiple pointers. Creating pointers or values that correspond to an
						index or osition and move towards the beginning...
					</p>
				</Link>
			</div>
		</div>
	);
}

export default CpBlogsSum;
