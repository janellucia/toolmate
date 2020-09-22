import React from 'react';


import moodboard from '../images/concepts/four/moodboard.png';
import colour from '../images/concepts/four/colours.png';
import logo from '../images/concepts/four/logo.png';
import icons from '../images/concepts/four/icons.png';
import logoTile from '../images/concepts/four/logo-squares.png';
import bizCards from '../images/concepts/four/biz-cards.png';
import typeOne from '../images/concepts/four/type.png';
import typeTwo from '../images/concepts/four/type-two.png';
import site from '../images/concepts/four/site.png';


function ConceptFour() {
  return (
    <div className="concept-one">
      <img src={moodboard} alt="moodboard" />
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

export default ConceptFour;