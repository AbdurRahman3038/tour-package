import React from 'react';
import './AboutUs.css';
import img from '../../images/about-us.jpg'
import Button from '@restart/ui/esm/Button';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div >
                <img src={img} className="about-img" alt="" />
            </div>

            <div className="about-desc">

                <h1 className="top-title text-center mb-4">About Us</h1>
                <p className="details-us">
                    When you use OneTravel, you can search for travel accommodations by destination and flight, simplifying the search process and letting you quickly and easily find the best options for your trip. You can also search by travel theme, flight type and flight price.
                    <br /> <br />
                    OneTravel also lets you book hotels, rental cars and vacation packages. The company offers last-minute deals on hotels and discount codes to save money on flights and vacation packages. You earn reward points for each dollar spent on the site, and you earn double points when you book using the app.
                    <br /><br />
                    If you find a lower rate on OneTravel or another U.S.-based travel site within four hours of booking, OneTravel will credit or refund you the difference. After four hours (but no later than 24 hours), you get a $50 coupon for future bookings if you find a lower price. <br /> <br />

                </p>
                <Button className="about-us-btn">Read More</Button>

            </div>
        </div>
    );
};

export default AboutUs;