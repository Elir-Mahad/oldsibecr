import React from "react";
import MarginBlog from "./MarginBlog";
import "../AllBlogs.css";
import DeployHtmlSiteGit from "./DeployHtmlSiteGit";

function CpIndex() {
	return (
		<section class="blogs">
			<div class="wrapper">
				<MarginBlog />
				<DeployHtmlSiteGit />
			</div>
		</section>
	);
}

export default CpIndex;
