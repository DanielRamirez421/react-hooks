import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterCustomHook = () => {

  const initialState = 200;
  const sumFactor = 5;

  const { state, increment, decrement, reset } = useCounter( initialState );

  return <div>
            <h1>Counter with hook: { state }</h1>
            <hr />

            <button onClick={ () => increment(sumFactor) } className='btn btn-primary'>+1</button>
            <button onClick={ () => reset() } className='btn btn-danger'>Reset</button>
            <button onClick={ () => decrement(sumFactor) } className='btn btn-primary'>-1</button>
         </div>;
};
