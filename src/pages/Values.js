import React from 'react';

import personas from '../images/concepts/values/persona.png';
import principles from '../images/concepts/values/values.png';
import positioning from '../images/concepts/values/statement.png';


function Values() {
  return (
    <div className="values">
      <img src={personas} alt="brand user persona Sam" />
      <img src={principles} alt="brand design principles" />
      <img src={positioning} alt="brand statement" />
    </div>
  );
}

export default Values;