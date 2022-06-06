import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const demoName = 'Demo';
  const demoPassword = 'password';


  const [username, setUsername] = useState('');
  const [passwordState, setPasswordState] = useState('');


///// 



  if (sessionUser) return (
    <Redirect to="/" />
  );
  // error handlers:
  /*
  must enter email or password 
  must enter password 
  must enter a valid email 
  must enter a valid password 
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const handleDemo = (e) => {
    setCredential(demoName);
    setPassword(demoPassword);
  }

  return (
    <div className='login-container'>
      <span id='login-title-text'>Log in</span>
    <form onSubmit={handleSubmit} className='login-form'>
     { errors.length > 0 &&
      <ul className='errors-login'>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>}
        <div className='lc-i lc-eu-container'>
         <span>Username or Email</span>
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
        </div>
        <div className='lc-i lc-pi-container'>
        <span>Password</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button id='login-submit'type="submit">Log In</button>
      <button id='login-demo' type='' onClick={handleDemo}>Demo</button>
    </form>
    </div>
  );
}

export default LoginFormPage;