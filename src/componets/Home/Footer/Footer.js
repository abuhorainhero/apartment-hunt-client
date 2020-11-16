import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMapMarker,  } from '@fortawesome/free-solid-svg-icons'
import {  faFacebookSquare, faInstagramSquare, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="py-5 ">
            <div className="container">
                <div className="row">
               {/* Fist col md 3 */}
                    <div className="col-md-5 box d-flex mt-5">
                    <FontAwesomeIcon icon={faMapMarker}/>
                        <ul className="footer_ul">
                            <li>H#340(4th Floor).Road#24.</li>
                            <li>New DOHS, Mahakkhali, Dhaka, Bangladesh</li>
                            <li>Phon: 018XXXXXXXX</li>
                            <li>E-mail: info@company.com</li>
                        </ul>
                    </div>
            {/* Fist col md 3 */}
               {/* Fist col md 3 */}
                    <div className="col-md-2 box">
                        <ul className="footer_ul">
                            <li className="font-weight-bold">Company</li>
                            <li>About</li>
                            <li>Site Map</li>
                            <li>Support Center</li>
                            <li>Terms Condition</li>
                            <li>Submit Listing</li>
                        </ul>
                    </div>
            {/* Fist col md 3 */}
               {/* Fist col md 3 */}
                    <div className="col-md-2 box">
                        <ul className="footer_ul">
                            <li className="font-weight-bold">Quiks Links.</li>
                            <li>Quick Links</li>
                            <li>Rentals</li>
                            <li>Sales</li>
                            <li>Contact</li>
                            <li>Terms Conditions</li>
                            <li>Our blog</li>
                        </ul>
                    </div>
            {/* Fist col md 3 */}
               {/* Fist col md 3 */}
                    <div className="col-md-3 box">
                        <ul className="footer_ul">
                            <li className="font-weight-bold">About Us</li>
                            <li>we are the top real estote</li>
                            <li>agency in Sydney. with agents</li>
                            <li>available to answer any</li>
                            <li>question 24/7</li>
                            <ul  className="social_link d-flex  text-white">
                                <li><FontAwesomeIcon icon={faFacebookSquare} /></li>
                                <li><FontAwesomeIcon icon={faInstagramSquare} /></li>
                                <li><FontAwesomeIcon icon={faLinkedin} /></li>
                                <li><FontAwesomeIcon icon={faYoutube} /></li>
                            </ul>
                        </ul>
                    </div>
            {/* Fist col md 3 */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;