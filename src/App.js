import React from "react";
import './App.css';
import Div1 from './Div1.png';
import Div2 from './Div2.png';
import Division1 from './Pages/Division1.js'
import Division2 from './Pages/Division2.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
            <Link to="/Division1">
           <img src={Div1} className="Icon" alt="Icon" />
            </Link>

          <Link to="/Division2">
           <img src={Div2} className="Icon" alt="Icon"/>
            </Link>

        <Switch>
          <Route path="/Division1" component={division1}></Route>
          <Route path="/Division2" component={division2}></Route>
        </Switch>
      </div>
    </Router>
  );
}

function division1() {
  return (
    <div>
      <Division1></Division1>
    </div>
  );
}


function division2() {
  return (
    <div>
      <Division2></Division2>
    </div>
  );
}
