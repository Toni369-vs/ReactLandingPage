import React from "react";


const Navbar = () => {
    return (
        <div id="navbar-container" className="container-fluid bg-secondary">
            <nav className="navbar navbar-expand-md p-3 bg-body-tertiary">
                <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
            <div id="menuNavegacion" className="d-flex justify-content end">
                <div className="navbar navbar-expand-md">
                    <a className="nav-item nav-link active text-white m-2" href="#">Home</a>
                    <a className="nav-item nav-link m-2" href="#">About</a>
                    <a className="nav-item nav-link m-2" href="#">Services</a>
                    <a className="nav-item nav-link m-2" href="#">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar


