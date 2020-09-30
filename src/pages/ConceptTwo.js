import React from 'react';


import moodboard from '../images/concepts/two/moodboard.png';
import colour from '../images/concepts/two/colours.png';
import logo from '../images/concepts/two/logo.png';
import icons from '../images/concepts/two/icons.png';
import logoTile from '../images/concepts/two/logo-squares.png';
import bizCards from '../images/concepts/two/biz-cards.png';
import typeOne from '../images/concepts/two/type.png';
import typeTwo from '../images/concepts/two/type-two.png';
import site from '../images/concepts/two/site.png';


function ConceptTwo() {
  return (
    <div className="concept-one">
      {/* <img src={moodboard} alt="moodboard" /> */}
      <img src={colour} alt="colour" />
      <img src={logo} alt="logo" />
      <img src={icons} alt="icons" />
      <img src={logoTile} alt="icons" />
      <img src={bizCards} alt="business cards" />
      <img src={typeOne} alt="brand typography" />
      <img src={typeTwo} alt="typography usage" />
      <img src={site} alt="site preview" />
    </div>
  );
}

export default ConceptTwo;