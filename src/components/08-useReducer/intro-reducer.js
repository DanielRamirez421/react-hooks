

const initialState = [{
  id: 1,
  todo: 'buy milk',
  done: false
}];

const newTodo = {
  id: 2,
  todo: 'learn react',
  done: false
}

const todoReducer = ( state = initialState, action ) => {

  if (action?.type === 'newTodo') {
    return [ ...state, action.payload ];
  }

  return state;
};

let toDo = todoReducer();

console.log('before add new todo', toDo);

const todoAction = {
  type: 'newTodo',
  payload: newTodo
}

toDo = todoReducer( toDo, todoAction );

console.log('after add new todo', toDo);
