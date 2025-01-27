import React from 'react'

const validate = (email,password) => {
  const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const  passwordRegex= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  return {
    email:emailRegex.test(email),
    password:passwordRegex.test(password)
  }
}

export default validate
