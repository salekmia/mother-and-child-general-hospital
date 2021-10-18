import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../../images/notfound.jpg';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import './NotFound.css';
const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-4">
                        <img  className="img-fluid" src={notfound} alt="" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                        <div>
                            <h1 style={{fontSize: '80px'}}>Oops!</h1>
                            <h5>You can't seem to find the page you're looking for.</h5>
                            <Link to="/home"><button className="btn btn-danger px-4">Go to home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;