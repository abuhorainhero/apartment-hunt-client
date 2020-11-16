import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss'
import google from '../../images/google.png'
import fbook from '../../images/fb.png'
import { Row } from 'react-bootstrap';

const Login = () => {

    return (
        <>            
            <div className="log">
                <Link to="/" className='text-white logo'><img className="logo" alt="" /></Link>
                <div className="login">
                    <h2>Login </h2> <br />
                    <form action="">
                        <input type="email" name="" id="" placeholder="UserName or Email" className="input" /><br /><br/>
                        <input type="password" name="" id="" placeholder="Password" className="input" /><br/><br/>
                        <Row className="text-center m-auto">
                            <div  className="col-md-6">
                            <input type="checkbox" name="Remember me" id="Remember me" /> 
                            <label for="Remember me">Remember me </label>  
                            </div>
                            <Link to="./" className="col-md-6">Forget password</Link><br/> <br/>
                            <button type="submit" className="btn">Login</button><br/><br/><br/>
                            <p className="mt-5 m-auto">Don't have an account?<Link rel="stylesheet" to="register">Create an account</Link></p>
                        </Row>
                    </form>
                </div>
            </div><br/>
            <div className="text-center sign__with">
               --------OR-------- <br/> <br/>
                <img className="google" src={fbook} alt="" />
                <button className="btn_g ">Continue with Facebook</button><br/><br/>
                <img className="google" src={google} alt="" />
                <button className="btn_g ">Continue with google</button>        
            </div>
        </>
    );
};

export default Login;