import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  Redirect
} from "react-router-dom";
import Home from './Home';
import { Login, fakeAuth } from "./Login";

//Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { red } from "@material-ui/core/colors";




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  loginBtn:{
  color: 'white',
  }
}));

const isLoggedIn = () =>{
  if(window.localStorage.getItem("token")) {
    return true
  } else{
    return false
  }
}

export function Nav() {

  const classes = useStyles();
  const [loggedIn, setLoggedIn] = useState(false);
  console.log('logedin', loggedIn);
  const [msg, setMsg] = useState("");

  const handleLogout = () =>{
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userId');
    setLoggedIn(false);

  }

  return (
    <Router>
      <div>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Link to="/">
                <Button color="inherit">Home</Button>
              </Link>
              <Link to="/foodDiary">
                <Button color="inherit">Food Diary</Button>
              </Link>
              <Link to="/weightHistory">
                <Button color="inherit">Weight History</Button>
              </Link>
              <Link to="/dietCalendar">
                <Button color="inherit">Diet Calendar</Button>
              </Link>
              {loggedIn && <Link to="/logout">
              <Button className={classes.loginBtn} color="inherit" onClick={handleLogout}>Logout</Button>
              </Link>}
              {!loggedIn && <Link to="/login">
              <Button className={classes.loginBtn} color="inherit">Login</Button>
              </Link>}
            </Toolbar>
          </AppBar>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/foodDiary">
          {loggedIn ? <FoodDiary /> : <Redirect to='login' />}
          </Route>
          <Route path="/weightHistory">
          {loggedIn ? <WeightHistory /> : <Redirect to='login' />}
          </Route>
          <Route path="/dietCalendar">
          {loggedIn ? <DietCalendar /> : <Redirect to='login' />}
          </Route>
          <Route path="/login">
            <Login loginStatus={setLoggedIn}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}



function FoodDiary() {
  return <h2>Food Diary</h2>;
}

function WeightHistory() {
  return <h2>Weight History</h2>;
}

function DietCalendar() {
  return <h2>Diet Calendar</h2>;
}




