import React from "react";
import "./FirstBox.css";
import writing from "../assets/writing.png";

function FirstBox() {
	return (
		<div>
			<section className="firstbox">
				{/* This is the first box which contains the header and the top menu */}
				<div className="topnavcontainer">
					<div className="wrapper">
						<nav className="topnav">
							<img
								className=""
								src={writing}
								alt=""
								//
							/>

							<ul className="main-menu desk">
								<li>
									<a href="https://mahad.netlify.app/code.html">Code</a>
								</li>
								<li>
									<a href="https://mahad.netlify.app/art.html">Art</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<header className="head">
					<div className="wrapper">
						<div className="headertext">
							<h1>E'lir Mahad</h1>
							<h2>
								Reflections on
								<span className="topic">programming</span>,
								<span className="topic">competitive programming</span>,
								<span className="topic">tech theory</span>
							</h2>
						</div>
					</div>
				</header>
			</section>
		</div>
	);
}

export default FirstBox;
