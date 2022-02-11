import React, { Fragment, useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

 import './styles.css'

const init = () => {
  return JSON.parse(localStorage.getItem('toDos')) || [];
}

export const TodoApp = () => {

  const [ toDosState, dispatch ] = useReducer(todoReducer, [], init);

  useEffect(() => localStorage.setItem('toDos', JSON.stringify( toDosState )), [ toDosState ]);
  
  const handleDelete = ( todoId ) => {
    dispatch({ type: 'delete', payload: todoId });    
  }

  const handleToggle = (todoId) => {
    dispatch({ type: 'toggle', payload: todoId });
  }

  const handleAdd = ( newTodo ) => {
    dispatch({ type: 'add', payload: newTodo });
  }

  return (
  <Fragment>
    <h3>TodoApp length: { toDosState.length }</h3>
    <hr />

    <div className='row justify-content-sm-between'>
      <TodoList 
        toDosState={ toDosState } 
        handleToggle={ handleToggle } 
        handleDelete={ handleDelete }
      />
      <TodoAdd 
        handleAdd={ handleAdd }
      />
    </div>
  </Fragment>
  );
};
