import React, { useEffect, useState } from 'react';

export const Message = () => {

  const [coors, setCoors] = useState('');

  useEffect(() => {
    
    const mouseMove = ({x, y}) => {
      setCoors(`{x: ${x},y: ${y}}`);
    }

    window.addEventListener('mousemove', mouseMove);
  
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);
  

  return <div>
      <h3>You're great!</h3>
      { coors }
  </div>;
};
