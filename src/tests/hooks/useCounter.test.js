import { useCounter } from "../../hooks/useCounter";
import { renderHook } from '@testing-library/react-hooks';

const renderedCounter = function(defaultValueCounter) {
  const { result: { current: hookAttributes } } = renderHook(() => useCounter(defaultValueCounter));
  return hookAttributes;
}

describe('useCounter hook test', () => {

  test('should return default values', () => {

    const defaultValueCounter = 100;
    const { state, increment, decrement, reset } = renderedCounter(defaultValueCounter);

    expect(state).toBe(defaultValueCounter);
    expect(typeof increment).toBe('function');
    expect(typeof decrement).toBe('function');
    expect(typeof reset).toBe('function');

  });

  test('should increment counter', () => {

    const { state } = renderedCounter();
    console.log( state );

  });
  
});