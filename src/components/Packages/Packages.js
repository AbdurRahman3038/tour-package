import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Package from '../Package/Package';
import './Packages.css';

const Packages = () => {

    const [tourPackages, setTourPackages] = useState([]);

    useEffect(() => {
        fetch('https://shocking-citadel-21143.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setTourPackages(data));

    }, []);
   
    return (
        <div>
            <h1 className="text-center mt-4 top-title ">Book A Vacation Package!</h1>

            <CardGroup className="card-container">
                {

                    tourPackages.map(tourPackage => <Package key={tourPackage._id} tourPackage={tourPackage}></Package>)
                }
            </CardGroup>
        </div>
    );
};

export default Packages;