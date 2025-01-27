import React from 'react';

import red from './red.module.css'; // Import red module
import green from './green.module.css'; // Import green module

function ModuleCss() {
  return (
    <div>
      <h1 className='main'>Applying Css using Globall.CSS</h1>
      <h1 className='main'>Applying CSS using style.css but here the h1 red color will be overridden</h1>
      <p>to apply differently....</p>
      <h2 className={red.main}>Applying Module CSS (Red)</h2>
      <h2 className={green.main}>Applying Module CSS (Green)</h2>
    </div>
  );
}

export default ModuleCss;
