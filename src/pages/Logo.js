import React from 'react';

import logoConceptsFinal from '../images/concepts/final/logo.png';
import iconConceptsFinal from '../images/concepts/final/icons.png';
import logoFinal from '../images/concepts/final/logo-squares.png';



function Logo() {
  return (
    <div className="concept-two">
      <img src={logoConceptsFinal} alt="logo exploration" />
      <img src={iconConceptsFinal} alt="icon exploration" />
      <img src={logoFinal} alt="logo exploration" />
    </div >
  );
}

export default Logo;