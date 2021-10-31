import React from 'react';
import img from '../../images/not-found.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <h3 className="text-center text-danger mt-5">Opps Sorry!!! Try agian later!!!</h3>
            <p className="text-center text-danger">You may go wrong page!!!</p>
            <img src={img} className="not-found" alt="" />
        </div>
    );
};

export default NotFound;