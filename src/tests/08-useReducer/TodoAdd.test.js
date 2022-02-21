import { shallow } from "enzyme";
import { TodoAdd } from "../../components/08-useReducer/TodoAdd";

describe('TodoAdd component tests', () => {

  const handleAdd = jest.fn();
  const wrapper = shallow(<TodoAdd handleAdd={ handleAdd }/>);

  test('should show TodoAddComponent', () => { 
    expect(wrapper).toMatchSnapshot();
  })

  test('should not call handleAddTodo', () => { 
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault(){} });
    expect(handleAdd).toHaveBeenCalledTimes(0);
  });

  test('should call handleAddTodo with an argument', () => { 
    const value = 'ExampleTodo';
    wrapper.find('input').simulate('change', { target: { value, name: 'description' } });

    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault(){} });

    expect( handleAdd ).toHaveBeenCalledTimes(1);
    expect( handleAdd ).toHaveBeenCalledWith( expect.any(Object) );
    expect( handleAdd ).toHaveBeenCalledWith( { id: expect.any(Number), desc: value, done: false } );
    expect( wrapper.find('input').prop('value') ).toBe('');
  });

});