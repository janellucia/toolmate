import React from 'react';


import colour from '../images/concepts/final/colours.png';
import typeOne from '../images/concepts/final/type.png';
import typeTwo from '../images/concepts/final/type-two.png';
import site from '../images/concepts/final/site.png';


function Moodboard() {
  return (
    <div className="concept-one">
      <img src={colour} alt="colour" />
      <img src={typeOne} alt="brand typography" />
      <img src={typeTwo} alt="typography usage" />
      <img src={site} alt="site preview" />
    </div>
  );
}

export default Moodboard;