import React from 'react';
import { useState } from 'react';
import validator from 'validator';
import axios from 'axios';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    if (name && password && email && validator.isEmail(email)) {
      saveToDB();
      //apicall();
    } else {
      console.log('invalid input');
    }
    e.preventDefault();
  };

  const apicall = () => {
    fetch('/api/v1/auth/data')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  const saveToDB = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        fullname: name,
        emailId: email,
        password: password,
      }),
    };
    fetch('http://localhost:5000/api/v1/auth/register', options).then(
      (response) =>
        response
          .json()
          .then((data) => ({
            data: data,
            status: response.status,
          }))
          .then((res) => {
            console.log(res.data);
          })
    );
  };

  return (
    <div>
      <h3>Registeration form</h3>
      <form>
        {/* Labels and inputs for form data */}
        <label className='label'>Name</label>
        <input
          onChange={handleName}
          className='input'
          value={name}
          type='text'
        />

        <label className='label'>Email</label>
        <input
          onChange={handleEmail}
          className='input'
          value={email}
          type='email'
        />

        <label className='label'>Password</label>
        <input
          onChange={handlePassword}
          className='input'
          value={password}
          type='password'
        />

        <button onClick={handleSubmit} className='btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};
