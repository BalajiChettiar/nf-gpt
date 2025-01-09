import React from 'react'
import { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignIn,setisSignIn]=useState(true);
  function SignUpToggle(){
    setisSignIn(!isSignIn);
  }
  return (
    <div className="text-white">
      <Header></Header>
      <img  className="absolute h-screen w-screen"src="https://th.bing.com/th/id/OIP.61E1UaSAiZvMq2HVos9M8gHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img>
      <form className="bg-black rounded-md bg-opacity-80 absolute mt-24 mx-auto left-0 right-0 w-1/3 ">
      <h1 className=" text-white mt-6 pt-7 ml-14 mr-14 font-bold text-3xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
      {!isSignIn && <input className="p-3 ml-14 w-9/12 mr-14 m-6 rounded-md bg-zinc-900 bg-opacity-60"label="Name" type="text" placeholder="Full Name"></input>}
        <input className="p-3 ml-14 w-9/12 mr-14 m-6 rounded-md bg-zinc-900 bg-opacity-60"label="email" type="text" placeholder="Email address or Phone No"></input>
        <br></br>
        <input className="p-3 ml-14 w-9/12 mr-14 m-6 rounded-md bg-zinc-900 bg-opacity-60 "label="password" type="password" placeholder="password"></input>
        <br></br>
        <button className="p-3 ml-14 w-9/12 mr-14 m-6 bg-red-800 rounded-md font-bold">{isSignIn ? "Sign In":"Sign Up"}</button>
        <p  onClick={SignUpToggle}className="p-3 ml-14 mr-14 m-4 cursor-pointer">{isSignIn ? "New to Netflix? Sign Up":"Already Registered? Sign In"}</p> 
      </form>
      8
    </div>
  )
}

export default Login
