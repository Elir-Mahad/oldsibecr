import React from "react";
import "../AllBlogs.css";
import borders1 from "../assets/borders1.jpeg";
import borders2 from "../assets/borders2.png";

function MarginBlog() {
	return (
		<div class="blog">
			<div class="titletag">
				<h1 class="title">Debugging css: margin/padding issues</h1>
				<h4 class="hashtag">#Html, #Css</h4>
			</div>
			{/* collapsible starts */}
			<div class="content">
				<div class="blogbody">
					<h2 class="focus focusdifferent">Problem</h2>

					<p>
						When coding, i found myself spending a lot of time trying to
						properly align different sections and divs. I would be right in the
						middle of a task, and suddenly the astounding lack of symmetry in a
						particular div would present itself to me.
					</p>

					<h2 class="focus">Solution</h2>

					<p>
						I gave all my sections and divs different colours; and I gave
						everything a 2px solid black border. With this tactic, I was always
						aware of my margins and paddings, and therefore a margin or padding
						mishap could never creep up on me. This tactic is especially useful
						when using flexbox, because it makes you aware of how all the
						different elements on the page align.
					</p>

					<img
						className=""
						src={borders1}
						alt=""
						//
					/>

					<img
						className=""
						src={borders2}
						alt=""
						//
					/>

					<h2 class="focus">Key idea</h2>

					<p>
						Placing background colours and borders on all divs and sections, can
						guard us against the surprise attacks of margins and paddings.
					</p>
				</div>
			</div>
		</div>
	);
}

export default MarginBlog;
