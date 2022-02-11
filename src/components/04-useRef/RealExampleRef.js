import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import '../03-examples/MultipleCustomHooks.css';

export const RealExampleRef = () => {

  const [show, setShow] = useState(false);

  return (
  <div>
    <h1>RealExampleRef!</h1>
    <hr />

    <button 
      className='btn btn-outline-primary mb-3' 
      onClick={ () => setShow(!show) }
      >
        Toggle
      </button>
    { show && <MultipleCustomHooks /> }
  </div>
  );
};
