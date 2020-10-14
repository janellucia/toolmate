import React from 'react';


import colour from '../images/concepts/one/colours.png';
import logo from '../images/concepts/one/logo.png';
import icons from '../images/concepts/one/icons.png';
import logoTile from '../images/concepts/one/logo-squares.png';
import bizCards from '../images/concepts/one/biz-cards.png';
import typeOne from '../images/concepts/one/type.png';
import typeTwo from '../images/concepts/one/type-two.png';
import site from '../images/concepts/one/site.png';


function ConceptOne() {
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

export default ConceptOne;