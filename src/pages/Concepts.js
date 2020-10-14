import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Values from './Values.js'

import ConceptTwo from './ConceptTwo.js'
import ConceptThree from './ConceptThree.js'



import ConceptOne from './ConceptOne.js'




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
              <Link to="/concept-1" className="concept-links">Concept 1</Link>
              <Link to="/concept-2" className="concept-links">Concept 2</Link>
              <Link to="/concept-3" className="concept-links">Concept 3</Link>
            </div>
          </div>
        </header>
        <div className="wrapper">
          <Switch>
            <Route path="/values" startsWith={true} component={Values} />
            <Route path="/concept-1" component={ConceptOne} />
            <Route path="/concept-2" component={ConceptTwo} />
            <Route path="/concept-3" component={ConceptThree} />
          </Switch>
          <Redirect exact from="/" to="/values" />
        </div>
      </main>
    </Router>
  );
}

export default Concepts;