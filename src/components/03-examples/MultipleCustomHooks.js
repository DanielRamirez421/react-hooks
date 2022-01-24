import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from './../../hooks/useCounter';

import './MultipleCustomHooks.css'

export const MultipleCustomHooks = () => {

  const { state:counter, increment, decrement } = useCounter(1);
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
  const { author, quote } = !!data && data[0];

  return (
  <div>
    <h1>Breaking bad Quotes</h1>
    <hr />

    { loading ? 
        <div className='alert alert-info text-center'>Loading ...</div> :
        <blockquote className='text-right blockquote'>
          <p className='mb-3'>{ quote }</p>
          <footer className='blockquote-footer'>{ author }</footer>
        </blockquote>      
    }

    
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

  </div>
  );
};
