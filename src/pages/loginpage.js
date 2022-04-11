import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../appContext';
export const Login = () => {
  const { setToken } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    loginApiCall();
  }
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const loginApiCall = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        emailId: email,
        password: password,
      }),
    };
    fetch('http://localhost:5000/api/v1/auth/login', options).then((response) =>
      response
        .json()
        .then((data) => ({
          data: data,
          status: response.status,
        }))
        .then((res) => {
          debugger;
          setToken(res.data);
          console.log(res.data);
          navigate('/home');
        })
    );
  };
  return (
    <div className='Login'>
      <h3>Registeration form</h3>
      <form>
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
          Login
        </button>
      </form>
    </div>
  );
};
