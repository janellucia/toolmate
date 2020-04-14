import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Values from './Values.js'

import ConceptTwo from './ConceptTwo.js'
import ConceptRevised from './ConceptRevised.js'


import logo from '../images/logo.png';


function Concepts() {
  return (
    <Router>
      <main id="main" className="concepts-page">
        <header>
          <div className="wrapper">
            <img src={logo} alt="" className="logo" />
            <div className="concept-link-wrap">
              <Link to="/concepts/values" className="concept-links">Values</Link>
              <Link to="/concepts/concept-two" className="concept-links">Chosen Concept</Link>
              <Link to="/concepts/concept-revised" className="concept-links">Concept Revised</Link>
            </div>
          </div>
        </header>
        <div className="wrapper">
          <div className="intro">
            <h1>The Hunting & Feeding Behaviors <br></br>of European Gray Wolves</h1>
            <h2>The gray wolf is one of the world’s best known and well researched animals<br></br>with probably more books written about it than any other wildlife species</h2>
            <div className="credits">
              <p>Spirit Luxe Branding</p>
              <p>April 2020</p>
            </div>
          </div>
          <Switch>
            <Route path="/concepts/values" startsWith={true} component={Values} />
            <Route path="/concepts/concept-two" component={ConceptTwo} />
            <Route path="/concepts/concept-revised" component={ConceptRevised} />
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default Concepts;