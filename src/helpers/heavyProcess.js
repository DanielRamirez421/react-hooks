export const heavyProcess = ( iterations ) => {
  for (let i = 0; i < iterations; i++) {
     console.log( 'Loading...' );
  }

  console.log('loaded!');

  return `${ iterations } performed`
}