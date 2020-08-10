import React from 'react';

import visionFinal from '../images/concepts/final/moodboard.png';
import colourFinal from '../images/concepts/final/colours.png';
import typeOneFinal from '../images/concepts/final/typography.png';
import typeTwoFinal from '../images/concepts/final/typography-two.png';


function Moodboard() {
  return (
    <div className="concept-two">
      <img src={visionFinal} alt="vision board" />
      <img src={colourFinal} alt="colour" />
      <img src={typeOneFinal} alt="brand typography" />
      <img src={typeTwoFinal} alt="typography usage" />
    </div >
  );
}

export default Moodboard;