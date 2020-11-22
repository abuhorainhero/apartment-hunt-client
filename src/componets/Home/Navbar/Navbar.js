import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../logos/Logo.png';
import './Navbar.css';
import { handleSignOut } from '../../Login/LoginManager';
const Navbar = () => {
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
        <nav className="navbar navbar-expand-lg navbar-light light">
       <div className="container">
            <img className="logo" src={logo} alt="logo"/>
            
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className=" ml-auto navbar-nav">
                <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#about">Service</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Concerns</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Event</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#footer">Contact</a>
                </li>
                <li className="nav-item">

                {loggedInUser.name || user.name  ? <button className="nav-link btn text-success font-weight-bold " style={{ width: '154px' }} onClick={signOut} > {loggedInUser.name} </button>
                    :
                    <Link to="/login">
                        <button className="nav-link btn font-weight-bold font-weight-bold  text-success" style={{ width: '134px' }} >login </button>
                    </Link>
                    }
                    </li>
                
            
            </ul>
            </div>
       </div>
      </nav>
    );
};

export default Navbar;