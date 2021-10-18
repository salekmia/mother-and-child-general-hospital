import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    console.log(services)
    return (
        <div className="container my-5">
            <div className="services-heading ps-2 mb-4">
                <h2 className="pt-0 mt-0">Services</h2>
                <p className="pb-0 mb-0">Our common serivces</p>
                
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service service={service} key={service.id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;