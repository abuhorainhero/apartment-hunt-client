import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './componets/Home/Home';
import Apartment from './componets/Apartment/Apartment';
import NotFound from './componets/NotFound/NotFound';
import BookingList from './componets/Dashboard/BookingList/BookingList';
import MyRent from './componets/Dashboard/MyRent/MyRent';
import AddHouse from './componets/Dashboard/AddHouse/AddHouse';
import Login from './componets/Login/Login';
import Ragister from './componets/Ragister/Ragister';


function App() {
  return (
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


        <Route path="/bookingList">
          <BookingList />
        </Route>

        <Route path="/addHouse">
          <AddHouse />
        </Route>

        <Route path="/myRent">
          <MyRent />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        
        <Route path="/ragister">
          <Ragister />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
