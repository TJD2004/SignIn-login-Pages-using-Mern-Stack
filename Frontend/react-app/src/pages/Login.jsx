import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import { handleError, handleSuccess } from '../utils'


const Login = () => {

  const [logInInfo, setLogInInfo] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(name, value);
    const copyLogInInfo = { ...logInInfo };
    copyLogInInfo[name] = value;
    setLogInInfo(copyLogInInfo);
  }
//  console.log('loginInfo -> ',loginInfo); 

  const handleLogin = async (e) => {
    e.preventDefault();
    const {email, password} = logInInfo;
    if(!email ||!password) {
      return handleError('email and password are required');
    }
    try {
      const url = "http://localhost:3000/auth/login";
      const response = await fetch(url, {
        method: "Post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(logInInfo)
      });
      const result = await response.json();
      const {success, message, jwtToken, user, error} = result;
      console.log(result);
      if(success) {
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', user);
        handleSuccess(message);
        setTimeout(() => {
          navigate('/home');
        },1000)
      }
      else if(error) {
        const detail= error?.details[0].message;
        console.log(detail);
        handleError(detail);
      }
      else if(error) {
        handleError(message);
      }
    } 
    catch(err) {
      handleError(err);
    }
  } 

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor='email'>Email</label>
            <input 
              onChange={handleChange}
              type="text" 
              name='email' 
              autoFocus 
              placeholder='Enter your email...' 
              value={logInInfo.email}/>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
            <input
              onChange={handleChange}
              type="text" 
              name='password' 
              autoFocus 
              placeholder='Enter your password...'
              value={logInInfo.password} />
        </div>
        <button type='submit'>Login</button>
        <span>
          Don't have an account?
          <Link to="/signup">Signup</Link>
        </span>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Login