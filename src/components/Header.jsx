import React from 'react'
import { useEffect } from 'react'
import {auth} from "../utils/firebase"
import { signOut } from 'firebase/auth'
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import { onAuthStateChanged } from 'firebase/auth'
import {addUser,removeUser} from "../utils/userSlice"
import { profile_avatar,Netflix_LOGO } from '../utils/constant.js'
import { useSelector } from 'react-redux'
import { toggleGptSearch } from '../utils/gptSlice.js'


const Header = () => {
  const gptSearch = useSelector((store)=>store.gpt.gptSearch)
  
  const navigate=useNavigate()
  const Dispatch = useDispatch()
  const handleGptSearch = ()=>{
      Dispatch(toggleGptSearch())
  }
  useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
         
          const {uid,displayName,email} = user.uid;
          Dispatch(addUser({uid:uid,displayName:displayName,email:email}))
          navigate("/browse")
          
        } else {
          Dispatch(removeUser())
          navigate("/")
        }
      });
      
    },[])
  const handleSignOut=()=>{
  
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
    
  }
  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between " >
        <img  className="w-44 z-10 mx-auto md:mx-0"  src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt="Netflix LOGO"></img>
        
        { auth.currentUser && (<div className="flex">
         { <button onClick={handleGptSearch} className="bg-red-800 font-bold text-white px-3 mt-8 mr-4 h-12 rounded-md">{gptSearch ? "Home Page" :"GPT Search"}</button>}
          <button onClick={handleSignOut} className= "z-10 m-4 p-2 h-12 rounded-lg mt-8 mr-6 text-red-800 font-bold bg-white">➜</button></div>)}
    </div>
  )
}

export default Header
