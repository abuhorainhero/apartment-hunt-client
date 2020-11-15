import React from 'react';
import { NavLink } from 'react-router-dom';
import bookLogo from '../../../logos/apartment 1.png';
import plusLogo from '../../../logos/plus 1.png';
import rentLogo from '../../../logos/Group 33351.png';

const DbSidebar = () => {
    return (
        <div className="mt-5">
            <NavLink activeStyle={{ color: 'green', fontWeight: 'bold' }} style={{ textDecoration: 'none', color: 'black' }} to="/bookingList">
                <div className='d-flex mt-3 ml-5'>
                    <img className='img-fluid mr-2' style={{ height: '20px' }} src={bookLogo} alt="" />
                    <p>Booking List</p>
                </div>
            </NavLink>
            <NavLink activeStyle={{ color: 'green', fontWeight: 'bold' }} style={{ textDecoration: 'none', color: 'black' }} to="/addHouse">
                <div className='d-flex mt-3 ml-5'>
                    <img className='img-fluid mr-2' style={{ height: '20px' }} src={plusLogo} alt="" />
                    <p>Add House</p>
                </div>
            </NavLink>
            <NavLink activeStyle={{ color: 'green', fontWeight: 'bold' }} style={{ textDecoration: 'none', color: 'black' }} to="/myRent">
                <div className='d-flex mt-3 ml-5'>
                    <img className='img-fluid mr-2' style={{ height: '20px' }} src={rentLogo} alt="" />
                    <p>My Rent</p>
                </div>
            </NavLink>
        </div>
    );
};

export default DbSidebar;