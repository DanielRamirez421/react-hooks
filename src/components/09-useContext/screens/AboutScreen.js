import React, { Fragment, useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const AboutScreen = () => {

  const { user, setUser } = useContext( UserContext ); 

  const handleClick = () => setUser({});

  return (
    <Fragment>
      <h1>About Screen</h1>
      <hr />

      <pre>
        { JSON.stringify( user, null, 3 ) }
      </pre>

      <button
        className='btn alert-warning'
        onClick={ handleClick }>
        LogOut
      </button>

    </Fragment>
    );
};
