import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import { handleError, handleSuccess } from '../utils'


const Signup = () => {

  const [signupInfo, setSignInfo] = useState({
    name:'',
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(name, value);
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignInfo(copySignupInfo);
  }
//  console.log('loginInfo -> ',loginInfo); 

  const handleSignup = async (e) => {
    e.preventDefault();
    const {name, email, password} = signupInfo;
    if(!name || !email ||!password) {
      return handleError('name, email and password are required');
    }
    try {
      const url = "http://localhost:3000/auth/signup";
      const response = await fetch(url, {
        method: "Post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo)
      });
      const result = await response.json();
      const {success, message, error}= result;
      if(success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login');
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
      <h1>SignUp</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor='name'>Name</label>
            <input 
              onChange={handleChange}
              type="text" 
              name='name' 
              autoFocus 
              placeholder='Enter your name...'
              value={signupInfo.name} />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
            <input 
              onChange={handleChange}
              type="text" 
              name='email' 
              autoFocus 
              placeholder='Enter your email...'
              value={signupInfo.email} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
            <input
              onChange={handleChange}
              type="text" 
              name='password' 
              autoFocus 
              placeholder='Enter your password...' 
              value={signupInfo.password}/>
        </div>
        <button type='submit'>Sign UP</button>
        <span>
          Already have an account ?
          <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Signup