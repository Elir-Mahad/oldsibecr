import React from "react";
import "../AllBlogs.css";
import cssmargin from "../assets/cssmargin.png";
import doubleclasses from "../assets/doubleclasses.jpg";
import reactgit from "../assets/reactgit.jpeg";
import githtml from "../assets/githtml.png";

function DevIndex() {
	return (
		<div className="synopsis">
			<div class="container">
				<h2> Deploy basic html/css sites via github pages</h2>
				<img
					//
					className="blogimage"
					src={githtml}
					alt=""
				/>
				<p>
					While i was working on a few projects, i occasionally used github
					pages to deploy my sites. I repeteadly found myself on stackoverflow
					trying to remember the process for deploying sites on github....
				</p>
			</div>
			<div class="container">
				<h2>Deploy a react app via Github pages</h2>
				<img
					//
					className="blogimage"
					src={reactgit}
					alt=""
				/>
				<p>
					{" "}
					While i was working on a few different react projects, i occasionally
					used github pages to deploy my react sites. The process of using
					github pages to deploy react sites, is different from the process...
				</p>
			</div>
			<div class="container">
				<h2>Debugging css: margin/padding issues</h2>
				<img
					//
					className="blogimage"
					src={cssmargin}
					alt=""
				/>
				<p>
					{" "}
					When coding, i found myself spending a lot of time trying to properly
					align different sections and divs. I would be right in the middle of a
					task, and suddenly the astounding lack of symmetry....
				</p>
			</div>
			<div class="container">
				<h2>Double classing elements</h2>
				<img
					//
					className="blogimage"
					src={doubleclasses}
					alt=""
				/>
				<p>
					{" "}
					In front-end web development, the process of writing html, usually
					includes adding classes to the html elements. If you give html
					elements a classname, then it will....
				</p>
			</div>
		</div>
	);
}

export default DevIndex;
