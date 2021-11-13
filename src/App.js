import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Authprovider from './Contexts/Authprovider/Authprovider';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import Privateroute from './Pages/Login/Privateroute/Privateroute';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Explore from './Pages/Explore/Explore';

function App() {
  return (
    <div className="App">
      <Authprovider>
        <Router>

          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/explore'>
              <Explore></Explore>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/registration'>
              <Registration></Registration>
            </Route>
            <Privateroute path='/purchase/:productId'>
              <Purchase></Purchase>
            </Privateroute>
            <Privateroute path='/dashboard'>
              <Dashboard></Dashboard>
            </Privateroute>
          </Switch>

        </Router>
      </Authprovider>
    </div>
  );
}

export default App;
