import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const LoginScreen = () => {

  const { setUser } = useContext(UserContext);
  const userExample = { id: 123, name: 'Daniel', username: 'dm.ramirez' }

  return (
    <div>
      <h1>Login Screen</h1>
      <hr />

      <button
        className='btn btn-outline-primary'
        onClick={ () => setUser(userExample) }>
        SetUser
      </button>
    </div>
    );
};
