import React from 'react';


import colour from '../images/concepts/final/colours.png';
import logo from '../images/concepts/final/logo.png';
import icons from '../images/concepts/final/icons.png';
import logoTile from '../images/concepts/final/logo-squares.png';
import bizCards from '../images/concepts/final/biz-cards.png';
import typeOne from '../images/concepts/final/type.png';
import typeTwo from '../images/concepts/final/type-two.png';
import site from '../images/concepts/final/site.png';


function Final() {
  return (
    <div className="concept-one">
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

export default Final;