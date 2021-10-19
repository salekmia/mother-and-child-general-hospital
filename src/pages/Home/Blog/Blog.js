import React from 'react';
import blog1 from '../../../images/blog1.jpeg';
import blog2 from '../../../images/blog2.jpeg';
import './Blog.css';
const Blog = () => {
    return (
        <div className="container my-5">
            <div className="services-heading ps-2 mb-4">
                <h2 className="pt-0 mt-0">Blog</h2>
                <p className="pb-0 mb-0">Our best blogs</p>
            </div>
            <div className="row">
                <div className="col-md-6  m-0 p-0 p-5">
                    <h3>Best Makeup For Late Night Date</h3>
                    <p><small>By James Colies |  February 18, 2016 |  Healthcare, Sport |  0 Comments</small></p>
                    <p className="lead">I do this thing a lot where I have a really yummy non-alcoholic drink and then have an inner monolog about how I can add booze to it. I kind of do this with everything.</p>
                    <p className="lead">With all of this triathlon training I’ve been trying to up my water intake because the heat kills. I naturally gravitate to water, I’m not really</p>
                    <button className="btn btn-danger rounded-pill px-4">Read more</button>
                </div>
                <div className="col-md-6 d-flex align-items-center  m-0 p-0">
                    <img style={{width: '100%', height: '100%'}} className="img-fluid" src={blog1} alt="" />
                </div>
                <div className="col-md-6  align-items-center  m-0 p-0">
                    <img style={{width: '100%', height: '100%'}} className="img-fluid" src={blog2} alt="" />
                </div>
                <div className="col-md-6 d-flex justify-items-center m-0 p-0 p-5">
                    <div>
                    <h3>What Causes Them & How Do We Treat Them?</h3>
                    <p><small>By James Colies |  February 18, 2016 |  Makeup |  0 Comments</small></p>
                    <p>With all of this triathlon training I’ve been trying to up my water intake because the heat kills. I naturally gravitate to water, I’m not really</p>
                    <p>I do this thing a lot where I have a really yummy non-alcoholic drink and then have an inner monolog about how I can add booze to it. I kind of do this with everything.</p>
                    <button className="btn btn-danger rounded-pill px-4">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;