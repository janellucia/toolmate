import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Values from './Values.js'
import ConceptOne from './ConceptOne.js'
import ConceptTwo from './ConceptTwo.js'
import ConceptThree from './ConceptThree.js'


function Concepts() {
  return (
    <Router>
      <main id="main" className="concepts-page">
        <div className="wrapper">
          <div className="intro">
            <h2>Intro</h2>
            <p>Hey Faith, here is some work I've done for Atria's branding. I took information from our meetings and  put together a few concepts for you to check out. All the deets below!</p>
            <h3>Branding</h3>
            <p>Take a look at the branding concepts, I built tiles based on the values we established at our initial meeting. If you need specific templates not seen in these concepts please let me know, the branding package includes 9-12 tiles on completion.</p>
            <p>Branding also includes establishing brand colours, typography, logo, and biz cards so you can represent yourself online in a way that represents Atria at it's best. Hope you Enjoy!</p>
            <p>All images used in these concepts were sourced from Pexels.com which is a free open source for stock images.</p>
            <h3>What's Next?</h3>
            <p>Take a look at the 3 concepts and decide which you like best, feel free to mix and match if you like aspects of multiple concepts, this is meant to be customized to what you like. </p>
            <p>Once we decided on branding direction I will polish off the chosen designs and package them up for your use. I've been using photoshop and I will most likely send all tile templates in photoshop so you can edit and use in the future.</p>
          </div>
          <div className="concept-link-wrap">
            <Link to="/concepts/values" className="concept-links">Values</Link>
            <Link to="/concepts/concept-one" className="concept-links">Concept One</Link>
            <Link to="/concepts/concept-two" className="concept-links">Concept Two</Link>
            <Link to="/concepts/concept-three" className="concept-links">Concept Three</Link>
          </div>
          <Switch>
            <Route path="/concepts/values" exact component={Values} />
            <Route path="/concepts/concept-one" component={ConceptOne} />
            <Route path="/concepts/concept-two" component={ConceptTwo} />
            <Route path="/concepts/concept-three" component={ConceptThree} />
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default Concepts;