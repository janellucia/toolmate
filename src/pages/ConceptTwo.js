import React from 'react';

import visionTwo from '../images/concepts/two/moodboard.png';
import colourTwo from '../images/concepts/two/colours.png';
import typeOneTwo from '../images/concepts/two/typography.png';
import typeTwoTwo from '../images/concepts/two/typography-two.png';
import siteTwo from '../images/concepts/two/site.png';
import logoTwo from '../images/concepts/two/logo-squares.png';
import instaTwo from '../images/concepts/two/insta-cards.png';
import imageryTwo from '../images/concepts/two/insta-cards-two.png';
import storiesTwo from '../images/concepts/two/stories.png';
import cardsTwo from '../images/concepts/two/biz-cards.png';
import letterTwo from '../images/concepts/two/letterhead.png';


function ConceptTwo() {
  return (
    <div className="concept-two">
      <h3>Concept Two</h3>
      <p>The second concept, I went with a more polished and sophisticated vibe, a warm colour palette and a satisfying font combination. So much inspiration came from online magazines and anything that gave the feeling of contemporary and transformative to stay true to your brand guidelines.</p>
      <p>For the logo, I played with a couple of options, the final option is created with the font 'Toledo'extra light italic and in my notes you mentioned you would like to see a handwritten font, I played around with customized letter spacing so that it is uniquely yours. For the official font pairing in this concept I went with Toledo Sans and Glacial Indifference which is a satisfyling pairing with the seris ans sans serif combination. </p>
      <p>Glacial Indifference is a font that can be downlaoded online and Toledo Serial currently has regular weight availble for free but we would also need to get the bold weight and I believe it is $9.99, you can check it out <a href="https://www.myfonts.com/fonts/softmaker/toledo-serial/" target="new">here</a></p>
      <img src={visionTwo} alt="vision board" />
      <img src={colourTwo} alt="colour" />
      <img src={typeOneTwo} alt="brand typography" />
      <img src={typeTwoTwo} alt="typography usage" />
      <img src={siteTwo} alt="site/typography preview" />
      <img src={logoTwo} alt="logo exploration" />
      <img src={instaTwo} alt="insta cards with logo and events" />
      <img src={imageryTwo} alt="insta imagery usage" />
      <img src={storiesTwo} alt="insta imagery usage" />
      <img src={cardsTwo} alt="business cards example" />
      <img src={letterTwo} alt="site/typography preview" className="letterhead" />
    </div >
  );
}

export default ConceptTwo;