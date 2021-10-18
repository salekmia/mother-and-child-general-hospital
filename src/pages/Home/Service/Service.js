import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = ({service}) => {
    const {name, img, description, id} = service

    return (
        <div>
            <div className="col">
                <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description.slice(0, 90)}</p>
                    <Link to={`/details/${id}`}><button className="btn btn-danger rounded-pill px-4">View details</button></Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Service;