import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className="header-bg py-3">
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center m-0 p-0">
                    <div className="d-flex flex-column flex-md-row  align-items-center">
                        <p className="m-0 p-0 me-3">Mobile: <b>01859650251</b></p>
                        <p className="m-0 p-0">Email: <b>bhairabbari330@gmail.com</b></p>
                    </div>
                    <ul className="social-container d-flex align-items-center">
                        <li><a target="_blank" href="https://www.facebook.com/salekalways" rel="noreferrer"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a target="_blank" href="https://www.twitter.com/salekalways" rel="noreferrer"><i class="fab fa-twitter"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/salekalways" rel="noreferrer"><i class="fab fa-instagram"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/salekalways/" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
                <hr />

                <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <Link to="/" className="navbar-brand text-white">MACGH</Link>
                    <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon text-white"><i class="fas fa-bars"></i></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 main-nav">
                        <li class="nav-item">
                        <Link className="text-white" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link className="text-white" to="/specialist">Female specialist</Link>
                        </li>
                        <li class="nav-item">
                        <Link className="text-white" to="/pediatrician">Pediatrician</Link>
                        </li>
                        <li class="nav-item">
                        <Link className="text-white" to="/children">Healthy children</Link>
                        </li>
                    </ul>
                    <form class="d-flex">
                        
                    </form>
                    </div>
                </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;