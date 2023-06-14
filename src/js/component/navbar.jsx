import React from "react";


const Navbar = () => {
    return (
        <div id="navbar-container" className="container-fluid bg-secondary">
            <nav className="navbar navbar-expand-md p-3 bg-body-tertiary">
                <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="menuNavegacion" className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active text-white" href="#">Home</a>
                        <a className="nav-item nav-link" href="#">About</a>
                        <a className="nav-item nav-link" href="#">Services</a>
                        <a className="nav-item nav-link" href="#">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar


