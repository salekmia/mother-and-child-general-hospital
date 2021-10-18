import React from 'react';

const Counter = () => {
    return (
        <div>
            <div className="row my-4">
                <div className="col-md-3 col-sm-6 text-center p-3">
                    <h1 style={{fontSize: '50px', color: '#6047EC', fontWeight: 'bold'}}>13</h1>
                    <p>Clinic nationwide</p>
                </div>
                <div className="col-md-3 col-sm-6 text-center p-3">
                    <h1 style={{fontSize: '50px', color: '#6047EC', fontWeight: 'bold'}}>140</h1>
                    <p>Recognition awards</p>
                </div>
                <div className="col-md-3 col-sm-6 text-center p-3">
                    <h1 style={{fontSize: '50px', color: '#6047EC', fontWeight: 'bold'}}>21</h1>
                    <p>Years of clinical excellence</p>
                </div>
                <div className="col-md-3 col-sm-6 text-center p-3">
                    <h1 style={{fontSize: '50px', color: '#6047EC', fontWeight: 'bold'}}>1400</h1>
                    <p>Clients a year trust us</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;