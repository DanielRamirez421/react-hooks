import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import '../03-examples/MultipleCustomHooks.css'

export const Memorize = () => {

  const { state:counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>Memorize!!</h2>
      <h3>Counter: <Small value={ counter } /></h3>
      <hr />

      <button 
        className='btn btn-primary me-3'
        onClick={ () => increment(1) }>
          +1
      </button>

      <button
        className='btn btn-outline-primary'
        onClick={ () => setShow(!show) }>
          Toggle { JSON.stringify(show) }
      </button>
    </div>
  );
};
