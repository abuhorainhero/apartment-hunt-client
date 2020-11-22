import React, { useContext, useEffect, useState } from 'react';
import './Rent.css';
import ReactDOM from 'react-dom'
import house1 from '../../../images/Rectangle 394.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faMapMarked } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Rent = () => {
    const [apartment, setApartment] = useState([]);
    const [data, setData] = useState([]);
 
    useEffect(()=>{
        fetch('https://peaceful-dusk-81503.herokuapp.com/appoinments')
        .then(res => res.json())
        .then(data => setApartment(data))
    },[])
   
    const targetApartment = (e, id) =>{
       
     const num = id
     console.log(num)
    }

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
                        <div className="card">
                            <img className="img-fluid" src={apartm.img} alt="House"/>
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">{apartm.name}</h5>
        <div className="d-flex">  <FontAwesomeIcon className="mt-1" icon={faMapMarked} /><p className="card-text ml-2">{apartm.location}</p></div>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">  <FontAwesomeIcon className="mt-1" icon={faBed} /><p className="card-text ml-2">{apartm.bedroom}bedroom</p></div>
                                    <div className="d-flex ml-3">  <FontAwesomeIcon className="mt-1" icon={faBath} /><p className="card-text ml-2"> {apartm.bathroom}bathroom</p></div>
                                </div>
                                    <div className='d-flex justify-content-between card-foter'>
        <h2 className="font-weight-bold">${apartm.price}</h2>
                                        <Link to={"/apartment/"+apartm._id}><button onClick={(e) => targetApartment(e, `${apartm._id}`)} className="btn button">View Details</button></Link>
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