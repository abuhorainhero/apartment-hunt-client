import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './componets/NotFound/NotFound';

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


        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
