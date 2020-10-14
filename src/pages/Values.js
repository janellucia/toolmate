import React from 'react';

import personaOne from '../images/concepts/values/persona-b2c.png';
import personaTwo from '../images/concepts/values/persona-b2b.png';
import principles from '../images/concepts/values/principles.png';
import positioning from '../images/concepts/values/statement.png';


function Values() {
  return (
    <div className="values">
      <img src={positioning} alt="brand statement" />
      <img src={principles} alt="brand design principles" />
      <img src={personaOne} alt="brand user persona B2C" />
      <img src={personaTwo} alt="brand user persona B2B" />
    </div>
  );
}

export default Values;