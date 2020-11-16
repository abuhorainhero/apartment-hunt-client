import React from 'react';
import Navbar from './../Home/Navbar/Navbar';
import './Apartment.css';
import reqtangle from '../../images/Rectangle 396.png';
import { useForm } from 'react-hook-form';
import Rectangle407 from '../../images/Rectangle 407.png';
import Rectangle408 from '../../images/Rectangle 408.png';
import Rectangle409 from '../../images/Rectangle 409.png';
import Rectangle410 from '../../images/Rectangle 410.png';

const Apartment = () => {
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const onSubmit = (data) => {
      console.log(data);  };
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
                        <img className="img-fluid" src={reqtangle} alt=""/>
                        <div className="row d-flex justify-content-between p-3">
                            <img style={{width: '150px'}} className="img-fluid" src={Rectangle407} alt=""/>
                            <img style={{width: '150px'}} className="img-fluid" src={Rectangle408} alt=""/>
                            <img style={{width: '150px'}} className="img-fluid" src={Rectangle409} alt=""/>
                            <img style={{width: '150px'}} className="img-fluid" src={Rectangle410} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-4">
                         <form className="form" onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder="Full Name" name="Full name" ref={register} /> {/* register an input */}
                            <input placeholder="Phone No." name="phon" ref={register({ required: true })} />
                            {errors.lastname && 'Last name is required.'}
                            <input placeholder="Email Address" name="email" ref={register({ pattern: /\d+/ })} />
                            {errors.age && 'Please enter number for age.'}
                            <textarea rows="6" className="mb-4" placeholder="Massege"></textarea>
                            <input type="submit" value="Request Booking" />
                            </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 product-details">
                        <div className="d-flex justify-content-between">
                            <h1 className="heading_">Family Apartment Three</h1>
                            <h1 className="heading_">$256</h1>
                        </div>
                        <div>
                        <p>3000 sq-ft, 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
                       
                        <h3  className="mb-3">Price Details-</h3>
                          
                            <p className="lead">Rent/Month: $550 (negotiable)</p>
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