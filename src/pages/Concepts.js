import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Values from './Values.js'
import Final from './Final.js'
import FinalTwo from './FinalTwo.js'

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
              <Link to="/concepts/final" className="concept-links">Final</Link>
              <Link to="/concepts/final-two" className="concept-links">Final Two</Link>
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
            <Route path="/concepts/final" component={Final} />
            <Route path="/concepts/final-two" component={FinalTwo} />
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default Concepts;