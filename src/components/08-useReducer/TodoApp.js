import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import { todoReducer } from './todoReducer';

 import './styles.css'

const init = () => {
  return JSON.parse(localStorage.getItem('toDos')) || [];
}


export const TodoApp = () => {

  const [ toDosState, dispatch ] = useReducer(todoReducer, [], init);
  const [ { description }, handleInputChange, resetValues ] = useForm({ description: '' });

  useEffect(() => localStorage.setItem('toDos', JSON.stringify( toDosState )), [ toDosState ]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() <= 2) { return; };
    
    const action = { 
      type: 'add', payload: {
        id: new Date().getTime(), 
        desc: description.trim(), 
        done: false 
      }
    };

    dispatch( action );
    resetValues();
  }

  const handleDelete = ( todoId ) => {
    const deleteAction = { type: 'delete', payload: todoId };
    dispatch( deleteAction );    
  }

  return (
  <div>
    <h3>TodoApp length: { toDosState.length }</h3>
    <hr />

    <ul className='list-group list-group-flush'>
      {
        toDosState.map((t, i) => 
          <div key={t.id} className='row'>
            <div className='col-10'>
              <li className='list-group-item text-center'>{ i+1 }. { t.desc }</li>
            </div>
            <div className='col-2'>
              <button 
                className='btn btn-danger w-100'
                onClick={ () => handleDelete( t.id ) }>Delete</button>  
            </div>
          </div>
        )
      }
    </ul>

    <hr />

    <h4>Add toDo</h4>
    <form 
      className='form-group text-right'
      onSubmit={ handleSubmit }>
      <div className='row justify-content-end'>
        <div className='col-5'>
          <input 
            className='form-control w-100'
            type='text'
            name='description'
            placeholder='Add Todo'
            autoComplete='off'
            value={ description }
            onChange={ handleInputChange }
          />
        </div>
        <div className='col-1'>
          <button 
            className='btn btn-outline-primary w-100'
            type='submit'>Add</button>
        </div>
      </div>
    </form>

  </div>
  );
};
