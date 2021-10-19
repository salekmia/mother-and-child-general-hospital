import React from 'react';
import './Pricing.css';
const Pricing = () => {
    return (
        <div className="container my-5">
            <div className="services-heading ps-2 mb-4">
                <h2 className="pt-0 mt-0">Our pricing plans</h2>
                <p className="pb-0 mb-0">You can choose any package</p>
            </div>
            <div className="row">
                
                <div className="col-md-4 p-4">
                    <div className="d-flex justify-conter-center">
                        <h1 className="me-2" style={{fontSize: '50px'}}>$16</h1>
                        <div>
                            <h6>Basic package</h6>
                            <h2>Services included</h2>
                        </div>
                    </div>
                    <hr />
                    <p className="my-3 fw-lighter">Dental care</p>
                    <p className="my-3 fw-lighter">Primary care visits</p>
                    <p className="my-3 fw-lighter">Specialist office visit</p>
                    <p className="my-3 fw-lighter">Preventive care</p>
                    <p className="my-3 fw-lighter">Vision care</p>
                    <button style={{color: '#6047EC'}} className="btn fw-bold fs-6 p-0 m-0">PURCHASE NOW <i class="fas fa-plus-square"></i></button>
                </div>
                
                <div className="col-md-4 p-4">
                    <div className="d-flex justify-conter-center">
                        <h1 className="me-2" style={{fontSize: '50px'}}>$32</h1>
                        <div>
                            <h6>Advanced package</h6>
                            <h2>Services included</h2>
                        </div>
                    </div>
                    <hr />
                    <p className="my-3 fw-lighter">Prenatal care</p>
                    <p className="my-3 fw-lighter">Primary care visits</p>
                    <p className="my-3 fw-lighter">Emergency room visits</p>
                    <p className="my-3 fw-lighter">Preventive care</p>
                    <p className="my-3 fw-lighter">Hospital services</p>
                    <button style={{color: '#6047EC'}} className="btn fw-bold fs-6 p-0 m-0">PURCHASE NOW <i class="fas fa-plus-square"></i></button>
                </div>
                
                <div className="col-md-4 p-4">
                    <div className="d-flex justify-conter-center">
                        <h1 className="me-2" style={{fontSize: '50px'}}>$64</h1>
                        <div>
                            <h6>Premium package</h6>
                            <h2>Services included</h2>
                        </div>
                    </div>
                    <hr />
                    <p className="my-3 fw-lighter">Urgent care</p>
                    <p className="my-3 fw-lighter">Delivery services</p>
                    <p className="my-3 fw-lighter">Rehabilitation services</p>
                    <p className="my-3 fw-lighter">Preventive care</p>
                    <p className="my-3 fw-lighter">Surgeon fees</p>
                    <button style={{color: '#6047EC'}} className="btn fw-bold fs-6 p-0 m-0">PURCHASE NOW <i class="fas fa-plus-square"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;