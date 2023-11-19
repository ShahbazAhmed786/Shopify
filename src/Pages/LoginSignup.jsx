import React, { useState } from 'react'
import './Login.css'
export const LoginSignup = () => {
const use=()=>{
  return alert("Sign up Sucessfully")
}
  const [action,setAction]=useState("Sign up")
  return (
    <div className='login-sinup'> 
    <div className='login'>
      <h1>{action}</h1>
   <hr />
    <div className="login-field">
      {action==="Login"?<div></div>:<input type="text"placeholder='Your Name' />}
      
      <input type="email"placeholder='Email Address' />
      <input type="password"placeholder='Password' />
      {action==="Sign up"?<div></div>:<p className="login-singn">Lost Password?<span className={action==="Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>click here</span></p>}
      {action==="Login"?<div></div>: <p className="login-singn1">Already have an account?<span className={action==="Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login here</span></p>}
      {action==="Login"?<div></div>:<div className="login-check">
    <input type="checkbox" />
    <p>By continuing i agree to the terms of use & privacy policy</p>
  </div>}
  {action==="Sign up"?<div></div>:<div className="login-check">
    <input type="checkbox" />
    <p>By continuing i agree to the terms of use & privacy policy</p>
  </div>}
 
  {action==="Login"?<div></div>:<button className={action==="Login"?"submit gray":"submit"} onClick={()=>{use()}}>Continue</button>}
  {action==="Sign up"?<div></div>:<button className={action==="Login"?"submit gray":"submit"} onClick={()=>{use()}}>Login</button>}
    </div>
  </div>
    </div>
  )
}
