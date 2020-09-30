import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Values from './Values.js'
import ConceptOne from './ConceptOne.js'
import ConceptTwo from './ConceptTwo.js'
import ConceptThree from './ConceptThree.js'
import VersionTwo from './VersionTwo.js'




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
              <Link to="/orpheus" className="concept-links">V2 Orpheus</Link>
              <Link to="/kepler" className="concept-links">V2 Kepler</Link>
            </div>
          </div>
        </header>
        <div className="wrapper">
          <Switch>
            <Route path="/values" startsWith={true} component={Values} />
            <Route path="/version-2" component={VersionTwo} />
            <Route path="/orpheus" component={ConceptOne} />
            <Route path="/kepler" component={ConceptTwo} />
          </Switch>
          <Redirect exact from="/" to="/values" />
        </div>
      </main>
    </Router>
  );
}

export default Concepts;