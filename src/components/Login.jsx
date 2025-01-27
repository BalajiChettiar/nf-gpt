import React from 'react'
import validate from "../utils/validate"
import { useState,useRef} from 'react'
import Header from './Header'
import {auth} from '../utils/firebase.js'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { profile_avatar,Netflix_LOGO } from '../utils/constant.js'
import { BG_URL } from '../utils/constant.js'

const Login = () => {
  const[isSignIn,setisSignIn]=useState(true);
  const [ErrorMsg,setErrorMsg]=useState("");
  const navigate=useNavigate()
  const email=useRef(null);
  const password = useRef(null);

  function SignUpToggle(){
    setisSignIn(!isSignIn);
  }
  function handleSignIn(){
     const object=validate(email.current.value,password.current.value);
     
     if(!isSignIn) {
      if(!object.email && !object.password) {setErrorMsg("Email and Password is Invalid"); return ;}
      if(!object.email) {setErrorMsg("Email is Invaid"); return;}
      if(!object.password) {setErrorMsg("Password is Invalid"); return; }
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value).then((userCredential) => {
     const user = userCredential.user;
      
      navigate("/browse")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMsg(errorMessage);
    });}
     else {signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       
        navigate("/browse")

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
        
     }

    
  }
  return (
    <div className="text-white">
      <Header></Header>
      <img  className="absolute h-screen w-screen"src={BG_URL}></img>
      <form className="bg-black rounded-md bg-opacity-80 absolute mt-24 mx-auto left-0 right-0 w-1/3 ">
      <h1 className=" text-white mt-6 pt-7 ml-14 mr-14 font-bold text-3xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
      {!isSignIn && <input className="p-33 ml-14 w-9/12 mr-14 m-6 rounded-md bg-zinc-900 bg-opacity-60"label="Name" type="text" placeholder="Full Name"></input>}
        <input ref={email} className="p-3 ml-14 w-9/12 mr-14 m-6 rounded-md bg-zinc-900 bg-opacity-60"label="email" type="text" placeholder="Email address or Phone No"></input>
        <br></br>
        <input ref={password} className="p-3 ml-14 w-9/12 mr-14 m-6 rounded-md bg-zinc-900 bg-opacity-60 "label="password" type="password" placeholder="Password"></input>
        <p className="ml-14 text-red-700 font-bold">{ErrorMsg}</p>
        <br></br>
        <button onClick={(e)=>{
          e.preventDefault()
          handleSignIn()
        }} className="p-3 ml-14 w-9/12 mr-14 m-6 bg-red-800 rounded-md font-bold">{isSignIn ? "Sign In":"Sign Up"}</button>
        <p  onClick={SignUpToggle}className="p-3 ml-14 mr-14 m-4 cursor-pointer">{isSignIn ? "New to Netflix? Sign Up":"Already Registered? Sign In"}</p> 
      </form>
    
    </div>
  )
}

export default Login
