import logo from './logo.svg';
import './App.scss';
import HomeDetails from './components/HomeDetails/HomeDetails';
import Login from './components/Login/Login';
import AddHouseRent from './components/Dashboard/AddHouseRent/AddHouseRent'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import MyRent from './components/Dashboard/MyRent/MyRent';
import BookingList from './components/Dashboard/BookingList/BookingList';


function App() {
  return (
    <Router>
      
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomeDetails></HomeDetails>
          </Route>
          <Route path="/homedetails">
            <HomeDetails></HomeDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard/bookinglist">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/dashboard/bookinglist">
            <BookingList></BookingList>
          </Route>
          <Route path="/dashboard/myrent">
            <MyRent></MyRent>
          </Route>
          <Route path="/dashboard/addhouserent">
            <AddHouseRent></AddHouseRent>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
