import React from 'react'
import mainImage from '../assets/images/login-bg.jpg'
import midImage from '../assets/images/logo.png'


const Login = () => {
  return (
    
      <div style={{ width:'100%', height:'100vh',backgroundImage:`URL(${mainImage})`,backgroundSize:'cover',backgroundPosition:'center'}}>
       <form className='flex justify-center'>
        <div className='w-75 h-80  mt-42'>
          <img src={midImage} alt="" />
        <h3 className='flex justify-center mt-6 mb-4 text-2xl font-sans '>USER LOGIN</h3>
        <label  htmlFor="Username">Username</label>
        <input  type="text" name="username" id="" />
         <label  htmlFor="Password">Password</label>
        <input  type="text" name="password" id="" />
        <button type='submit'>LOGIN</button>
        </div>
       </form>
      </div>

  )
}

export default Login
