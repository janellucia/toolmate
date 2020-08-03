import React from 'react';

import visionFinal from '../images/concepts/final/moodboard.png';
import colourFinal from '../images/concepts/final/colours.png';
import typeOneFinal from '../images/concepts/final/typography.png';
import typeTwoFinal from '../images/concepts/final/typography-two.png';
import siteFinal from '../images/concepts/final/site.png';
import logoConceptsFinal from '../images/concepts/final/logo.png';
import iconConceptsFinal from '../images/concepts/final/icons.png';
import logoFinal from '../images/concepts/final/logo-squares.png';
import instaFinal from '../images/concepts/final/insta-cards.png';
import imageryFinal from '../images/concepts/final/insta-cards-two.png';
import storiesFinal from '../images/concepts/final/stories.png';
import cardsFinal from '../images/concepts/final/biz-cards.png';
import letterFinal from '../images/concepts/final/letterhead.png';


function ConceptTwo() {
  return (
    <div className="concept-two">
      <h3>Final Draft</h3>
      <img src={visionFinal} alt="vision board" />
      <img src={colourFinal} alt="colour" />
      <img src={typeOneFinal} alt="brand typography" />
      <img src={typeTwoFinal} alt="typography usage" />
      <img src={siteFinal} alt="site/typography preview" />
      <img src={logoConceptsFinal} alt="logo exploration" />
      <img src={iconConceptsFinal} alt="icon exploration" />
      <img src={logoFinal} alt="logo exploration" />
      <img src={instaFinal} alt="insta cards with logo and events" />
      <img src={imageryFinal} alt="insta imagery usage" />
      <img src={storiesFinal} alt="insta imagery usage" />
      <img src={cardsFinal} alt="business cards example" />
      <img src={letterFinal} alt="site/typography preview" className="letterhead" />
    </div >
  );
}

export default ConceptTwo;