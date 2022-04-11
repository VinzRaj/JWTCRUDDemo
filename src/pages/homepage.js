import React, { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../appContext';
const url = 'http://localhost:5000/api/v1/task/create';

export const Home = () => {
  const { token } = useContext(AppContext);
  console.log('token from home pge....', token);
  const [task, setTask] = useState('');
  const handleTask = (e) => {
    setTask(e.target.value);
  };
  const add = (e) => {
    e.preventDefault();
    addTaskApiCall();
  };
  const addTaskApiCall = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        taskname: task,
      }),
    };
    debugger;
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <ul>
        <h3> Add your Task</h3>
        <form>
          {/* Labels and inputs for form data */}
          <label className='label'>Enter your task</label>
          <input
            onChange={handleTask}
            className='input'
            value={task}
            type='text'
          />

          <button onClick={add} className='btn' type='submit'>
            Add
          </button>
        </form>
      </ul>
    </div>
  );
};
