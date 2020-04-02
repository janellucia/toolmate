import React from 'react';

import visionThree from '../images/concepts/three/moodboard.png';
import colourThree from '../images/concepts/three/colours.png';
import typeOneThree from '../images/concepts/three/typography.png';
import typeTwoThree from '../images/concepts/three/typography-two.png';
import siteThree from '../images/concepts/three/site.png';
import logoThree from '../images/concepts/three/logo-squares.png';
import instaThree from '../images/concepts/three/insta-cards.png';
import imageryThree from '../images/concepts/three/insta-cards-two.png';
import storiesThree from '../images/concepts/three/stories.png';
import cardsThree from '../images/concepts/three/biz-cards.png';
import letterThree from '../images/concepts/three/letterhead.png';


function ConceptThree() {
  return (
    <div className="concept-three">
      <h3>Concept Three - A</h3>
      <p>For the third and final concept created, I went with a bright earthy colour palette that has a lot of natural contrasts. In this concept I played around with the use of shapes, contrast, and black & white vibe.</p>
      <p>For the logo I landed on using Silk Serif in bold (all lowercase) and once I saw that option I couldn't go with another, it feels so satisfying with the customized spacing.</p>
      <p>Aktiv Grotesk and Titling Gothic are both available on Adobe Fonts and Silk Serif is a premium font, to go with this font we would need to download the 'semi bold' and 'medium italic' weights, take a look <a href="https://www.myfonts.com/fonts/silktype/silk-serif/" target="new">here</a></p>
      <p>I also chose a free Adobe font to replace Silk in Concept Three - B</p>
      <img src={visionThree} alt="vision board" />
      <img src={colourThree} alt="colour" />
      <img src={typeOneThree} alt="brand typography" />
      <img src={typeTwoThree} alt="typography usage" />
      <img src={siteThree} alt="site/typography preview" />
      <img src={logoThree} alt="logo exploration" />
      <img src={instaThree} alt="insta cards with logo and events" />
      <img src={imageryThree} alt="insta imagery usage" />
      <img src={storiesThree} alt="insta imagery usage" />
      <img src={cardsThree} alt="business cards example" />
      <img src={letterThree} alt="site/typography preview" className="letterhead" />
    </div>
  );
}

export default ConceptThree;