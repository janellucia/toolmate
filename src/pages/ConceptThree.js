import React from 'react';


import moodboard from '../images/concepts/three/moodboard.png';
import colour from '../images/concepts/three/colours.png';
import logo from '../images/concepts/three/logo.png';
import icons from '../images/concepts/three/icons.png';
import logoTile from '../images/concepts/three/logo-squares.png';
import bizCards from '../images/concepts/three/biz-cards.png';
import typeOne from '../images/concepts/three/type.png';
import typeTwo from '../images/concepts/three/type-two.png';
import site from '../images/concepts/three/site.png';


function ConceptThree() {
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

export default ConceptThree;