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
import Login from './componets/Login/Login';
import Register from './componets/Register/Register';
import { createContext, useState } from 'react';
import PrivateRoute from './componets/PrivateRoute/PrivateRoute';

export const MyContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <MyContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route path="/apartment">
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
          <Login />
        </Route>
        
        <Route path="/register">
          <Register />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
    </MyContext.Provider>
  );
}

export default App;
