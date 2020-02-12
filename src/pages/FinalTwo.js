import React from 'react';

import vision from '../images/concepts/final-two/moodboard.png';
import colour from '../images/concepts/final-two/colours.png';
import typeOne from '../images/concepts/final-two/typography.png';
import typeTwo from '../images/concepts/final-two/typography-two.png';
import logo from '../images/concepts/final-two/logo-squares.png';
import insta from '../images/concepts/final-two/insta-cards.png';
import instaTwo from '../images/concepts/final-two/insta-cards-two.png';
import imagery from '../images/concepts/final-two/imagery.png';
import cards from '../images/concepts/final-two/biz-cards.png';
import cardsTwo from '../images/concepts/final-two/biz-cards-two.png';


function FinalTwo() {
  return (
    <div className="concept-one">
      <h3>Final Designs - Version 2</h3>
      <p>I'm so happy you like the colours and tiles, those are approved so let's discuss what needs approval;</p>
      <p>For the Secondary Font I went through a bunch of fonts and landed on Futura. I love Futura, it's a geometric sans-serif typeface that was revolutionary when it was designed (and it still is!) It's classic and forever and you can never go wrong with Futura. Fun fact, Futura was the font used on my very first website back in the day (:</p>
      <p>For this biz cards I put in the info I mentioned to you earlier and you just need to decide if you want to go the colourful or gold edged route (: Also, notice there are two different backs so decide which you like, we are almost there!</p>
      <img src={vision} alt="vision board" />
      <img src={colour} alt="colour" />
      <img src={typeOne} alt="brand typography" />
      <img src={typeTwo} alt="typography usage" />
      <img src={logo} alt="logo exploration" />
      <img src={insta} alt="insta cards with logo and events" />
      <img src={instaTwo} alt="insta cards with logo and events" />
      <img src={imagery} alt="insta imagery usage" />
      <img src={cards} alt="business cards example" />
      <img src={cardsTwo} alt="business cards example" />
    </div>
  );
}

export default FinalTwo;