import React from 'react';
import slider1 from '../../../images/slider1.jpg';
import slider2 from '../../../images/slider2.jpg';
import slider3 from '../../../images/slider3.jpg';
import './Slider.css';
const Slider = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active slider-img">
                <img style={{height: '600px'}} src={slider1} className="d-block w-100 img-fluid" alt="..."/>
                </div>
                <div className="carousel-item">
                <img style={{height: '600px'}} src={slider2} className="d-block w-100 img-fluid" alt="..."/>
                </div>
                <div style={{height: '600px'}} className="carousel-item">
                <img src={slider3} className="d-block w-100 img-fluid" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    );
};

export default Slider;