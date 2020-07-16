import React from "react";

export class Jumbotron extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1 className="display-4">{`A warm Welcome`}</h1>
				<p className="lead">{`Bacon ipsum dolor amet tenderloin beef ribeye porchetta chuck sirloin boudin. Chuck flank t-bone, frankfurter brisket doner tenderloin prosciutto.`}</p>
				<hr className="my-4" />

				<a
					className="btn btn-primary btn-lg"
					href="#"
					role="button">{`Call to Action!`}</a>
			</div>
		);
	}
}
