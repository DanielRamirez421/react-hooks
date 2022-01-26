import React from 'react';

export const TodoListItem = ({ todo, handleToggle, handleDelete, index }) => {
  return (
    <div 
      className='row my-1'
      onClick={ () => handleToggle(todo.id) }
      role='button'>
      <div className='col-10'>
        <li className={`list-group-item text-center ${ todo.done && 'completed' }`}>{ index + 1 }. { todo.desc }</li>
      </div>
      <div className='col-2'>
        <button 
          className='btn btn-danger'
          onClick={ () => handleDelete( todo.id ) }>Delete</button>  
      </div>
    </div>
  );
};
