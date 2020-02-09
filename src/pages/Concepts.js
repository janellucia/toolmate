import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Values from './Values.js'
import ConceptOne from './ConceptOne.js'
import ConceptTwo from './ConceptTwo.js'
import ConceptThree from './ConceptThree.js'
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
              <Link to="/concepts/values" className="concept-links">Values</Link>
              <Link to="/concepts/concept-one" className="concept-links">Concept One</Link>
              <Link to="/concepts/concept-two" className="concept-links">Concept Two</Link>
              <Link to="/concepts/concept-three" className="concept-links">Concept Three</Link>
              <Link to="/concepts/final" className="concept-links">Final</Link>
            </div>
          </div>
        </header>
        <div className="wrapper">
          <div className="intro">
            <h1>Branding includes Brand Colours, Typography, Logo, Social Media Tiles & Biz Cards</h1>
            <h2>Logo will be sent in jpg, png and svg &mdash; type can be sourced on adobe fonts, Tiles/Colours/Biz Cards will be sent in .psd format so you can edit for socials.</h2>
            <div className="credits">
              <p>Atria Branding</p>
              <p>February 2020</p>
            </div>
          </div>
          <Switch>
            <Route path="/concepts/values" exact component={Values} />
            <Route path="/concepts/concept-one" component={ConceptOne} />
            <Route path="/concepts/concept-two" component={ConceptTwo} />
            <Route path="/concepts/concept-three" component={ConceptThree} />
            <Route path="/concepts/final" component={Final} />
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default Concepts;