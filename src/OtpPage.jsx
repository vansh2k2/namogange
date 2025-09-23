import React from 'react'
import img from './assets/images/login-bg.jpg'
import img2 from './assets/images/logo.png'
const OtpPage = () => {
  return (
    <div style={{width:'100%',height:'100vh',backgroundImage:`url(${img})`,backgroundSize:'cover',backgroundPosition:'center'}}>
     <form className='flex justify-center'>
        <div className='w-75 h-80  mt-42'>
          <img src={img2} alt="" />
        <h3 className='flex justify-center mt-6 mb-4 text-2xl font-sans '>ADMIN</h3>
        <p className='text-sm mb-7'>An OTP has been sent to your registered mobile number. Please enter below for successful login.</p>
        <input className='pl-2' type="number" name="OTP" id="" placeholder='Enter your OTP number'/>
         <button className='mb-1' type='button'>Verify</button>
        <button type='button'>Resend</button>
        </div>
       </form>
       <footer className='pt-30'>
        <ul className='flex justify-center gap-2 text-sm'>
            <a href=""><li className='hover:text-zinc-700'>Namo Gange Trust</li></a>
            <li>|</li>
            <li className='text-black'>2017</li>
        </ul>
       </footer>
    </div>
  )
}

export default OtpPage
