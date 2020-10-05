import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Values from './Values.js'
import VersionTwo from './VersionTwo.js'
import VersionThree from './VersionThree.js'
import Final from './Final.js'




import logo from '../images/logo.png';


function Concepts() {
  return (
    <Router>
      <main id="main" className="concepts-page">
        <header>
          <div className="wrapper">
            <img src={logo} alt="" className="logo" />
            <div className="concept-link-wrap">
              <Link to="/values" className="concept-links">Values</Link>
              <Link to="/version-2" className="concept-links">Version 2</Link>
              <Link to="/version-3" className="concept-links">Version 3</Link>
              <Link to="/final" className="concept-links">Final</Link>
            </div>
          </div>
        </header>
        <div className="wrapper">
          <Switch>
            <Route path="/values" startsWith={true} component={Values} />
            <Route path="/version-2" component={VersionTwo} />
            <Route path="/version-3" component={VersionThree} />
            <Route path="/final" component={Final} />
          </Switch>
          <Redirect exact from="/" to="/values" />
        </div>
      </main>
    </Router>
  );
}

export default Concepts;