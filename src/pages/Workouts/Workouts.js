import React from 'react';
import work1 from '../../images/work1.jpg';
import work2 from '../../images/work2.jpg';
import work3 from '../../images/work3.jpg';
import work4 from '../../images/work4.jpg';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import './Workouts.css';
const Workouts = () => {
    return (
        <>
        <Header></Header>
        <div className="container my-5">
            <div className="row">
                
                <div className="col-lg-6 mb-lg-0 mb-4 d-flex flex-md-row flex-column align-items-md-center">
                    <div>
                        <img className="img-fluid work-img mb-md-0 mb-4 pe-md-4" src={work1} alt="" />
                    </div>
                    <div>
                        <p><small>Beginner Level</small></p>
                        <h4 style={{color: '#6047EC'}}>Basic Weights</h4>
                        <p className="lead">Basic Weights choro voluptatum est, an est tale debitis molestiae, nam ei quidam quaestio. Mea in inani cotidieque appellantur, no vix postea phaedrum.</p>
                    </div>
                </div>

                <div className="col-lg-6 mb-lg-0 mb-5 d-flex flex-md-row flex-column align-items-md-center">
                    <div>
                        <img className="img-fluid work-img mb-md-0 mb-4 pe-md-4" src={work2} alt="" />
                    </div>
                    <div>
                        <p><small>Beginner Level</small></p>
                        <h4 style={{color: '#6047EC'}}>Basic Weights</h4>
                        <p className="lead">Basic Weights choro voluptatum est, an est tale debitis molestiae, nam ei quidam quaestio. Mea in inani cotidieque appellantur, no vix postea phaedrum.</p>
                    </div>
                </div>

                <div className="col-lg-6 mb-lg-0 mb-5 d-flex flex-md-row flex-column align-items-md-center">
                    <div>
                        <img className="img-fluid work-img mb-md-0 mb-4 pe-md-4" src={work3} alt="" />
                    </div>
                    <div>
                        <p><small>Beginner Level</small></p>
                        <h4 style={{color: '#6047EC'}}>Basic Weights</h4>
                        <p className="lead">Basic Weights choro voluptatum est, an est tale debitis molestiae, nam ei quidam quaestio. Mea in inani cotidieque appellantur, no vix postea phaedrum.</p>
                    </div>
                </div>

                <div className="col-lg-6 mb-lg-0 mb-5 d-flex flex-md-row flex-column align-items-md-center">
                    <div>
                        <img className="img-fluid work-img mb-md-0 mb-4 pe-md-4" src={work4} alt="" />
                    </div>
                    <div>
                        <p><small>Beginner Level</small></p>
                        <h4 style={{color: '#6047EC'}}>Basic Weights</h4>
                        <p className="lead">Basic Weights choro voluptatum est, an est tale debitis molestiae, nam ei quidam quaestio. Mea in inani cotidieque appellantur, no vix postea phaedrum.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Workouts;