import React from "react";


const Card = () => {
    return (
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://picsum.photos/500/325" className="card-img-top" alt="fotoprueba" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit Esse, autem dolorum modi deleniti placeat dignissimos, eveniet expedita.</p>
                    <a href="#" className="btn btn-primary mt-4">Find Out More!</a>
                </div>
            </div>
        
    );
}

export default Card;