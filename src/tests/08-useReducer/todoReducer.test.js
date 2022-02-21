
import { todoReducer } from "../../components/08-useReducer/todoReducer";
import { demoState as initialStateDemo } from "../fixtures/demoTodosState";

describe('Tests in todoReducer', () => { 

  test('should return default state', () => { 
    const state = todoReducer(initialStateDemo, {});
    expect(state).toEqual(initialStateDemo);
  });

  test('should add a TODO', () => { 
    const todoToAdd = { id: 3, desc: 'Add todo', done: false };
    const state = todoReducer(initialStateDemo, { type: 'add', payload: todoToAdd });
    expect(state).toEqual([...initialStateDemo, todoToAdd]);
  });

  test('should remove a TODO', () => { 
    const state = todoReducer(initialStateDemo, { type: 'delete', payload: 1 });
    expect(state.length).toBe(1);
  });

  test('should delete a TODO', () => { 
    const removeTodo = ( id ) => ({ type: 'delete', payload: id });
    const state = todoReducer(initialStateDemo, removeTodo(1))
    expect(state.length).toBe(1);
    expect(state).toEqual([initialStateDemo[1]]);
  });

  test('should toggle a TODO', () => { 
    let state;
    let todoToCheck;
    const toggleAction = (id) => ({ type: 'toggle', payload: id });

    state = todoReducer(initialStateDemo, toggleAction(1));
    todoToCheck = state.find(todo => todo.id === 1);
    expect(todoToCheck.done).toBe(true);

    state = todoReducer(initialStateDemo, toggleAction(2));
    todoToCheck = state.find(todo => todo.id === 2);
    expect(todoToCheck.done).toBe(true);
  });

});