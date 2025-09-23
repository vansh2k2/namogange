import React, { useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { RiArrowRightUpBoxFill } from "react-icons/ri";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebarmanu = () => {

const [listopen,setlistopen]=useState(null)



const anotherclose =(id)=>{
      setlistopen(listopen===id?null:id);
};


  return (
    <div className='w-70 h-auto bg-[#596676]'>
     <div className='flex items-center cursor-pointer pl-4 text-sm gap-2 hover:bg-[#4f5a67]'>
       <h1 className='text-[#b8c0c6] text-xl'><AiOutlineHome /></h1>
      <h1 className='flex text-[#efefef] pt-2 '>Dashboard</h1>
     </div>
       
        {/*Main Heading 1 */}
       
     <h1 className='pl-3 text-[#b4b4b4] pt-3 text-base'>IHWE SECTION</h1>

     {/*Dropdown list1 */}

      <div className='flex items-center gap-2 pl-4 cursor-pointer pt-2 pb-2 text-sm'onClick={()=>{anotherclose(1)}}>
        <h1 className='text-[#b8c0c6] text-xl'><RiArrowRightUpBoxFill /></h1>
      <span className='text-[#efefef]'>IHWE Client Data 2026</span>
      <h1 className='text-[#b8c0c6] text-sm'></h1>
      <h1 className='text-[#efefef] font-bold'>{listopen===1?(<IoIosArrowDown />):(<RiArrowLeftWideFill />)}</h1>
      </div>
       <hr className='text-gray-50 opacity-10'/>
      {listopen===1 && (
        
          <ul className=' justify-items-center  inline text-sm'>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2' ><Link to="/page1" ><p className='text-[#efefef]'>Add New Clients</p></Link></li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'><Link to="/page2"><p className='text-[#efefef]'>New Lead List</p></Link></li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'><Link to="/page3"><p className='text-[#efefef]'>Warm Class List</p></Link></li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'><Link to="/page4"><p className='text-[#efefef]'>Hot Client List</p></Link></li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'><Link to="/page5"><p className='text-[#efefef]'>Confirm Client List</p></Link></li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'><Link to="/page6"><p className='text-[#efefef]'>Cold Client List</p></Link></li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'><Link to="/page7"><p className='text-[#efefef]'>Master Data</p></Link></li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'><Link to="/page8"><p className='text-[#efefef]'>Raw Data List</p></Link></li>
         
        </ul>
       
      )}
      
      {/* Dropdown list2*/}

     <div className='flex items-center gap-2 pl-4 cursor-pointer pt-2 pb-2 text-sm'onClick={()=>{anotherclose(2)}}>
        <h1 className='text-[#b8c0c6] text-xl'><RiArrowRightUpBoxFill /></h1>
      <span className='text-[#efefef]'>OLD Visitor Data</span>
      <h1 className='text-[#efefef] font-bold pl-11'>{listopen===2?(<IoIosArrowDown />):(<RiArrowLeftWideFill />)}</h1>
      </div>
      <hr className='text-gray-50 opacity-10'/>
      {listopen===2&& (
        <a href="">
          <ul className=' justify-items-center  text-[#efefef] inline text-sm'>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 '>Old Visitor List</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 '>Upload Visitor List</li>
        </ul>
        </a>
      )}

       {/* Dropdown list3*/}
       
        <div className='flex items-center gap-2 pl-4 cursor-pointer pt-2 pb-2 text-sm'onClick={()=>{anotherclose(3)}}>
        <h1 className='text-[#b8c0c6] text-xl'><RiArrowRightUpBoxFill /></h1>
      <span className='text-[#efefef] '>Web Visitor Data</span>
      <h1 className='text-[#efefef] font-bold pl-11'>{listopen===3?(<IoIosArrowDown />):(<RiArrowLeftWideFill />)}</h1>
      </div>
      <hr className='text-gray-50 opacity-10'/>
      {listopen===3 && (
        <a href="">
          <ul className=' justify-items-center  text-[#efefef] inline text-sm'>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 '>Add New Visitors</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 '>General Visistors List </li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 '>Corporate Visistors List</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 '>Health Camp Visistors List</li>
        </ul>
        </a>
      )}

          {/*Main Heading 2 */}

           <h1 className='pl-3 text-[#b4b4b4] pt-3 text-base'>ORGANIC EXPO SECTION</h1>

           {/* Dropdown list4*/}

           <div className='flex items-center gap-2 pl-4 cursor-pointer pt-2 pb-2 text-sm'onClick={()=>{anotherclose(4)}}>
        <h1 className='text-[#b8c0c6] text-xl'><RiArrowRightUpBoxFill /></h1>
      <span className='text-[#efefef]'>Organic Expo Data 2026</span>
      <h1 className='text-[#efefef] font-bold'>{listopen===4?(<IoIosArrowDown />):(<RiArrowLeftWideFill />)}</h1>
      </div>
       <hr className='text-gray-50 opacity-10'/>
      {listopen===4 && (
        <a href="">
          <ul className=' justify-items-center  text-[#efefef] inline text-sm'>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Add New Clients</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>New Lead List</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Warm Class List</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Hot Client List</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Confirm Client List</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Cold Client List</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Master Data</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Raw Data List</li>
        </ul>
        </a>
      )}

       {/* Dropdown list5*/}

       <div className='flex items-center gap-2 pl-4 cursor-pointer pt-2 pb-2 text-sm'onClick={()=>{anotherclose(5)}}>
        <h1 className='text-[#b8c0c6] text-xl'><IoPersonOutline /></h1>
      <span className='text-[#efefef]'>Account Section</span>
      <h1 className='text-[#efefef] font-bold1 pl-12'>{listopen===5?(<IoIosArrowDown />):(<RiArrowLeftWideFill />)}</h1>
      </div>
       <hr className='text-gray-50 opacity-10'/>
      {listopen===5 && (
        <a href="">
          <ul className=' justify-items-center  text-[#efefef] inline text-sm'>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Ledger Section</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Payment Request</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>innovoice & PYMT 25-26</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Est & PI 25-26</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Expenses List</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Local Advanced</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Clients Ledger</li>
        </ul>
        </a>
      )}


      {/* Dropdown list6*/}

       <div className='flex items-center gap-2 pl-4 cursor-pointer pt-2 pb-2 text-sm'onClick={()=>{anotherclose(6)}}>
        <h1 className='text-[#b8c0c6] text-xl'><IoPersonOutline /></h1>
      <span className='text-[#efefef]'>Purchase Section</span>
      <h1 className='text-[#efefef] font-bold pl-11'>{listopen===6?(<IoIosArrowDown />):(<RiArrowLeftWideFill />)}</h1>
      </div>
       <hr className='text-gray-50 opacity-10'/>
      {listopen===6 && (
        <a href="">
          <ul className=' justify-items-center  text-[#efefef] inline text-sm'>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Add Purchase</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Creditor Ladger</li>
        </ul>
        </a>
      )}

{/* Dropdown list7*/}

       <div className='flex items-center gap-2 pl-4 cursor-pointer pt-2 pb-2 text-sm'onClick={()=>{anotherclose(7)}}>
        <h1 className='text-[#b8c0c6] text-xl'><IoPersonOutline /></h1>
      <span className='text-[#efefef]'>PYMT Obligation</span>
      <h1 className='text-[#efefef] font-bold1 pl-11'>{listopen===7?(<IoIosArrowDown />):(<RiArrowLeftWideFill />)}</h1>
      </div>
       <hr className='text-gray-50 opacity-10'/>
      {listopen===7 && (
        <a href="">
          <ul className=' justify-items-center  text-[#efefef] inline text-sm'>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Advance Expense</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Conveyance PYMT</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Miscellaneous PYMT</li>
        </ul>
        </a>
      )}

 {/* Dropdown list8*/}

       <div className='flex items-center gap-2 pl-4 cursor-pointer pt-2 pb-2 text-sm'onClick={()=>{anotherclose(8)}}>
        <h1 className='text-[#b8c0c6] text-xl'><HiShoppingCart /></h1>
      <span className='text-[#efefef]'>Purchase Section</span>
      <h1 className='text-[#efefef] font-bold1 pl-11'>{listopen===8?(<IoIosArrowDown />):(<RiArrowLeftWideFill />)}</h1>
      </div>
       <hr className='text-gray-50 opacity-10'/>
      {listopen===8 && (
        <a href="">
          <ul className=' justify-items-center  text-[#efefef] inline text-sm'>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Purchase Request</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Purchase Order</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Add Purchase Items</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Purchase Product Report</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>All P.O Report</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Add Work Order</li>
        </ul>
        </a>
      )}

 {/* Dropdown list9*/}

       <div className='flex items-center gap-2 pl-4 cursor-pointer pt-2 pb-2 text-sm'onClick={()=>{anotherclose(9)}}>
        <h1 className='text-[#b8c0c6] text-xl'><HiShoppingCart /></h1>
      <span className='text-[#efefef]'>Store Section</span>
      <h1 className='text-[#efefef] font-bold1 pl-17'>{listopen===9?(<IoIosArrowDown />):(<RiArrowLeftWideFill />)}</h1>
      </div>
       <hr className='text-gray-50 opacity-10'/>
      {listopen===9 && (
        <a href="">
          <ul className=' justify-items-center  text-[#efefef] inline text-sm'>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Purchase Request</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Inventory List</li>
        </ul>
        </a>
      )}

 {/* Dropdown list10*/}

       <div className='flex items-center gap-2 pl-4 cursor-pointer pt-2 pb-2 text-sm'onClick={()=>{anotherclose(10)}}>
        <h1 className='text-[#b8c0c6] text-xl'><IoPersonOutline /></h1>
      <span className='text-[#efefef]'>What's App Data</span>
      <h1 className='text-[#efefef] font-bold1 pl-11'>{listopen===10?(<IoIosArrowDown />):(<RiArrowLeftWideFill />)}</h1>
      </div>
       <hr className='text-gray-50 opacity-10'/>
      {listopen===10 && (
        <a href="">
          <ul className=' justify-items-center  text-[#efefef] inline text-sm'>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Data List</li>
        </ul>
        </a>
      )}

      {/*Main Heading 3 */}

    <h1 className='pl-3 text-[#b4b4b4] pt-3 text-base'>ADMIN SECTION</h1>


{/* Dropdown list11*/}

       <div className='flex items-center gap-2 pl-4 cursor-pointer pt-2 pb-2 text-sm'onClick={()=>{anotherclose(11)}}>
        <h1 className='text-[#b8c0c6] text-xl'><IoPersonOutline /></h1>
      <span className='text-[#efefef]'>Supplier Section</span>
      <h1 className='text-[#efefef] font-bold1 pl-12'>{listopen===11?(<IoIosArrowDown />):(<RiArrowLeftWideFill />)}</h1>
      </div>
       <hr className='text-gray-50 opacity-10'/>
      {listopen===11 && (
        <a href="">
          <ul className=' justify-items-center  text-[#efefef] inline text-sm'>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Add Supplier/Vendor</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Supplier Inactive List</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Add Contractor</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Contractor Inactive List</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Add Suppliers Category</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Add Suppliers Type</li>
        </ul>
        </a>
      )}


{/* Dropdown list12*/}

       <div className='flex items-center gap-2 pl-4 cursor-pointer pt-2 pb-2 text-sm'onClick={()=>{anotherclose(12)}}>
        <h1 className='text-[#b8c0c6] text-xl'><IoPersonOutline /></h1>
      <span className='text-[#efefef]'>Product Section</span>
      <h1 className='text-[#efefef] font-bold1 pl-12'>{listopen===12?(<IoIosArrowDown />):(<RiArrowLeftWideFill />)}</h1>
      </div>
       <hr className='text-gray-50 opacity-10'/>
      {listopen===12 && (
        <a href="">
          <ul className=' justify-items-center  text-[#efefef] inline text-sm'>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Add Product</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Product List</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Add Product Category</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Add Product Brand</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Add Product Form</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Add Product Unit</li>
        </ul>
        </a>
      )}

{/* Dropdown list13*/}

       <div className='flex items-center gap-2 pl-4 cursor-pointer pt-2 pb-2 text-sm'onClick={()=>{anotherclose(13)}}>
        <h1 className='text-[#b8c0c6] text-xl'><IoPersonOutline /></h1>
      <span className='text-[#efefef]'>Users</span>
      <h1 className='text-[#efefef] font-bold1 pl-28'>{listopen===13?(<IoIosArrowDown />):(<RiArrowLeftWideFill />)}</h1>
      </div>
       <hr className='text-gray-50 opacity-10'/>
      {listopen===13 && (
        <a href="">
          <ul className=' justify-items-center  text-[#efefef] inline text-sm'>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Add User</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>User List</li>
        </ul>
        </a>
      )}

{/* Dropdown list14*/}

       <div className='flex items-center gap-2 pl-4 cursor-pointer pt-2 pb-2 text-sm'onClick={()=>{anotherclose(14)}}>
        <h1 className='text-[#b8c0c6] text-xl'><IoNotificationsOutline /></h1>
      <span className='text-[#efefef]'>Add By Admin</span>
      <h1 className='text-[#efefef] font-bold1 pl-14'>{listopen===14?(<IoIosArrowDown />):(<RiArrowLeftWideFill />)}</h1>
      </div>
       <hr className='text-gray-50 opacity-10'/>
      {listopen===14 && (
        <a href="">
          <ul className=' justify-items-center  text-[#efefef] inline text-sm'>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Category</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Remark Length Fixed</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Add Target</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>WhatsApp Message</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Nature of Business</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Data Source</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Status</li>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Add Bank</li>
        </ul>
        </a>
      )}

{/* Dropdown list15*/}

       <div className='flex items-center gap-2 pl-4 cursor-pointer pt-2 pb-2 text-sm'onClick={()=>{anotherclose(15)}}>
        <h1 className='text-[#b8c0c6] text-xl'><FaRegMoneyBillAlt /></h1>
      <span className='text-[#efefef]'>Estimates Items</span>
      <h1 className='text-[#efefef] font-bold1 pl-12'>{listopen===15?(<IoIosArrowDown />):(<RiArrowLeftWideFill />)}</h1>
      </div>
       <hr className='text-gray-50 opacity-10'/>
      {listopen===15 && (
        <a href="">
          <ul className=' justify-items-center  text-[#efefef] inline text-sm'>
         <li className=' hover:bg-[#4f5a67] pt-2 pl-12 pb-2'>Add Estimates Item</li>
        </ul>
        </a>
      )}


    </div>
  )
}

export default Sidebarmanu
