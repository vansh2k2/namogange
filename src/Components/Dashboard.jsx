import React from 'react'
import { FiPrinter } from "react-icons/fi";
import {Route, Routes} from 'react-router-dom';
import Page1 from '../Pages of Section One/Page1';
import Page2 from '../Pages of Section One/Page2';
import Page3 from '../Pages of Section One/Page3';
import Page4 from '../Pages of Section One/Page4';
import Page5 from '../Pages of Section One/Page5';
import Page6 from '../Pages of Section One/Page6';
import Page7 from '../Pages of Section One/Page7';
import Page8 from '../Pages of Section One/Page8';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <>
   
 {/* <div className='w-full h-auto bg-[#eef1f5] flex justify-between'>
      <div className='bg-white flex justify-between h-10 w-full'>
      <Link to='/'><h1 className='font-medium text-xl  text-[#4f5a67] pl-4'>DASHBOARD</h1></Link>
      <div className=' flex items-center pr-4 gap-2'>
      <button1 className='h-7 w-25 border-2 boder-[#4f5a67] text-sm bg-white hover:bg-[#ccc] cursor-pointer flex items-center justify-center'>Add Lead </button1>
      <button1 className='h-7 w-25 border-2 boder-[#4f5a67] text-sm bg-white hover:bg-[#ccc] cursor-pointer flex items-center justify-center'>Activity Log</button1>
      <button1 className='h-7 w-25 border-2 boder-[#4f5a67] text-sm bg-white hover:bg-[#ccc] cursor-pointer flex items-center gap-2 justify-center'><FiPrinter />Print</button1>
      </div>
      </div>
    </div> */}
    
    <Routes>
    <Route path='/page1' element={<Page1/>} />
    <Route path='/page2' element={<Page2/>} />
    <Route path='/page3' element={<Page3/>} />
    <Route path='/page4' element={<Page4/>} />
    <Route path='/page5' element={<Page5/>} />
    <Route path='/page6' element={<Page6/>} />
    <Route path='/page7' element={<Page7/>} />
    <Route path='/page8' element={<Page8/>} />
   </Routes>






   
    </>
  )
}

export default Dashboard
