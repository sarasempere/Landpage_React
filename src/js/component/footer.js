import React from "react";

export class Footer extends React.Component {
	render() {
		return (
			<footer className="page-footer font-small blue">
				<div className="footer-copyright text-center py-3">
					{"© 2020 Copyright"}:
					<a href="https://google.com/"> {"aningunsitio.com"}</a>
				</div>
			</footer>
		);
	}
}
