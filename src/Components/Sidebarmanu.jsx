import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineHome } from 'react-icons/ai';
import { RiArrowRightUpBoxFill } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import { IoPersonOutline } from 'react-icons/io5';
import { HiShoppingCart } from 'react-icons/hi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarMenu = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleDropdownToggle = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex items-center justify-between z-50">
                <button
                    onClick={handleSidebarToggle}
                    aria-label="Toggle sidebar"
                    className="text-white focus:outline-none"
                >
                    <GiHamburgerMenu size={28} />
                </button>
                <span className="font-bold text-lg">Menu</span>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full z-40 bg-gray-800 text-gray-200 font-lato transition-transform duration-300 ease-in-out overflow-y-auto
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:w-72 w-64`}
            >
                {/* Close Button for Mobile */}
                <div className="md:hidden flex justify-end p-4">
                    <button
                        onClick={handleSidebarToggle}
                        aria-label="Close sidebar"
                        className="text-white text-2xl focus:outline-none"
                    >
                        ×
                    </button>
                </div>

                {/* Dashboard Link */}
                <div className="flex items-center gap-2 p-3 text-sm hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                    <AiOutlineHome size={18} className="text-gray-400" />
                    <span className="text-white font-semibold">Dashboard</span>
                </div>

                {/* Main Heading 1 */}
                <h2 className="px-4 pt-4 text-xs font-semibold uppercase text-gray-500 whitespace-nowrap">IHWE SECTION</h2>
                <hr className="my-2 border-gray-700" />

                {/* Dropdown list 1 */}
                <div
                    className="flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => handleDropdownToggle(1)}
                >
                    <div className="flex items-center gap-2">
                        <RiArrowRightUpBoxFill size={18} className="text-gray-400" />
                        <span className="text-sm whitespace-nowrap">IHWE Client Data 2026</span>
                    </div>
                    <IoIosArrowDown
                        size={14}
                        className={`transform transition-transform duration-300 ${openDropdown === 1 ? 'rotate-180' : ''}`}
                    />
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === 1 ? 'max-h-96' : 'max-h-0'}`}
                >
                    <ul className="text-xs">
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="/page1" className="block pl-10 py-2">
                                Add New Clients
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="/page2" className="block pl-10 py-2">
                                New Lead List
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="/page3" className="block pl-10 py-2">
                                Warm Class List
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="/page4" className="block pl-10 py-2">
                                Hot Client List
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="/page5" className="block pl-10 py-2">
                                Confirm Client List
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="/page6" className="block pl-10 py-2">
                                Cold Client List
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="/page7" className="block pl-10 py-2">
                                Master Data
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="/page8" className="block pl-10 py-2">
                                Raw Data List
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-700" />

                {/* Dropdown list 2 */}
                <div
                    className="flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => handleDropdownToggle(2)}
                >
                    <div className="flex items-center gap-2">
                        <RiArrowRightUpBoxFill size={18} className="text-gray-400" />
                        <span className="text-sm whitespace-nowrap">OLD Visitor Data</span>
                    </div>
                    <IoIosArrowDown
                        size={14}
                        className={`transform transition-transform duration-300 ${openDropdown === 2 ? 'rotate-180' : ''}`}
                    />
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === 2 ? 'max-h-96' : 'max-h-0'}`}
                >
                    <ul className="text-xs">
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Old Visitor List
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Upload Visitor List
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-700" />

                {/* Dropdown list 3 */}
                <div
                    className="flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => handleDropdownToggle(3)}
                >
                    <div className="flex items-center gap-2">
                        <RiArrowRightUpBoxFill size={18} className="text-gray-400" />
                        <span className="text-sm whitespace-nowrap">Web Visitor Data</span>
                    </div>
                    <IoIosArrowDown
                        size={14}
                        className={`transform transition-transform duration-300 ${openDropdown === 3 ? 'rotate-180' : ''}`}
                    />
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === 3 ? 'max-h-96' : 'max-h-0'}`}
                >
                    <ul className="text-xs">
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Add New Visitors
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                General Visitors List
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Corporate Visitors List
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Health Camp Visitors List
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Main Heading 2 */}
                <h2 className="px-4 pt-4 text-xs font-semibold uppercase text-gray-500 whitespace-nowrap">ORGANIC EXPO SECTION</h2>
                <hr className="my-2 border-gray-700" />

                {/* Dropdown list 4 */}
                <div
                    className="flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => handleDropdownToggle(4)}
                >
                    <div className="flex items-center gap-2">
                        <RiArrowRightUpBoxFill size={18} className="text-gray-400" />
                        <span className="text-sm whitespace-nowrap">Organic Expo Data 2026</span>
                    </div>
                    <IoIosArrowDown
                        size={14}
                        className={`transform transition-transform duration-300 ${openDropdown === 4 ? 'rotate-180' : ''}`}
                    />
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === 4 ? 'max-h-96' : 'max-h-0'}`}
                >
                    <ul className="text-xs">
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Add New Clients
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                New Lead List
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Warm Class List
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Hot Client List
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Confirm Client List
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Cold Client List
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Master Data
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Raw Data List
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-700" />

                {/* Dropdown list 5 */}
                <div
                    className="flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => handleDropdownToggle(5)}
                >
                    <div className="flex items-center gap-2">
                        <IoPersonOutline size={18} className="text-gray-400" />
                        <span className="text-sm whitespace-nowrap">Account Section</span>
                    </div>
                    <IoIosArrowDown
                        size={14}
                        className={`transform transition-transform duration-300 ${openDropdown === 5 ? 'rotate-180' : ''}`}
                    />
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === 5 ? 'max-h-96' : 'max-h-0'}`}
                >
                    <ul className="text-xs">
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Ledger Section
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Payment Request
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                innovoice & PYMT 25-26
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Est & PI 25-26
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Expenses List
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Local Advanced
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Clients Ledger
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-700" />

                {/* Dropdown list 6 */}
                <div
                    className="flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => handleDropdownToggle(6)}
                >
                    <div className="flex items-center gap-2">
                        <IoPersonOutline size={18} className="text-gray-400" />
                        <span className="text-sm whitespace-nowrap">Purchase Section</span>
                    </div>
                    <IoIosArrowDown
                        size={14}
                        className={`transform transition-transform duration-300 ${openDropdown === 6 ? 'rotate-180' : ''}`}
                    />
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === 6 ? 'max-h-96' : 'max-h-0'}`}
                >
                    <ul className="text-xs">
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Add Purchase
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Creditor Ladger
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-700" />

                {/* Dropdown list 7 */}
                <div
                    className="flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => handleDropdownToggle(7)}
                >
                    <div className="flex items-center gap-2">
                        <IoPersonOutline size={18} className="text-gray-400" />
                        <span className="text-sm whitespace-nowrap">PYMT Obligation</span>
                    </div>
                    <IoIosArrowDown
                        size={14}
                        className={`transform transition-transform duration-300 ${openDropdown === 7 ? 'rotate-180' : ''}`}
                    />
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === 7 ? 'max-h-96' : 'max-h-0'}`}
                >
                    <ul className="text-xs">
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Advance Expense
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Conveyance PYMT
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Miscellaneous PYMT
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-700" />

                {/* Dropdown list 8 */}
                <div
                    className="flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => handleDropdownToggle(8)}
                >
                    <div className="flex items-center gap-2">
                        <HiShoppingCart size={18} className="text-gray-400" />
                        <span className="text-sm whitespace-nowrap">Purchase Section</span>
                    </div>
                    <IoIosArrowDown
                        size={14}
                        className={`transform transition-transform duration-300 ${openDropdown === 8 ? 'rotate-180' : ''}`}
                    />
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === 8 ? 'max-h-96' : 'max-h-0'}`}
                >
                    <ul className="text-xs">
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Purchase Request
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Purchase Order
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Add Purchase Items
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Purchase Product Report
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                All P.O Report
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Add Work Order
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-700" />

                {/* Dropdown list 9 */}
                <div
                    className="flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => handleDropdownToggle(9)}
                >
                    <div className="flex items-center gap-2">
                        <HiShoppingCart size={18} className="text-gray-400" />
                        <span className="text-sm whitespace-nowrap">Store Section</span>
                    </div>
                    <IoIosArrowDown
                        size={14}
                        className={`transform transition-transform duration-300 ${openDropdown === 9 ? 'rotate-180' : ''}`}
                    />
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === 9 ? 'max-h-96' : 'max-h-0'}`}
                >
                    <ul className="text-xs">
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Purchase Request
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Inventory List
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-700" />

                {/* Dropdown list 10 */}
                <div
                    className="flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => handleDropdownToggle(10)}
                >
                    <div className="flex items-center gap-2">
                        <IoPersonOutline size={18} className="text-gray-400" />
                        <span className="text-sm whitespace-nowrap">What's App Data</span>
                    </div>
                    <IoIosArrowDown
                        size={14}
                        className={`transform transition-transform duration-300 ${openDropdown === 10 ? 'rotate-180' : ''}`}
                    />
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === 10 ? 'max-h-96' : 'max-h-0'}`}
                >
                    <ul className="text-xs">
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Data List
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-700" />

                {/* Main Heading 3 */}
                <h2 className="px-4 pt-4 text-xs font-semibold uppercase text-gray-500 whitespace-nowrap">ADMIN SECTION</h2>
                <hr className="my-2 border-gray-700" />

                {/* Dropdown list 11 */}
                <div
                    className="flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => handleDropdownToggle(11)}
                >
                    <div className="flex items-center gap-2">
                        <IoPersonOutline size={18} className="text-gray-400" />
                        <span className="text-sm whitespace-nowrap">Supplier Section</span>
                    </div>
                    <IoIosArrowDown
                        size={14}
                        className={`transform transition-transform duration-300 ${openDropdown === 11 ? 'rotate-180' : ''}`}
                    />
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === 11 ? 'max-h-96' : 'max-h-0'}`}
                >
                    <ul className="text-xs">
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Add Supplier/Vendor
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Supplier Inactive List
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Add Contractor
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Contractor Inactive List
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Add Suppliers Category
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Add Suppliers Type
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-700" />

                {/* Dropdown list 12 */}
                <div
                    className="flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => handleDropdownToggle(12)}
                >
                    <div className="flex items-center gap-2">
                        <IoPersonOutline size={18} className="text-gray-400" />
                        <span className="text-sm whitespace-nowrap">Product Section</span>
                    </div>
                    <IoIosArrowDown
                        size={14}
                        className={`transform transition-transform duration-300 ${openDropdown === 12 ? 'rotate-180' : ''}`}
                    />
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === 12 ? 'max-h-96' : 'max-h-0'}`}
                >
                    <ul className="text-xs">
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Add Product
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Product List
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Add Product Category
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Add Product Brand
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Add Product Form
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Add Product Unit
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-700" />

                {/* Dropdown list 13 */}
                <div
                    className="flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => handleDropdownToggle(13)}
                >
                    <div className="flex items-center gap-2">
                        <IoPersonOutline size={18} className="text-gray-400" />
                        <span className="text-sm whitespace-nowrap">Users</span>
                    </div>
                    <IoIosArrowDown
                        size={14}
                        className={`transform transition-transform duration-300 ${openDropdown === 13 ? 'rotate-180' : ''}`}
                    />
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === 13 ? 'max-h-96' : 'max-h-0'}`}
                >
                    <ul className="text-xs">
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Add User
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                User List
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-700" />

                {/* Dropdown list 14 */}
                <div
                    className="flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => handleDropdownToggle(14)}
                >
                    <div className="flex items-center gap-2">
                        <IoNotificationsOutline size={18} className="text-gray-400" />
                        <span className="text-sm whitespace-nowrap">Add By Admin</span>
                    </div>
                    <IoIosArrowDown
                        size={14}
                        className={`transform transition-transform duration-300 ${openDropdown === 14 ? 'rotate-180' : ''}`}
                    />
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === 14 ? 'max-h-96' : 'max-h-0'}`}
                >
                    <ul className="text-xs">
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Category
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Remark Length Fixed
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Add Target
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                WhatsApp Message
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Nature of Business
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Data Source
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Status
                            </Link>
                        </li>
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Add Bank
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-700" />

                {/* Dropdown list 15 */}
                <div
                    className="flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => handleDropdownToggle(15)}
                >
                    <div className="flex items-center gap-2">
                        <FaRegMoneyBillAlt size={18} className="text-gray-400" />
                        <span className="text-sm whitespace-nowrap">Estimates Items</span>
                    </div>
                    <IoIosArrowDown
                        size={14}
                        className={`transform transition-transform duration-300 ${openDropdown === 15 ? 'rotate-180' : ''}`}
                    />
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === 15 ? 'max-h-96' : 'max-h-0'}`}
                >
                    <ul className="text-xs">
                        <li className="hover:bg-gray-700 transition-colors duration-200">
                            <Link to="#" className="block pl-10 py-2">
                                Add Estimates Item
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-700" />
            </div>

            {/* Overlay for Mobile when Sidebar is Open */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                    onClick={handleSidebarToggle}
                ></div>
            )}
        </>
    );
};

export default SidebarMenu; 