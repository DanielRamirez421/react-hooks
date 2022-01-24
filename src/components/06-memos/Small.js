// import React, { memo } from 'react';
import React from 'react';

// export const Small = memo(({ value }) => {
export const Small = React.memo(({ value }) => {

  console.log('im calling me again');

  return <small>{ value }</small>;
});
