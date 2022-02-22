import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import { TodoApp } from "../components/08-useReducer/TodoApp";
import { demoState, todoDemo } from "./fixtures/demoTodosState";

describe('Component tests <TodoApp />', () => {

  const wrapper = shallow( <TodoApp /> );
  Storage.prototype.setItem = jest.fn();
  
  test('should show component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should add a TODO', async () => {
    const wrapper = mount( <TodoApp /> );
    act(() => {
      const handleAdd = wrapper.find('TodoAdd').prop('handleAdd');
      handleAdd(demoState[0]);
      handleAdd(demoState[1]);
    });

    console.log(wrapper.find('TodoList').props()); // may be a await waitForNextUpdate(); can solve [] returned
    expect(wrapper.find('h3').text().trim()).toBe('TodoApp length: 2');
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test('should delete a ToDo', () => { 
    wrapper.find('TodoAdd').prop('handleAdd')(todoDemo);
    wrapper.find('TodoList').prop('handleDelete')(todoDemo.id);
    expect(wrapper.find('h3').text().trim()).toBe('TodoApp length: 0');
  });

});

