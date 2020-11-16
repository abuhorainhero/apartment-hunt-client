import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../images/google.png'
import fbook from '../../images/fb.png'

const Register = () => {
    return (
        <>
            <div className="log">
                <Link to="/" className='text-white logo'><img className="logo" alt="" /></Link>
                <div className="login">
                    <h2>Create an account </h2> <br />
                    <form action="">
                        <input type="text" placeholder="Frist Name" className="input" /><br />
                        <input type="text" placeholder="Last Name" className="input" /><br />
                        <input type="email" name="" id="" placeholder="Email" className="input" /><br />
                        <input type="password" name="" id="" placeholder="Password" className="input" /><br />
                        <input type="password" name="" id="" placeholder="Confrim Password" className="input" /><br />
                        <div className="text-center m-auto">
                            <button type="submit" className="btn">Create an account</button><br /><br />
                            <p className="mt-5 m-auto">Already have an account?<Link rel="stylesheet" to="login">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div><br />
            <div className="text-center sign__with">
                --------OR-------- <br /> <br />
                <img className="google" src={fbook} alt="" />
                <button className="btn_g ">Continue with Facebook</button><br /><br />
                <img className="google" src={google} alt="" />
                <button className="btn_g ">Continue with google</button>
            </div>
        </>
    );
};

export default Register;