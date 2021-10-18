import React from 'react';
import virtual from '../../../images/virtual.jpg';
import './Digital.css';
const Digital = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-5">
                    <img className="img-fluid" src={virtual} alt="" />
                </div>
                <div className="col-md-7 ps-md-4">
                    <small style={{color: '#6047EC'}}>DIGITAL HEALTH</small>
                    <h3>Virtual urgent care</h3>
                    <p className="lead">Get a diagnosis and treatment plan without leaving the comfort of home. By downloading the NYP Connect app, you can access world-class care from the teams at Columbia and Weill Cornell Medicine.</p>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6 text-center p-2">
                            <i style={{color: '#6047EC'}} class="far fa-clock fs-1"></i>
                            <h4>Convenient Hours</h4>
                            <p className="fs-6">Adults: 8am-midnight, Children: 8am-midnight</p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-6 text-center p-2">
                            <i style={{color: '#6047EC'}} class="fas fa-user-nurse fs-1"></i>
                            <h4>Expert Care</h4>
                            <p className="fs-6">Board-certified Emergency and Pediatric Medicine Physicians</p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-6 text-center p-2">
                            <i style={{color: '#6047EC'}} class="fas fa-shield-alt fs-1"></i>
                            <h4>Insurances Accepted</h4>
                            <p className="fs-6">Your visit may only be the price of a copay</p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-6 text-center p-2">
                            <i style={{color: '#6047EC'}} class="fas fa-pills fs-1"></i>
                            <h4>Prescriptions</h4>
                            <p className="fs-6">Sent right to your pharmacy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Digital;