import { useState } from "react";

export const useCounter = ( initialState = 10 ) => {
  
    const [state, setState] = useState(initialState);

    const increment = (factor) => setState( state + factor );
    const decrement = (factor) => setState( state > 0 ? state - factor : 0);
    const reset = () => setState( initialState );

    return {
        state,
        
        increment,
        decrement,
        reset
    }


    // Custom hook extract logical form a functional tool
};
