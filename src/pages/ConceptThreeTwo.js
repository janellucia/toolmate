import React from 'react';

import visionThreeA from '../images/concepts/three-two/moodboard.png';
import colourThreeA from '../images/concepts/three-two/colours.png';
import typeOneThreeA from '../images/concepts/three-two/typography.png';
import typeTwoThreeA from '../images/concepts/three-two/typography-two.png';
import siteThreeA from '../images/concepts/three-two/site.png';
import logoThreeA from '../images/concepts/three-two/logo-squares.png';
import instaThreeA from '../images/concepts/three-two/insta-cards.png';
import imageryThreeA from '../images/concepts/three-two/insta-cards-two.png';
import storiesThreeA from '../images/concepts/three-two/stories.png';
import cardsThreeA from '../images/concepts/three-two/biz-cards.png';
import letterThreeA from '../images/concepts/three-two/letterhead.png';


function ConceptThreeTwo() {
  return (
    <div className="concept-three">
      <h3>Concept Three - B</h3>
      <p>For the third and final concept created, I went with a bright earthy colour palette that has a lot of natural contrasts. In this concept I played around with the use of shapes, contrast, and black & white vibe.</p>
      <p>For the logo I landed on using Meno Banner in bold (all lowercase). Meno Banner, Aktiv Grotesk and Titling Gothic are all available on Adobe Fonts.</p>
      <p>I also chose a premium font to replace Meno Banner in Concept Three - A</p>
      <img src={visionThreeA} alt="vision board" />
      <img src={colourThreeA} alt="colour" />
      <img src={typeOneThreeA} alt="brand typography" />
      <img src={typeTwoThreeA} alt="typography usage" />
      <img src={siteThreeA} alt="site/typography preview" />
      <img src={logoThreeA} alt="logo exploration" />
      <img src={instaThreeA} alt="insta cards with logo and events" />
      <img src={imageryThreeA} alt="insta imagery usage" />
      <img src={storiesThreeA} alt="insta imagery usage" />
      <img src={cardsThreeA} alt="business cards example" />
      <img src={letterThreeA} alt="site/typography preview" className="letterhead" />
    </div>
  );
}

export default ConceptThreeTwo;