import React from 'react';
import depart1 from '../../images/depart1.jpg';
import depart2 from '../../images/depart2.jpg';
import depart3 from '../../images/depart3.jpg';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
const Departments = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                
                <div className="services-heading ps-2 my-5">
                    <h2 className="pt-0 mt-0">Hepatology Clinic</h2>
                </div>
                <div className="row my-4">
                    <div className="col-md-7">
                        <img className="img-fluid rounded" src={depart1} alt="" />
                    </div>
                    <div className="col-md-5 d-flex align-items-center">
                        <div>
                            <h4>Head of department</h4>
                            <h5>Hepatologist: <b>Dr. John Gonzales</b></h5>
                            <h6><b>Event hours:</b></h6>
                            <table class="table">
                            <tbody>
                                <tr>
                                <td>Twe</td>
                                <td>08:00 - 13:30 p.m.</td>
                                </tr>
                                <tr>
                                <td>Wed</td>
                                <td>11:00 - 16:30 p.m.</td>
                                </tr>
                                <tr>
                                <td>Fri</td>
                                <td>08:00 - 12:30 p.m.</td>
                                </tr>
                            </tbody>
                            </table>
                            <p>Quisque pellentesque nibh ut sem elementum pulvinar. Integer bibendum, ligula a dapibus bibendum, massa lectus condimentum augue, sit amet rhoncus nibh arcu ut urna. Nam imperdiet id lectus sed vestibulum.</p>
                        </div>
                    </div>
                </div>
                <br /><br />

                <div className="services-heading ps-2 my-5">
                    <h2 className="pt-0 mt-0">Cardiac Clinic</h2>
                </div>
                <div className="row my-4">
                    <div className="col-md-5 d-flex align-items-center">
                        <div>
                            <h4><b>Head of department</b></h4>
                            <h5>Cardiologist: <b>Dr. Luke Slater</b></h5>
                            <h6>Event hours:</h6>
                            <table class="table">
                            <tbody>
                                <tr>
                                <td>Mon</td>
                                <td>07:00 - 11:30 a.m.</td>
                                </tr>
                                <tr>
                                <td>Tue</td>
                                <td>12:30 p.m. - 16:30 p.m.</td>
                                </tr>
                                <tr>
                                <td>Thu</td>
                                <td>07:00 - 11:30 a.m.</td>
                                </tr>
                                <tr>
                                <td>Fri</td>
                                <td>08:30 - 12:30 p.m.</td>
                                </tr>
                            </tbody>
                            </table>
                            <p>Cardiac Clinic pellentesque nibh ut sem elementum pulvinar. Integer bibendum, ligula a dapibus bibendum, massa lectus condimentum augue, sit amet rhoncus nibh arcu ut urna. Nam imperdiet id lectus sed vestibulum.</p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <img className="img-fluid rounded" src={depart2} alt="" />
                    </div>
                </div>
                
                <br /> <br />

                <div className="services-heading ps-2 my-5">
                    <h2 className="pt-0 mt-0">Orthopaedic Clinic</h2>
                </div>
                <div className="row my-4">
                    <div className="col-md-7">
                        <img className="img-fluid rounded" src={depart3} alt="" />
                    </div>
                    <div className="col-md-5 d-flex align-items-center">
                        <div>
                            <h4>Head of department</h4>
                            <h5>Orthopaedic: <b>Dr. John Banks</b></h5>
                            <h6><b>Event hours:</b></h6>
                            <table class="table">
                            <tbody>
                                <tr>
                                <td>Mon</td>
                                <td>07:00 - 11:00 a.m.</td>
                                </tr>
                                <tr>
                                <td>Tue</td>
                                <td>08:00 - 11:30 a.m.</td>
                                </tr>
                                <tr>
                                <td>Fri</td>
                                <td>07:00 - 11:00 a.m.</td>
                                </tr>
                                <tr>
                                <td>Sat</td>
                                <td>09:00 - 12:00 a.m.</td>
                                </tr>
                            </tbody>
                            </table>
                            <p>Orthopaedic Clinic pellentesque nibh ut sem elementum pulvinar. Integer bibendum, ligula a dapibus bibendum, massa lectus condimentum augue, sit amet rhoncus nibh arcu ut urna.</p>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Departments;