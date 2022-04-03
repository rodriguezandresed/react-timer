import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const icon = <FontAwesomeIcon icon={faClock} />;

const Home = (props) => {
	return (
		<>
			<div className="container d-flex justify-content-center">
				<div className=" d-flex justify-content-center p-4 bg-dark text-light rounded w-100">
					<div className=" px-3 display-2">{icon}</div>
					<div className=" px-3 mx-3 display-2 border border-light rounded">
						{props.sextaPos % 10}
					</div>
					<div className=" px-3 mx-3 display-2 border border-light rounded">
						{props.quintaPos % 10}
					</div>
					<div className=" px-3 mx-3 display-2 border border-light rounded">
						{props.cuartaPos % 10}
					</div>
					<div className=" px-3 mx-3 display-2 border border-light rounded">
						{props.terceraPos % 10}
					</div>
					<div className=" px-3 mx-3 display-2 border border-light rounded">
						{props.segundaPos % 10}
					</div>
					<div className=" px-3 mx-3 display-2 border border-light rounded">
						{props.primeraPos % 10}
					</div>
				</div>
			</div>
		</>
	);
};

Home.propTypes = {
	props: PropTypes.number,
};

export default Home;
