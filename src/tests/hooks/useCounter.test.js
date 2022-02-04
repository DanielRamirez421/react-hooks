import { useCounter } from "../../hooks/useCounter";
import { renderHook, act } from '@testing-library/react-hooks';

describe('useCounter hook test', () => {

  const defaultValueCounter = 100;

  test('should return default values', () => {
    const { result: { current } } = renderHook(() => useCounter(defaultValueCounter));  // TODO: Don't use object destructuration in renderHook fcn
    const { state, increment, decrement, reset } = current;

    expect(state).toBe(defaultValueCounter);
    expect(typeof increment).toBe('function');
    expect(typeof decrement).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('should increment counter in one', () => {
    const { result } = renderHook(() => useCounter()); // TODO: Use renderHook fcb like this
    act(() => result.current.increment(1));
    expect(result.current.state).toBe(11)
  });

  test('should decrement counter in one', () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.decrement(1));
    expect(result.current.state).toBe(9);
  });

  test('should reset counter', () => {
    const { result } = renderHook(() => useCounter(defaultValueCounter));
    act(() => result.current.reset());
    expect(result.current.state).toBe(defaultValueCounter);
  });
  
  
  
});