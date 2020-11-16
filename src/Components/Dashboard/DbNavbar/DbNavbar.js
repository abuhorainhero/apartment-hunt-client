import React from 'react';
import logo from '../../../logos/Logo.png';

const DbNavbar = () => {
    return (
        <section className="row my-2">
            <div className="col-md-2 d-flex justify-content-center">
                <img className="img-fluid" style={{ height: "50px" }} src={logo} alt="" />
            </div>
            <div className="col-md-10 d-flex justify-content-between">
                <h3 className="ml-5">Booking List</h3>
                <h4 className="mr-5">{ } Abu Horain</h4>
            </div>
        </section>
    );
};

export default DbNavbar;