import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Values from './Values.js'
import Moodboard from './Moodboard.js'
import Logos from './Logo.js'
import Print from './Print.js'
import Flyer from './Flyer.js'
// import Download from './Download.js'


import logo from '../images/logo-long.png';


function Concepts() {
  return (
    <Router>
      <main id="main" className="concepts-page">
        <header>
          <div className="wrapper">
            <img src={logo} alt="" className="logo" />
            <div className="concept-link-wrap">
              <Link to="/values" className="concept-links">Values</Link>
              <Link to="/colours-typography" className="concept-links">Colour & Type</Link>
              <Link to="/logo" className="concept-links">Logo</Link>
              <Link to="/print" className="concept-links">Print</Link>
              <Link to="/flyer" className="concept-links">Flyer</Link>
              {/* <Link to="/download" className="concept-links">Download</Link> */}
            </div>
          </div>
        </header>
        <div className="wrapper">
          <Switch>
            <Route path="/values" startsWith={true} component={Values} />
            <Route path="/colours-typography" component={Moodboard} />
            <Route path="/logo" component={Logos} />
            <Route path="/print" component={Print} />
            <Route path="/flyer" component={Flyer} />
            {/* <Route path="/download" component={Download} /> */}
          </Switch>
          <Redirect exact from="/" to="/values" />
        </div>
      </main>
    </Router>
  );
}

export default Concepts;