import React, { useState } from 'react';
import { AppRouter } from './routes/AppRouter';
import { UserContext } from './context/UserContext';

// import '../03-examples/MultipleCustomHooks.css'

export const MainApp = () => {

  const [user, setUser] = useState({ });

  return (
    <UserContext.Provider value={{ 
      user,
      setUser
    }}>
      <AppRouter />
    </UserContext.Provider>
  );
};
