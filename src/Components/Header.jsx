import React, { useEffect, useRef, useState } from 'react';
import { MdGroups } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaPaypal } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import profileImage from '../assets/images/profile.jpg';
import { IoPersonOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import { SlKey } from "react-icons/sl";
import { IoChevronDown } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className='h-10 w-full bg-[#4f5a67] flex justify-between items-center'>
      
      <div className='flex gap-10 items-center'>
        <h1 className='font-bold text-4xl text-[#337ab7] pl-6'>EXPO CRM</h1>
        <CiSearch className='text-gray-300 font-bold text-xl' />
      </div>
      
      <ul className='flex gap-4 items-center '>
        <li><a href=""><MdGroups className='text-xl text-gray-300'/></a></li>
        <li><a href=""><FaPaypal className='text-xl text-gray-300'/></a></li>
        <li><a href=""><IoNotifications className='text-xl text-gray-300'/></a></li>

        {/* Entire dropdown area wrapped in ref */}
        <div ref={dropdownRef} className='relative'>
          <div 
            className='flex items-center gap-2 cursor-pointer pr-4'
            onClick={toggleDropdown}
          >
            <img className='h-7 w-7 rounded-full' src={profileImage} alt="Profile" />
            <span className='text-gray-300 flex items-center gap-1'>ADMIN<IoChevronDown /></span>
          </div>

          {isOpen && (
            <ul className='absolute right-0 mt-2 w-48 shadow-lg bg-white rounded'>
              <li className='flex items-center gap-2 cursor-pointer px-4 py-2 hover:bg-gray-300'>
                <IoPersonOutline /> My Profile
              </li>
              <li className='flex items-center gap-2 cursor-pointer px-4 py-2 hover:bg-gray-300'>
                <IoMailOpenOutline /> My Inbox
              </li>
              <hr className='bg-emerald-50 text-sm opacity-10'/>
              <li className='flex items-center gap-2 cursor-pointer px-4 py-2 hover:bg-gray-300'>
                <SlKey /> Log Out
              </li>
            </ul>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Header;
