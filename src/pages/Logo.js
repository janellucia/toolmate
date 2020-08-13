import React from 'react';

import logo from '../images/concepts/final/logo.png';
import logoAccent from '../images/concepts/final/logo-accent.png';
import icons from '../images/concepts/final/icons.png';


function Logos() {
  return (
    <div className="concept-one">
      <img src={logo} alt="logo exploration" />
      <img src={logoAccent} alt="logo accent" />
      <img src={icons} alt="icon exploration" />
    </div>
  );
}

export default Logos;