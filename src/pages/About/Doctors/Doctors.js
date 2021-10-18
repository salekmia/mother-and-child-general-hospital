import React from 'react';
import doc1 from '../../../images/doc1.jpg';
import doc2 from '../../../images/doc2.jpg';
import doc3 from '../../../images/doc3.jpg';
import doc4 from '../../../images/doc4.jpg';
import './Doctors.css';
const Doctors = () => {
    return (
        <div className="container my-5">
            <div className="services-heading ps-2 mb-4">
                <h2 className="pt-0 mt-0">Doctors</h2>
                <p className="pb-0 mb-0">Meet our Dedicated Doctor’s Team</p>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 text-center">
                    <img className="img-fluid" src={doc1} alt="" />
                    <p><small>Neuro surgeon</small></p>
                    <h4>DR. BABATUNDE</h4>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <img className="img-fluid" src={doc2} alt="" />
                    <p><small>Dental Surgeon</small></p>
                    <h4>DR. ADDISION SMITH</h4>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <img className="img-fluid" src={doc3} alt="" />
                    <p><small>Cardiyio Surgeon</small></p>
                    <h4>DR. SARAH TYLOR</h4>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <img className="img-fluid" src={doc4} alt="" />
                    <p><small>Pediatrician  </small></p>
                    <h4>DR. JACKSON WILL</h4>
                </div>
            </div>
        </div>
    );
};

export default Doctors;