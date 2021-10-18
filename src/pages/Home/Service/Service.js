import React from 'react';
import './Service.css';
const Service = ({service}) => {
    const {name, img, description} = service
    return (
        <div>
            <div class="col">
                <div class="card h-100">
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description.slice(0, 90)}</p>
                    <button className="btn btn-danger rounded-pill px-4">View details</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Service;