import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../03-examples/MultipleCustomHooks.css';

export const CallBackHook = () => {

  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //   setCounter( counter + 1 ); // If we do this, we are generating a new ShowIncrement component when function is executed
  // }

  const memorizedIncrement = useCallback(() => setCounter(c => c + 1), [ setCounter ]);
  
  return (
    <div>
      <h2>CallBackHook: { counter }</h2>
      <hr />

      <ShowIncrement increment={ memorizedIncrement }/>
    </div>
  );
};
