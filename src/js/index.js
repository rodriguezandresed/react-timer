import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";

import Home from "./component/home.jsx";

let counter = 0;
setInterval(() => {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;
	ReactDOM.render(
		<Home
			primeraPos={one}
			segundaPos={two}
			terceraPos={three}
			cuartaPos={four}
			quintaPos={five}
			sextaPos={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
