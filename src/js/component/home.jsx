import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx";
	

// ESTRUCTURA DEL HTML //

const Home = () => {
	return (
		<div>
			<div id="head">
				<nav className="navbar p-0">
					<Navbar />
				</nav>
			</div>

			<div id="container-body">
				<div className="jumbotron mb-4 mt-2">
					<Jumbotron />
				</div>

				<div id="D" className="row mb-3">
					<div className="col-3"><Card /></div>
					<div className="col-3"><Card /></div>
					<div className="col-3"><Card /></div>
					<div className="col-3"><Card /></div>
				</div>
			</div>

			<div id="footer">
				<Footer />
			</div>
		</div>
	);
};

//FIN ESTRUCTURA DEL HTML //

export default Home;


