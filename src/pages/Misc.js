import React from 'react';


import cards from '../images/concepts/final/biz-cards.png';
import letterhead from '../images/concepts/final/letterhead.png';


function Moodboard() {
  return (
    <div className="concept-one">
      <img src={cards} alt="business cards example" />
      <img src={letterhead} alt="letterhead preview" class="letterhead" />
    </div>
  );
}

export default Moodboard;