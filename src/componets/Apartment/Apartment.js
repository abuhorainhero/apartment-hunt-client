import React, { useEffect, useState } from 'react';
import Navbar from './../Home/Navbar/Navbar';
import './Apartment.css';
import reqtangle from '../../images/Rectangle 396.png';
import { useForm } from 'react-hook-form';
import Rectangle407 from '../../images/Rectangle 407.png';
import Rectangle408 from '../../images/Rectangle 408.png';
import Rectangle409 from '../../images/Rectangle 409.png';
import Rectangle410 from '../../images/Rectangle 410.png';
import { Link, useHistory, useParams } from 'react-router-dom';

const Apartment = () => {
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const [apartment, setApartment] =useState([]);
    const history = useHistory();
    const onSubmit = (data) => {
      
       const {name, price, location} = apartment;
       const total = { name, price, location ,...data}
        console.log(total)
      fetch('http://localhost:5000/booking',{
          method:"POST",
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body:JSON.stringify(total)
      })
      .then(res => res.json())
      .then(datas => {
        datas === true ? alert('Booking Successfully'): alert('Booking Failed Try Again');
        history.push('/myRent')
      })


      };

        const {id} = useParams();
        useEffect(()=>{
            fetch(`http://localhost:5000/apartment/?id=${id}`)
            .then(res => res.json())
            .then(data => setApartment(data));
        },[])
    return (
        <div id="apartment">
            <Navbar></Navbar>
            <main>
                <div className="overlayapartment">
                    <h1>Apartment</h1>
                  
                </div>
            </main>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-8">
                        <img className="img-fluid" src={apartment.img} alt=""/>
                        <div className="row d-flex justify-content-between p-3">
                            <img style={{width: '150px'}} className="img-fluid" src={Rectangle407} alt=""/>
                            <img style={{width: '150px'}} className="img-fluid" src={Rectangle408} alt=""/>
                            <img style={{width: '150px'}} className="img-fluid" src={Rectangle409} alt=""/>
                            <img style={{width: '150px'}} className="img-fluid" src={Rectangle410} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-4">
                         <form className="form" onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder="Full Name" name="name" ref={register} required /> 
                            <input placeholder="Phone No." name="phon" ref={register} required />
                            {errors.lastname && 'Last name is required.'}
                            <input placeholder="Email Address" name="email" ref={register({ pattern: /\d+/ })} required/>
                            {errors.age && 'Please enter number for age.'}
                            <textarea rows="6" className="mb-4" ref={register} placeholder="Massege" name="message" required></textarea>
                         <input type="submit" value="Request Booking" />
                            </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 product-details">
                        <div className="d-flex justify-content-between">
    <h1 className="heading_">{apartment.name}</h1>
    <h1 className="heading_">${apartment.price}</h1>
                        </div>
                        <div>
                        <p>3000 sq-ft,  Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
                       
                        <h3  className="mb-3">Price Details-</h3>
                          
    <p className="lead">Rent/Month: ${apartment.price}</p>
                            <p className="lead">Service Charge: 8,000/=Tk per month, subject to change</p>
                            <p className="lead">Security Deposit: 3 month's rent</p>
                            <p className="lead">Flat Release Policy: 3 months earlier notice required</p>
                       
                        </div>
                        <div>

                            <h3 className="mb-3">Property Details-</h3>
                            <p className="lead">Address & Area: Rangs Malacha, House-68, Road-6a(Dead<br/>End Road), Dhanmondi Residential Area. FlaseDhanmondi Residential Area. FlaseDhanmondi Residential Area. FlaseDhanmondi Residential Area. FlaseDhanmondi Residential Area. Flase</p>
                            <p className="lead">Address & Area: Rangs Malacha, House-68, Road-6a(Dead<br/>End Road), Dhanmondi Residential Area. FlaseDhanmondi Residential Area. FlaseDhanmondi Residential Area. FlaseDhanmondi Residential Area. FlaseDhanmondi Residential Area. Flase</p>
                            <p className="lead">Address & Area: Rangs Malacha, House-68, Road-6a(Dead End Road), Dhanmondi Residential Area. FlaseDhanmondi Residential Area. FlaseDhanmondi Residential Area. FlaseDhanmondi Residential Area. FlaseDhanmondi Residential Area. Flase</p>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Apartment;