import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { heavyProcess } from "../../helpers/heavyProcess";

import '../03-examples/MultipleCustomHooks.css'

export const MemoHook = () => {

  const { state:counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [ counter ]);

  return (
    <div>
      <h2>MemoHook!!</h2>
      <h3>Counter: <small>{ counter }</small></h3>
      <hr />

      <p>{ memoHeavyProcess }</p>

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
