import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './componets/NotFound/NotFound';
import BookingList from './componets/Dashboard/BookingList/BookingList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>work in Home (Mamun vai)</h1>
        </Route>
        <Route path="/home">
          <h1>work in Home (Mamun vai)</h1>
        </Route>


        <Route path="/bookingList">
          <BookingList />
        </Route>
        <Route path="/addHouse">

        </Route>
        <Route path="/myRent">

        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
