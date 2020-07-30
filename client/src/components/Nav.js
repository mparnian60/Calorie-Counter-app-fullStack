import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';

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
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/foodDiary">
            <FoodDiary />
          </Route>
          <Route path="/weightHistory">
            <WeightHistory />
          </Route>
          <Route path="/dietCalendar">
            <DietCalendar />
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

