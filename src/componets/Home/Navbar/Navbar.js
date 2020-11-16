import React from 'react';
import logo from '../../../logos/Logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light light">
       <div className="container">
            <img className="logo" src={logo} alt="logo"/>
            
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class=" ml-auto navbar-nav">
                <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Service</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Concerns</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Event</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item">
                <button class="nav-link btn buttonLogin" ><a href="#">Login</a></button>
                </li>
                
            
            </ul>
            </div>
       </div>
      </nav>
    );
};

export default Navbar;