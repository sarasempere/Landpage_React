import React from "react";

import Mario from "/workspace/html-hello/react-hello/src/img/mario.jpg";
import Luigi from "/workspace/html-hello/react-hello/src/img/luigi.jpg";
import Wario from "/workspace/html-hello/react-hello/src/img/wario.jpg";

export class Card3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: [
				{ ss: Mario, txt: "Bacon ipsum dolor amet ea ut aliquip." },
				{
					ss: Luigi,
					txt:
						"Pork loin corned beef ham hock, pork chop ribeye doner biltong pork."
				},
				{
					ss: Wario,
					txt:
						"Prosciutto ground round chicken, corned beef ball tip ham pancetta jowl pork loin t-bone."
				}
			]
		};
	}

	render() {
		const items = this.state.menu.map(item => (
			<div className="col-sm-4" key={item.value}>
				<img
					src={item.ss}
					className="card-img-top"
					alt="Nintendo warrior"
				/>
				<div className="card-body">
					<p className="card-text">{item.txt}</p>
				</div>
			</div>
		));

		return <div className="row">{items}</div>;
	}
}
