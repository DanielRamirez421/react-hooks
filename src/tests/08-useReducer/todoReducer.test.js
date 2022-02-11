
import { todoReducer } from "../../components/08-useReducer/todoReducer";
import { demoState as initialState } from "../fixtures/demoTodosState";

describe('Tests in todoReducer', () => { 

  test('should return default state', () => { 
    const state = todoReducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test('should add a TODO', () => { 
    const todoToAdd = { id: 3, desc: 'Add todo', done: false };
    const state = todoReducer(initialState, { type: 'add', payload: todoToAdd });
    expect(state).toEqual([...initialState, todoToAdd]);
  });

  test('should remove a TODO', () => { 
    const state = todoReducer(initialState, { type: 'delete', payload: 1 });
    expect(state.length).toBe(1);
  });

  test('should toggle a TODO', () => { 
    let state;
    let todoToCheck;
    const toggleAction = (id) => ({ type: 'toggle', payload: id });

    state = todoReducer(initialState, toggleAction(1));
    todoToCheck = state.find(todo => todo.id === 1);
    expect(todoToCheck.done).toBe(true);

    state = todoReducer(initialState, toggleAction(2));
    todoToCheck = state.find(todo => todo.id === 2);
    expect(todoToCheck.done).toBe(true);
  });

});