import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Feature></Feature>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;