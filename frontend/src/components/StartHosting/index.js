import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './StartHosting.css'

function StartHosting() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [form, setForm] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);


  useEffect(() => {
    setForm(true);
  }, [])

  if (sessionUser) return <Redirect to="/" />;





  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };



  return (

    <div className={form ? 'host-form active-y' : 'host-form'} >
     <form onSubmit={handleSubmit} className='hf-form'>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <div className="hf-wrapper email-input">
        <label for='email'>
        Email
        <input
          className='hf-email'
          type="text"
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </label>
      </div>

        <div className="hf-wrapper user-input">
        <label for='username'></label>
        Username
        <input
          className='hf-user'
          type="text"
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

        <div className="hf-wrapper ps-input">
        <label for='password'></label>
        Password
        <input
          className='hf-ps'
          type="password"
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
        <div className="hf-wrapper c-ps-input">
          <label for='confirm-ps'></label>
        Confirm Password
        <input
          className='hf-c-ps'
          name='confirm-ps'
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
     </form>
    </div>

  );
}


export default StartHosting