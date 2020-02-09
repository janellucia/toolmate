import React from 'react';

import visionThird from '../images/concepts/three/mood-board.png';
import colourThird from '../images/concepts/three/colours.png';
import typeOneThird from '../images/concepts/three/typography.png';
import typeTwoThird from '../images/concepts/three/typography-two.png';
import logoThird from '../images/concepts/three/logo-squares.png';
import instaThird from '../images/concepts/three/insta-cards.png';
import imageryThird from '../images/concepts/three/imagery.png';
import cardsThird from '../images/concepts/three/biz-cards.png';


function ConceptThree() {
  return (
    <div className="concept-three">
      <h3>Concept Three</h3>
      <p>For the third and final concept created, I went with a earthy colour palette that has a lot of natural contrasts, this one is definitely the most attractive concept. In this concept I played around with the use of light, shadows, and rainbow overlays to represent the growth and expansion one goes through on the path to healing.</p>
      <p>For the logo I landed on using Orphues font in regular italic (all uppercase) and once I saw that option I couldn't go with another, it feels so satisfying with the customized spacing and the subtle flick of the R. This concept has three fonts to be use dand have outlined where to use which font and when.</p>
      <img src={visionThird} alt="vision board" />
      <img src={colourThird} alt="colour" />
      <img src={typeOneThird} alt="brand typography" />
      <img src={typeTwoThird} alt="typography usage" />
      <img src={logoThird} alt="logo exploration" />
      <img src={instaThird} alt="insta cards with logo and events" />
      <img src={imageryThird} alt="insta imagery usage" />
      <img src={cardsThird} alt="business cards example" />
    </div>
  );
}

export default ConceptThree;