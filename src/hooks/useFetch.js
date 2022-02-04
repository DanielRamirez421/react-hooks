import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  
  const isMounted = useRef(true); // Real life case to apps in production 
  const initialState = { data: null, loading: true, error: null };
  const [state, setState] = useState(initialState);
    
  useEffect(() => {
    setState(s => ({ ...s, loading: true }));

    fetch( url )
      .then( resp => resp.json() )
      .then( data => isMounted && setState({ loading: false, error: null, data }))
      .catch(() => isMounted && setState({ data: null, loading: false, error: 'Error loading info' }));

    return () => isMounted.current = false;
  }, [url]);
  
  return state;
};
