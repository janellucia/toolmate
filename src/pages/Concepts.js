import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Values from './Values.js'
import Moodboard from './Moodboard.js'
import Logos from './Logo.js'
import Insta from './Insta.js'
import Misc from './Misc.js'
import Download from './Download.js'


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
              <Link to="/concepts/moodboard-colors-typography" className="concept-links">Moodboard</Link>
              <Link to="/concepts/logo" className="concept-links">Logo</Link>
              <Link to="/concepts/insta" className="concept-links">Insta</Link>
              <Link to="/concepts/misc" className="concept-links">Misc</Link>
              <Link to="/concepts/download" className="concept-links">Download</Link>
            </div>
          </div>
        </header>
        <div className="wrapper">
          <Switch>
            <Route path="/concepts/values" startsWith={true} component={Values} />
            <Route path="/concepts/moodboard-colors-typography" component={Moodboard} />
            <Route path="/concepts/logo" component={Logos} />
            <Route path="/concepts/insta" component={Insta} />
            <Route path="/concepts/misc" component={Misc} />
            <Route path="/concepts/download" component={Download} />
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default Concepts;