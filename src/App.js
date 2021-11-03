import React from "react";
import './App.css';
import Div1 from './Div1.png';
import Div2 from './Div2.png';
import Division1 from './Division1.js'
import Division2 from './Division2.js'
import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <div className="App">
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
    </HashRouter>
  );
}

function division1() {
  return (
    <div className="App">
      <Division1></Division1>
    </div>
  );
}


function division2() {
  return (
    <div className="App">
      <Division2></Division2>
    </div>
  );
}
