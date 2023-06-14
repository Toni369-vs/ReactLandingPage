import React from "react";


const Jumbotron = () => {

    return (
        <div id="container-jumbotron" className="p-5 border rounded-3">
            <div>
                <h1 className="display-4">A warm welcome!</h1>
                <p className="lead">Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </p>
            </div>
        </div>

    )
}

export default Jumbotron;