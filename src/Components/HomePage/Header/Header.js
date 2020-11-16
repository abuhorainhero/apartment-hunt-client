import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../logos/Logo.png'
import { handleSignOut } from '../../login/LoginManager';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res)
        setLoggedInUser(res);
        history.replace(from);
        if (redirect) {
            history.push('/')

        }
    }
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <img src={logo} style={{ width: '100px' }} alt="" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <p className="nav-link" >Home <span className="sr-only">(current)</span></p>
                        </li>
                        <li  className="nav-item">
                            <p className="nav-link" >About </p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Service</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Concerns</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Event</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Contact</p>
                        </li>
                        <li className="nav-item">

                            {loggedInUser.name || user.name  ? <button className="nav-link btn btn-transparent text-white" style={{ width: '134px' }} onClick={signOut} > {loggedInUser.name} </button>
                                :
                                <Link to="/login">
                                    <button className="nav-link btn btn-transparent text-white" style={{ width: '134px' }} >login </button>
                                </Link>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;