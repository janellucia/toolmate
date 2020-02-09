import React from 'react';

import vision from '../images/concepts/one/moodboard.png';
import colour from '../images/concepts/one/colours.png';
import typeOne from '../images/concepts/one/typography.png';
import typeTwo from '../images/concepts/one/typography-two.png';
import logo from '../images/concepts/one/logo-squares.png';
import insta from '../images/concepts/one/insta-cards.png';
import imagery from '../images/concepts/one/imagery.png';
import cards from '../images/concepts/one/biz-cards.png';


function ConceptOne() {
  return (
    <div className="concept-one">
      <h3>Concept One</h3>
      <p>I made this concept pretty much immediately after our inspo meeting using most of the imagery referenced in your pinterest board and added it to the vision board. Much inspiration coming from the tile concepts in your inspo files and classic fonts pairing for easy reading.</p>
      <p>The colour palette for this concept is bold, diverse and fun, giving the brand a very approachable vibe. The final logo using Tenez in all lower case. Take a look at the insta cards to see how this would translate into the social space.</p>
      <img src={vision} alt="vision board" />
      <img src={colour} alt="colour" />
      <img src={typeOne} alt="brand typography" />
      <img src={typeTwo} alt="typography usage" />
      <img src={logo} alt="logo exploration" />
      <img src={insta} alt="insta cards with logo and events" />
      <img src={imagery} alt="insta imagery usage" />
      <img src={cards} alt="business cards example" />
    </div>
  );
}

export default ConceptOne;