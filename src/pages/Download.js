import React from 'react';

import values from '../files/SL-values.zip';
import moodboard from '../files/SL-moodboard.zip';
import logos from '../files/SL-logos.zip';

import insta from '../files/SL-insta-socials.ai.zip';


import misc from '../files/SL-misc.zip';

function Download() {
  return (
    <div className="download">
      <h1>Download All Your Branding Files</h1>
      <p>Please note that you will have to install all fonts before opening <br></br>any attached files in Abode Illustrator</p>
      <p>Toledo Serial is in the Moodboard zip folder attached</p>
      <p>Commuters Sans & OFL Sorts Mill Goudy are both Adobe fonts, <br></br>so please go to adobe to turn on these fonts, links below</p>
      <p><a href="https://fonts.adobe.com/fonts/commuters-sans" target="new">Commuters Sans</a></p>
      <p><a href="https://fonts.adobe.com/fonts/ofl-sorts-mill-goudy" target="new">OFL Sorts Mill Goudy</a></p>
      <p><a href={values}>Spirit Luxe Values Zip File</a></p>
      <p><a href={moodboard}>Spirit Luxe Moodboard Zip File</a></p>
      <p><a href={logos}>Spirit Luxe Logos Zip File</a></p>
      <p><a href={insta}>Spirit Luxe Adobe Social Zip File</a></p>
      <p><a href={misc}>Spirit Luxe Misc Zip File</a></p>


    </div >
  );
}

export default Download;