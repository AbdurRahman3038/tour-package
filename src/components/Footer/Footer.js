import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">

            {/* contact us part  */}

            <div className="contact-us">
                <h3>Contact Us</h3>
                <p>Address: 77, seventh avenue, <br />
                    <span className="footer-style">Brat road USA, 233555</span> </p>
                <p>Phone: +00 221 555 66 66 <br />
                    <span className="footer-style">+00 221 554 66 77</span></p>
                <p>Email: company@domain.com <br />
                    <span className="footer-style">support@company.info</span></p>
            </div>

            {/* connct us part  */}

            <div className="connect-us">
                <h3>Connect Us</h3>
                <Link to="https://www.youtube.com/"><i className="fab fa-facebook-square"></i></Link>
                <Link to="https://www.facebook.com/"><i className="fab fa-twitter-square"></i></Link>
                <Link to="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></Link>

            </div>

            {/* subscribe us part  */}

            <div className="subscribe">
                <h3>Subscribe</h3>
                <p>Subscribe to get our daily update</p>
                <input className="subscribe-input" type="text" placeholder="Type You Email" />
                <Button className="subscribe-btn">Subscribe</Button>
            </div>
        </div>
    );
};

export default Footer;