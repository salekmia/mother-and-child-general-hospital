import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import './Details.css';
const Details = () => {
    const [service, setService] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/salekmia/facedata/main/services.json')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    const newData = service.filter(data => data.id === id)
    // const {name, description, img, img1, img2} = newData[0]
    console.log(newData[0])


    return (
        <div>
            <Header></Header>
            {
                <div className="container">
                    <div className="services-heading ps-2 my-4">
                        <h2 className="pt-0 mt-0">Service details</h2>
                    </div>
                    <div className="row my-5 gx-5">
                        <div className="col-md-6">
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src={newData[0]?.img} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src={newData[0]?.img1} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src={newData[0]?.img2} class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div>
                                <small>Service: {newData[0]?.id}</small>
                                <h3><b>Name:</b> {newData[0]?.name}</h3>
                                <p><b>Description:</b> {newData[0]?.description}</p>
                                <button className="btn btn-danger px-4 rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button"><i class="fas fa-video"></i> SEE DOCTOR NOW</button>

                                 {/* Modal */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Booking Success</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        Thank you very much. Our exper doctors will contact you very soon.
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default Details;