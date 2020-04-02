import React from 'react';

import vision from '../images/concepts/one/moodboard.png';
import colour from '../images/concepts/one/colours.png';
import typeOne from '../images/concepts/one/typography.png';
import typeTwo from '../images/concepts/one/typography-two.png';
import site from '../images/concepts/one/site.png';
import logo from '../images/concepts/one/logo-squares.png';
import insta from '../images/concepts/one/insta-cards.png';
import imagery from '../images/concepts/one/insta-cards-two.png';
import stories from '../images/concepts/one/stories.png';
import cards from '../images/concepts/one/biz-cards.png';
import letter from '../images/concepts/one/letterhead.png';


function ConceptOne() {
  return (
    <div className="concept-one">
      <h3>Concept One</h3>
      <p>I made this concept pretty much immediately after our kick off meeting using most of the imagery referenced in your mood board and added it to the vision board for this concept. I chose to go with a classic font pairing for easy reading.</p>
      <p>The colour palette for this concept is bold, diverse and fun, giving the brand a very approachable vibe. The final logo using Marcellus in sentence case and cusotm spacing. Take a look at the insta cards to see how this would translate into the social space.</p>
      <p>All fonts in this concept are available with Adobe Fonts.</p>
      <img src={vision} alt="vision board" />
      <img src={colour} alt="colour" />
      <img src={typeOne} alt="brand typography" />
      <img src={typeTwo} alt="typography usage" />
      <img src={site} alt="site/typography preview" />
      <img src={logo} alt="logo exploration" />
      <img src={insta} alt="insta cards with logo and events" />
      <img src={imagery} alt="insta imagery usage" />
      <img src={stories} alt="insta imagery usage" />
      <img src={cards} alt="business cards example" />
      <img src={letter} alt="site/typography preview" className="letterhead" />
    </div>
  );
}

export default ConceptOne;