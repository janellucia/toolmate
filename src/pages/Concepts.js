import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Values from './Values.js'
import Moodboard from './Moodboard.js'
import Logos from './Logo.js'
import Misc from './Misc.js'
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
              <Link to="/colours-typography" className="concept-links">Colour & Typography</Link>
              <Link to="/logo" className="concept-links">Logo</Link>
              <Link to="/misc" className="concept-links">Misc</Link>
              {/* <Link to="/download" className="concept-links">Download</Link> */}
            </div>
          </div>
        </header>
        <div className="wrapper">
          <Switch>
            <Route path="/values" startsWith={true} component={Values} />
            <Route path="/colours-typography" component={Moodboard} />
            <Route path="/logo" component={Logos} />
            <Route path="/misc" component={Misc} />
            {/* <Route path="/download" component={Download} /> */}
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default Concepts;