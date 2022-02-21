import React from 'react';
import PropTypes from 'prop-types'; // impt

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

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired  
}
