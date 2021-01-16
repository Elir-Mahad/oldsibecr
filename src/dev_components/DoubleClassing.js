import React from "react";
import "../AllBlogs.css";

function DoubleClassing() {
	return (
		<div className="blog">
			<div className="titletag">
				<h1 className="title">Double classing elements</h1>
				<h4 className="hashtag">2020/08/05</h4>
			</div>
			{/* <!-- collapsible starts --> */}
			<div className="content">
				<div className="blogbody">
					<h2 className="focus focusdifferent">Problem</h2>

					<p>
						In front-end web development, the process of writing html, usually
						includes adding classes to the html elements. If you give html
						elements a classname, then it will be easier to target them when
						your'e styling them (css) or manipulating the dom (js). In some of
						my earliest projects, i found myself in situations where i had to
						target specific html elements, while simultaneously targeting a set
						of html elements as a group.
					</p>

					<h2 className="focus">Solution</h2>

					<p>
						To simultaneously target a set of html elements as individuals and
						as a group, i decided to give each element that's part of the set,
						two classes. One class will be unqiue to the element, and the other
						class will be unique to the group. This made it easier for me target
						the same elements in different ways.
					</p>

					<h2 className="focus">Example</h2>

					<p>
						In this example, we will tag all the items in a list, with two
						classes. One class will be a general class. The second will be
						unqiue. Then we will use the general class to give a general style
						to all the items. Then we will use the unique class to style each
						item in a specific way.
					</p>

					{/* <img src="./assets/doubleclassing.png" alt=""> */}
				</div>
			</div>
			<div class="boite">
				<div class="cercle3"></div>
				<div class="cercle3"></div>
				<div class="cercle3"></div>
				<div class="cercle3"></div>
			</div>
		</div>
	);
}

export default DoubleClassing;
