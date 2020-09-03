import React from 'react';


import cards from '../images/concepts/print/biz-cards.png';
import letterhead from '../images/concepts/print/letterhead.png';
import signOne from '../images/concepts/print/landscape.png';
import signTwo from '../images/concepts/print/portrait.png';


function Moodboard() {
  return (
    <div className="concept-one">
      <img src={cards} alt="business cards example" />
      <img src={letterhead} alt="letterhead preview" class="letterhead" />
      <img src={signOne} alt="landscape sign" />
      <img src={signTwo} alt="portrait sign" class="letterhead" />
    </div>
  );
}

export default Moodboard;