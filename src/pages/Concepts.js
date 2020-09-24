import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Values from './Values.js'
import ConceptOne from './ConceptOne.js'
import ConceptTwo from './ConceptTwo.js'
import ConceptThree from './ConceptThree.js'
import ConceptFour from './ConceptFour.js'




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
              <Link to="/concept-one" className="concept-links">Concept 1</Link>
              <Link to="/concept-two" className="concept-links">Concept 2</Link>
              <Link to="/concept-three" className="concept-links">Concept 3</Link>
              <Link to="/version-2" className="concept-links">Version 2</Link>
            </div>
          </div>
        </header>
        <div className="wrapper">
          <Switch>
            <Route path="/values" startsWith={true} component={Values} />
            <Route path="/concept-one" component={ConceptOne} />
            <Route path="/concept-two" component={ConceptTwo} />
            <Route path="/concept-three" component={ConceptThree} />
            <Route path="/version-2" component={ConceptFour} />
          </Switch>
          <Redirect exact from="/" to="/values" />
        </div>
      </main>
    </Router>
  );
}

export default Concepts;