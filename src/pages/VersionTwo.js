import React from 'react';


import colour from '../images/concepts/v2/colours.png';
import logo from '../images/concepts/v2/logo.png';
import icons from '../images/concepts/v2/icons.png';
import logoTile from '../images/concepts/v2/logo-squares.png';
import bizCards from '../images/concepts/v2/biz-cards.png';
import typeOne from '../images/concepts/v2/type.png';
import site from '../images/concepts/v2/site.png';


function VersionTwo() {
  return (
    <div className="concept-one">
      <img src={colour} alt="colour" />
      <img src={logo} alt="logo" />
      <img src={icons} alt="icons" />
      <img src={logoTile} alt="icons" />
      <img src={bizCards} alt="business cards" />
      <img src={typeOne} alt="brand typography" />
      <img src={site} alt="site preview" />
    </div>
  );
}

export default VersionTwo;