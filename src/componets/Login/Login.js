import React, { useContext, useState } from 'react';
import google from '../../images/google.png'
import fbook from '../../images/fb.png'
import './Login.scss'
import { UserContext } from '../../App';
import { handleGoogleSignIn, initializeLoginFramework, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useContext(UserContext);
    initializeLoginFramework();
    const [pass, setPass] = useState();
    const [confPass, setConfPass] = useState();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }
    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }
    const facebookSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true)
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
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            if (!isFieldValid) {
                // alert("Please enter correct email address!!!!");
            }
        }
        if (e.target.name === 'password') {
            setPass(e.target.value);
            const isPasswordValid = e.target.value.length > 6;
            isFieldValid = isPasswordValid;
            if (newUser) {
                if (!isPasswordValid) {
                    // alert("Please enter minimum 6 character !!");
                }
            }

        }
        if (newUser) {
            if (e.target.name === 'confirmPassword') {
                setConfPass(e.target.value);
            }
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {

        let pass_valid = false;
        if (newUser) {
            if (pass === confPass) {
                pass_valid = true;
            }
        } else {
            pass_valid = true;
        }

        if (pass_valid) {
            if (newUser && user.email && user.password) {
                createUserWithEmailAndPassword(user.name, user.email, user.password)
                    .then(res => {
                        handleResponse(res, true)

                    })
            }
            if (!newUser && user.email && user.password) {
                signInWithEmailAndPassword(user.email, user.password)
                    .then(res => {
                        handleResponse(res, true)
                    })
            }
            e.preventDefault();
        } else {
            // alert("Please password not match");
            e.preventDefault();
        }


    }


    return (
        <section className="log my-5">
            <div className='center-alignment login'>

                {newUser ? <label style={{ fontSize: '30px' }}>Create an account</label> : <label style={{ fontSize: '30px' }}>Login</label>}
                <form onSubmit={handleSubmit}>
                    {newUser && <input name="name" className="input-field input" type="text" onBlur={handleBlur} placeholder="Frist Name" />}
                    <br />
                    {newUser && <input name="name" className="input-field input" type="text" onBlur={handleBlur} placeholder="Last name" />}
                    <br />
                    <input type="text" name="email" className="input-field input" onBlur={handleBlur} placeholder="Your Email address" required />
                    <br />
                    <input type="password" name="password" className="input-field input" onBlur={handleBlur} placeholder="Your Password" required />
                    <br />
                    {newUser && <input name="confirmPassword" type="password" className="input-field input" onBlur={handleBlur} placeholder="confirm Your Password" required />}
                    <br />
                    <input className="signUp-btn btn" type="submit" value={newUser ? 'Create an account' : 'Login'} />
                </form><br />
                <p>{newUser ? 'Already have an account ?' : 'Dont have an account?'} <span style={{ cursor: 'pointer', color: '#275a53' }} onClick={() => setNewUser(!newUser)}>{newUser ? 'LOGIN' : 'Create an account'}</span> </p>
            </div>

            <div className="d-flex flex-column align-items-center sign__with">
                <button className="social-signIn btn_g  d-flex align-items-center mt-3" onClick={facebookSignIn}> <img src={fbook} style={{ width: '37px', height: '37px', margin: '10px', background: '#F1F6F4' }} alt="" /> <p style={{ marginLeft: '100px', marginTop: 10 }}>sign in with Facebook</p> </button>

                <button className="social-signIn btn_g  d-flex align-items-center mt-2" onClick={googleSignIn}> <img  src={google} style={{ width: '37px', height: '37px', margin: '10px' }} alt="" /> <p  style={{ marginLeft: '100px', marginTop: 10 }}>sign in with Google</p> </button>
            </div>

            <p style={{ color: 'red', textAlign: 'center' }}>{user.error}</p>

            {user.success && <p style={{ color: 'green', textAlign: 'center' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
        </section>
    );
};

export default Login;