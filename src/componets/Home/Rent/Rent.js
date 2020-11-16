import React, { useEffect, useState } from 'react';
import './Rent.css';
import ReactDOM from 'react-dom'
import house1 from '../../../images/Rectangle 394.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faMapMarked } from '@fortawesome/free-solid-svg-icons'

const Rent = () => {
    const [apartment, setApartment] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/appoinments')
        .then(res => res.json())
        .then(data => setApartment(data))
    },[])
    console.log(apartment)

    return (
        <section className="py-4 rentContainer">
            <div className="heading_part">
                <h5>House Rent</h5>
                <h2>Discover the Latest Rent <br/> available today</h2>
            </div>
            <div className="container">
                <div className="row py-4">
                {/* One Box COl md 4  */}
               
                    {
                        apartment.map(apartm =>   
                           <div className="col-md-4 my-4">
                        <div class="card">
                            <img className="img-fluid" src={apartm.img} alt="House"/>
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">{apartm.name}</h5>
        <div className="d-flex">  <FontAwesomeIcon className="mt-1" icon={faMapMarked} /><p class="card-text ml-2">{apartm.location}</p></div>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">  <FontAwesomeIcon className="mt-1" icon={faBed} /><p class="card-text ml-2">{apartm.bedroom}bedroom</p></div>
                                    <div className="d-flex ml-3">  <FontAwesomeIcon className="mt-1" icon={faBath} /><p class="card-text ml-2"> {apartm.bathroom}bathroom</p></div>
                                </div>
                                    <div className='d-flex justify-content-between card-foter'>
        <h2 className="font-weight-bold">${apartm.price}</h2>
                                        <button className="btn button">View Details</button>
                                    </div>
                            </div>
                            </div>
                        </div>)
                    }

     {/* One Box COl md 4  */}
             
                </div>
            </div>
        </section>
    );
};

export default Rent;