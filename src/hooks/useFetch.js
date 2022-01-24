import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  
  const isMounted = useRef(true); // Real life case to apps in production 
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect( () => {
    return () => isMounted.current = false;
  }, []);
    
  useEffect(() => {
    setState({ ...state, loading: true });

    fetch( url )
      .then( resp => resp.json() )
      .then( data => isMounted && setState({ loading: false, error: null, data }));

  }, [url]);
  
  return state;
};
