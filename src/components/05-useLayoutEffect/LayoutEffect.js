import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from './../../hooks/useCounter';

import './LayoutEffect.css'

export const LayoutEffect = () => {

  const pTag = useRef();
  const { state:counter, increment, decrement } = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
  const { quote } = !!data && data[0];
  const [ boxSize, setBoxSize ] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [ quote ]);
  

  return (
  <div>
    <h1>LayoutEffect!</h1>
    <hr />

    
    <blockquote className='text-right blockquote'>
      <p className='mb-3' ref={ pTag }>{ quote }</p>
    </blockquote>      

    
    { counter !== 1 && <button 
                          className='btn btn-primary me-3' 
                          onClick={ () => decrement(1) }
                          >Previous Quote: {counter - 1 }
                        </button>}
    <button 
      className='btn btn-primary' 
      onClick={ () => increment(1) }
      >Next Quote: {counter + 1 }
    </button>

    <pre>{ JSON.stringify(boxSize, null, 3) }</pre>

  </div>
  );
};
