import React from 'react';

import vision from '../images/concepts/final/moodboard.png';
import colour from '../images/concepts/final/colours.png';
import typeOne from '../images/concepts/final/typography.png';
import typeTwo from '../images/concepts/final/typography-two.png';
import logo from '../images/concepts/final/logo-squares.png';
import insta from '../images/concepts/final/insta-cards.png';
import instaTwo from '../images/concepts/final/insta-cards-two.png';
import imagery from '../images/concepts/final/imagery.png';
import cards from '../images/concepts/final/biz-cards.png';


function ConceptOne() {
  return (
    <div className="concept-one">
      <h3>Final Designs</h3>
      <p>After talking to you and finding out your preferences I brought all your thoughts together in the final concept. You had asked to see the colours from Concept 2 in with the Logo and tiles from Concept. I feel like this was a great combination (:</p>
      <p>You had also asked to see the font Glacial Indifference replace the Commuters Sans, this did not go well. The short and wide characters present in Commuters Sans balance the high and thin character sets present in Orpheus and Capitolium. Glacial Indifference also has high character sets and thin letters, font pairings can be tricky, beautiful fonts that look great individually won't necessarily mean they will look good or seem professional. </p>
      <p>That being said, we can go with the font combination and logo from concept two if you are really feeling Glacial Indifference. I recommend we stick with the font combination in the final concept, Commuters Sans in this combination adds depth and character and serves as a complementary font. However, if you are truly unhappy with Commuter Sans I would like to understand what aspects of the font you dislike and that way we can look for an alternative.</p>
      <img src={vision} alt="vision board" />
      <img src={colour} alt="colour" />
      <img src={typeOne} alt="brand typography" />
      <img src={typeTwo} alt="typography usage" />
      <img src={logo} alt="logo exploration" />
      <img src={insta} alt="insta cards with logo and events" />
      <img src={instaTwo} alt="insta cards with logo and events" />
      <img src={imagery} alt="insta imagery usage" />
      <img src={cards} alt="business cards example" />
    </div>
  );
}

export default ConceptOne;