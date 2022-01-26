import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAdd }) => {

  const [ { description }, handleInputChange, resetValues ] = useForm({ description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() <= 2) { return; };
    
    handleAdd({ 
      id: new Date().getTime(), 
      desc: description.trim(), 
      done: false  
    })
    resetValues();
  }

  return (
  <div className='col-5'>
    <h4>Add toDo</h4>
    <form 
      className='form-group text-right'
      onSubmit={ handleSubmit }>
      <div className='row'>
        <div className='col-8'>
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
        <div className='col-4'>
          <button 
            className='btn btn-outline-primary w-100'
            type='submit'
            >
              Add
            </button>
        </div>
      </div>
    </form>
  </div>
  );
};
