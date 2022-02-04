import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('useForm hook tests', () => {

  const initialForm = {
    name: 'DanielRamirez',
    email: 'damtrax@hotmail.com'
  };
  
  test('should return a default form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [ formValues, handleInputChange, resetValues ] = result.current;

    expect(typeof formValues).toBe('object');
    expect(typeof handleInputChange).toBe('function');
    expect(typeof resetValues).toBe('function');
  });

  test('should change formValues', () => {
    const { result } = renderHook(() => useForm(initialForm));

    const nameValue = { name: 'name' , value: 'DanielPerez'};
    act(() => result.current[1]({ target: nameValue }));

    const emailValue = { name: 'email', value: 'dani.mauro26@gmail.com' };
    act(() => result.current[1]({ target: emailValue }));

    expect( result.current[0].name ).toBe( nameValue.value );
    expect( result.current[0].email ).toBe( emailValue.value );
  });

  test('should reset formValues', () => {
    const { result } = renderHook(() => useForm(initialForm));

    const nameValue = { name: 'name' , value: 'DanielPerez'};
    act(() => result.current[1]({ target: nameValue }));

    const emailValue = { name: 'email', value: 'dani.mauro26@gmail.com' };
    act(() => result.current[1]({ target: emailValue }));

    act(() => result.current[2]());

    expect( result.current[0].name ).toBe(initialForm.name);
    expect( result.current[0].email ).toBe(initialForm.email);
  });
  
});
