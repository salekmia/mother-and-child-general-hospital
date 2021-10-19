import React from 'react';
import './Queries.css';
const Queries = () => {
    return (
        <div className="container my-5">
            <div className="queries">
                <h1>Write Your <span style={{color: '#6047EC'}}>Queries</span></h1>
                <p>If you have any question fill up the form</p>
                <div>
                    <div className="d-flex">
                        <input className="form-control my-3 me-2"  type="text" placeholder="Your name" />
                        <input className="form-control my-3 ms-2" type="email" placeholder="Your email" />
                    </div>
                    <div>
                        <input className="form-control my-3" type="text" placeholder="Subject" />
                    </div>
                    <div>
                        <textarea placeholder="Message" className="form-control my-3" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="d-grid w-50 me-auto ms-auto">
                        <button className="btn btn-danger rounded-pill">Submit</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Queries;