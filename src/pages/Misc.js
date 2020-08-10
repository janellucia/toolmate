import React from 'react';

import cardsFinal from '../images/concepts/final/biz-cards.png';
import letterFinal from '../images/concepts/final/letterhead.png';


function Misc() {
  return (
    <div className="concept-two">
      <img src={cardsFinal} alt="business cards example" className="biz-cards" />
      <img src={letterFinal} alt="site/typography preview" className="letterhead" />
    </div >
  );
}

export default Misc;