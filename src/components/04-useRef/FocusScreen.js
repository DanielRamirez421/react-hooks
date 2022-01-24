import React, { useRef } from 'react';

import './../03-examples/MultipleCustomHooks.css'

export const FocusScreen = () => {

  const inputRef = useRef();

  console.log(inputRef);

  const handleClick = () => {
    // document.querySelector('input').select();
    inputRef.current.select();
    console.log(inputRef);
  }

  return (
  <div>
    <h3>FocusScreen!</h3>
    <hr />

    <input 
      ref={ inputRef }
      className='form-control'
      placeholder='your name'/>

    <button 
      className='btn btn-outline-primary mt-5'
      onClick={ handleClick }>
      Focus
    </button>
  </div>
  );
};
