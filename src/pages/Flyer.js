import React from 'react';


import pageOne from '../images/concepts/flyer/page-1.png';
import pageTwo from '../images/concepts/flyer/page-2.png';
import pageThree from '../images/concepts/flyer/page-3.png';
import pageFour from '../images/concepts/flyer/page-4.png';
import pageFive from '../images/concepts/flyer/page-5.png';
import pageSix from '../images/concepts/flyer/page-6.png';


function Flyer() {
  return (
    <div className="concept-one">
      <img src={pageOne} alt="page 1" class="letterhead" />
      <img src={pageTwo} alt="page 2" class="letterhead" />
      <img src={pageThree} alt="page 3" class="letterhead" />
      <img src={pageFour} alt="page 4" class="letterhead" />
      <img src={pageFive} alt="page 5" class="letterhead" />
      <img src={pageSix} alt="page 6" class="letterhead" />
    </div>
  );
}

export default Flyer;