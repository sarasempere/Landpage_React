import React from "react";
import { MyCard } from "./card";
import { Jumbotron } from "./jumbotron";
//import { Card2 } from "./card2";
import { Card3 } from "./card3";

export function Container() {
	return (
		<div>
			<Jumbotron />

			<div className="container">
				<Card3 />
			</div>
		</div>
	);
}
