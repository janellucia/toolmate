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
      <p>After finding out your preferences I brought all your thoughts together in the final concept. You asked to see the colours from Concept 2 (I did adjust 'Pearl White', 'Light Apricot' and 'Golden Stone' slightly to compliment the layout in a more flattering way) along with the Logo and tiles from Concept 3 (as well as 2 tiles from concept 1) </p>
      <p>You asked to see Glacial Indifference replace Commuters Sans and after playing around with that idea, I disagree. The short and wide characters present in Commuters Sans balance the high and thin character sets present in Orpheus and Capitolium. Those characteristics just aren't present in Glacial Indifference.</p>
      <p>That being said, we can go with the fonts from concept 1 or 2 instead of 3 but I recommend we stick with this font combination, Commuters Sans adds depth and gives this combination and classy, luxurious vibe. I also added the fonts to this site so you can preview what everything can look like once it's all together. But, if you are truly unhappy with Commuter Sans, let's talk it out.</p>
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