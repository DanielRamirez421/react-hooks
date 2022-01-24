import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {

  console.log(`i'm calling me again :(`);

  return (
  <div>
    <button 
      className='btn btn-primary'
      onClick={ increment }>
        Increment
    </button>
  </div>
  );
});
