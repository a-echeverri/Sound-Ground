import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
// import { useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import './LoginForm.css';

function LoginForm() {
  const dispatch = useDispatch();
  //   const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  //   if (sessionUser) return (
  //     <Redirect to="/" />
  //   );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div className="login-form-container">
    <h2>Welcome Back!</h2>
    <form className = "login-form" onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <div className="username-label">
      <label>
        Username or Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      </div>
      <div className="password-label">
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      </div>
      <div className="submit-button">
      <button type="submit">Continue</button>
      </div>
      <div className="demo-button">
      <button type="submit" onClick={() => {
        setCredential('Demo-lition');
        setPassword('password');
      }}>Continue as demo user</button>
      </div>
    </form>
    </div>
  );
}

export default LoginForm;
