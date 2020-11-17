import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './componets/Home/Home';
import Apartment from './componets/Apartment/Apartment';
import NotFound from './componets/NotFound/NotFound';
import BookingList from './componets/Dashboard/BookingList/BookingList';
import MyRent from './componets/Dashboard/MyRent/MyRent';
import AddHouse from './componets/Dashboard/AddHouse/AddHouse';

import Register from './componets/Register/Register';
import { createContext, useEffect, useState } from 'react';
import PrivateRoute from './componets/PrivateRoute/PrivateRoute';
import Login from './componets/Login/Login';
import { initializeLoginFramework, userLogin } from './componets/Login/LoginManager';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });
  initializeLoginFramework();
  useEffect(() => {
    const LogIn = userLogin(function (cv) {
     

      const signedInUser = {
        isSignedIn: true,
        name: cv.displayName,
        email: cv.email,
        photo: cv.photoURL,
        success: true

      };
      setLoggedInUser(signedInUser);
    });

  }, [])
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, user, setUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route path="/apartment/:id">
            <Apartment></Apartment>
        </Route>


        <PrivateRoute path="/bookingList">
          <BookingList />
        </PrivateRoute>

        <PrivateRoute path="/addHouse">
          <AddHouse />
        </PrivateRoute>
        <PrivateRoute path="/myRent">
          <MyRent />
        </PrivateRoute>

        <Route path="/login">
          <Login></Login>
        </Route>
        
        <Route path="/register">
          <Register />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
