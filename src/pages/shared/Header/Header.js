import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
const Header = () => {
    const {user, logOut} = useAuth()
    console.log(user)
    return (
        <div className="header-bg py-3">
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
                    <div className="d-flex flex-column flex-md-row  align-items-center">
                        <p className="m-0 p-0 me-3">Mobile: <b>01859650251</b></p>
                        <p className="m-0 p-0">Email: <b>bhairabbari330@gmail.com</b></p>
                    </div>
                    <div>
                        {user?.email ? <button onClick={logOut} className="btn btn-danger mx-2 px-4 rounded-pill">Log out</button> :
                        <Link to="/login"><button className="btn btn-outline-danger text-white px-4 me-2 rounded-pill">Login</button></Link>}
                        {!user?.email && <Link to="/signup"><button className="btn btn-danger rounded-pill px-4">Register</button></Link>}
                        <span><b>{user?.displayName}</b></span>
                    </div>
                </div>
                <hr className="m-0 p-0" />

                {/* navbar */}
                <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand text-white"><h4><b>MACGH</b><small className="fs-6 fw-lighter d-none d-md-block">-Mother and Child Genarel Hospital</small></h4></Link>
                    <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"><i className="fas fa-bars"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 main-nav">
                        <li className="nav-item">
                        <Link className="text-white" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="text-white" to="/specialist">Female specialist</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="text-white" to="/pediatrician">Pediatrician</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="text-white" to="/children">Healthy children</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        
                    </form>
                    </div>
                </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;