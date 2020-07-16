import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar.js";
import { Container } from "./container.js";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Container />
			<Footer />
		</div>
	);
}
