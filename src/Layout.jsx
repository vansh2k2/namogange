import React from 'react'
import Sidebarmanu from './Components/Sidebarmanu'
import Dashboard from './Components/Dashboard'



const Layout = () => {
  return (
    <>
    <div className='flex'>
      <Sidebarmanu/>
      <Dashboard/>
      
    </div>
    </>
  )
}

export default Layout
