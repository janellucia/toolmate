import React from 'react';

import personas from '../images/concepts/values/persona.png';
import principles from '../images/concepts/values/values.png';
import positioning from '../images/concepts/values/statement.png';


function Values() {
  return (
    <div className="values">
      <h3>Brand Values</h3>
      <p>We started our process with a kick-off meeting to get to know your values in your brand, from there, I conduct my research, crafting the brand values, positioning statement, and user profiles. I use that information to develop a brand identity system that includes a logo, colour palette, a bold and flexible font pairing, assets for your social channels, and brand guidelines.</p>
      <img src={personas} alt="brand user persona Sam" />
      <img src={principles} alt="brand design principles" />
      <img src={positioning} alt="brand statement" />
    </div>
  );
}

export default Values;