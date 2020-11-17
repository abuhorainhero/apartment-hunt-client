import React from 'react';
import './Services.css';
import apartment1 from '../../../logos/apartment 1.png';
import affordable1 from '../../../logos/affordable 1.png';
import lessee1 from '../../../logos/lessee 1.png';

const Services = () => {
    return (
        <section className="py-5" id="about">
               <div className="heading_part">
                <h5>House Rent</h5>
                <h2>We're an agency tailored to all <br/> client's needs that always delivers </h2>
            </div>
            <div className="container ">
                <div className="row py-5 my-5">
                    {/* First col md -4 */}
                    <div className="col-md-4">
                        <img className="img-fluid heading_image" src={apartment1} alt=""/>
                        <h3>Wide Range of Properties</h3>
                        <p>With a rabust selection of popular properties on hand. as well as leading properties from experts.</p>
                    </div>
                      {/* First col md -4 */}
                    {/* First col md -4 */}
                    <div className="col-md-4">
                        <img className="img-fluid heading_image" src={affordable1} alt=""/>
                        <h3>Wide Range of Properties</h3>
                        <p>With a rabust selection of popular properties on hand. as well as leading properties from experts.</p>
                    </div>
                      {/* First col md -4 */}
                    {/* First col md -4 */}
                    <div className="col-md-4">
                        <img className="img-fluid heading_image" src={lessee1} alt=""/>
                        <h3>Wide Range of Properties</h3>
                        <p>With a rabust selection of popular properties on hand. as well as leading properties from experts.</p>
                    </div>
                      {/* First col md -4 */}
                </div>
            </div>
        </section>
    );
};

export default Services;