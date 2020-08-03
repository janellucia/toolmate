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
      <h3>Second Draft</h3>
      <p>After hearing your feedback and getting more inspo from you I came up with this concept. You mentioned you like the gradients and you have always used iridescent in your inspiration, so I played mostly into that. I wanted to play with different angles of what a shiny iridescent texture can look like. You liked the layout so no major changes to that.</p>
      <p>You were concerned that your logo would look like text and not like an actual logo and I put in the comparison for you to see that there were significant changes to the lettering, spacing and weights in order to make it unique to you. I also wanted to make sure your logo is easily recognizable to users, when they see your logo, they instantly know it's you. You also wanted some more detail in your icon, so after reviewing your values and listening to the inspo you’ve sent me over the last few days I wanted to incorporate a crystal, a crystal that represents growth, personal style and overall healing which is the message we are trying to send your audience. </p>
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