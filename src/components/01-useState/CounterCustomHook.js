import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterCustomHook = () => {

  const initialState = 200;
  const factor = 5;

  const { state, increment, decrement, reset } = useCounter( initialState );

  return <div>
            <h1>Counter with hook, state: { state }</h1>
            <hr />

            <button onClick={ () => increment(factor) } className='btn btn-primary'>+{ factor }</button>
            <button onClick={ () => reset() } className='btn btn-danger'>Reset</button>
            <button onClick={ () => decrement(factor) } className='btn btn-primary'>-{ factor }</button>
         </div>;
};
