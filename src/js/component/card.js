import React from "react";
import Mario from "/workspace/html-hello/react-hello/src/img/mario.jpg";

export class MyCard extends React.Component {
	render() {
		return (
			<div className="card">
				<img src={Mario} className="card-img-top" alt="..." />
				<div className="card-body">
					<p className="card-text">
						{`Some quick example text to build on the card title and
						make up the bulk of the card's content.`}
					</p>
				</div>
			</div>
		);
	}
}
