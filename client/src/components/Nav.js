import React from "react";
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
import {Login, fakeAuth} from "./Login";

export function Nav() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/foodDiary">Food Diary</Link>
            </li>
            <li>
              <Link to="/weightHistory">Weight History</Link>
            </li>
            <li>
              <Link to="/dietCalendar">Diet Calendar</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <PrivateRoute path="/foodDiary">
            <FoodDiary />
          </PrivateRoute>
          <PrivateRoute path="/weightHistory">
            <WeightHistory />
          </PrivateRoute>
          <PrivateRoute path="/dietCalendar">
            <DietCalendar />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
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

  
