import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<div id="head" className="container-fluid">
				<div className="navbar">
					<navbar />
				</div>
			</div>

			<div id="container-body" className="container">
				<div className="jumbotron">
					<jumbotron />
				</div>

				<div id="card-body" className="row">
					<div className="col"><Card /></div>
					<div className="col"><Card /></div>
					<div className="col"><Card /></div>
					<div className="col"><Card /></div>
				</div>


			</div>

			<div id="footer" className="container-fluid">

			</div>

		</div>
	)
};

export default Home;

