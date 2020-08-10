import React from 'react';

import logoFinal from '../images/concepts/final/logo-squares.png';
import instaFinal from '../images/concepts/final/insta-cards.png';
import imageryFinal from '../images/concepts/final/insta-cards-two.png';
import recipeFinal from '../images/concepts/final/recipe-squares.png';
import storiesFinal from '../images/concepts/final/stories.png';


function Download() {
  return (
    <div className="concept-two">
      <img src={logoFinal} alt="logo exploration" />
      <img src={instaFinal} alt="insta cards with logo and events" />
      <img src={imageryFinal} alt="insta imagery usage" />
      <img src={recipeFinal} alt="insta imagery usage" />
      <img src={storiesFinal} alt="insta imagery usage" />
    </div >
  );
}

export default Download;