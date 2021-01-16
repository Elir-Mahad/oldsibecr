import React from "react";
import MarginBlog from "./MarginBlog";
import "../AllBlogs.css";
import DeployHtmlSiteGit from "./DeployHtmlSiteGit";
import DeployReactSiteGit from "./DeployReactSiteGit";

function CpIndex() {
	return (
		<section class="blogs">
			<div class="wrapper">
				<MarginBlog />
				<DeployHtmlSiteGit />
				<DeployReactSiteGit />
			</div>
		</section>
	);
}

export default CpIndex;
