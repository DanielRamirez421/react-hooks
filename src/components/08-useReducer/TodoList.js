import React from 'react';
import { TodoListItem } from './TodoListItem';
export const TodoList = ({ toDosState, handleToggle, handleDelete }) => {
  return (
  <div className='col-6'>
      <ul className='list-group list-group-flush'>
      { 
        toDosState.map((todo, i) => 
          <TodoListItem 
            todo={ todo } 
            handleToggle={ handleToggle } 
            handleDelete={ handleDelete } 
            index={ i }
            key={ todo.id } 
          />
        )
      }
      </ul>
  </div>
  );
};
