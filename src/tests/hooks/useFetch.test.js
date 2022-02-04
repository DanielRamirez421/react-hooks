import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe('useFetch tests', () => {
  
  test('should return default information', () => {

    const url = `https://www.breakingbadapi.com/api/quotes/${ 1 }`;
    const { result } = renderHook(() => useFetch(url));
  
    expect(result.current).toEqual({ data: null, loading: true, error: null });

  });


  test('should return info from service', async () => {
    
    const url = `https://www.breakingbadapi.com/api/quotes/${ 1 }`;
    const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
    await waitForNextUpdate();

    console.log(result.current);

    expect(result.current.data.length).toBe(1);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBe(null);
  });
  
  test('should manage the Error', async () => {
    
    const url = `https://reqres.in/apid/users?page=2`;
    const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
    await waitForNextUpdate();

    expect(result.current).toEqual({ data: null, loading: false, error: 'Error loading info' });

  });
  
});
