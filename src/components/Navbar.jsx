import '../App.css'
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { PiSignInBold } from "react-icons/pi";
import { LuUserRoundPen } from "react-icons/lu";
import { FaBars } from "react-icons/fa";

function Navbar() {

    // Search
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearchInput = () => {
        setIsSearchOpen(!isSearchOpen);
    };


    // Menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="max-w-[1280px] mx-auto tracking-wider">
                <div className="fixed top-0 left-0 w-full px-6 md:px-24 bg-white shadow-md z-50">
                    <div className="flex flex-wrap justify-between items-center py-4 px-4">
                        {/* Logo */}
                        <h1 className="flex flex-nowrap justify-center items-center font-bold text-xl">
                            <span>f</span>
                            <span className="text-red-600">o</span>
                            <span>c</span>
                            <span className="text-red-600">o</span>
                        </h1>

                        {/* Navigation Menu */}
                        <div className="hidden md:flex">
                            <ul className="flex justify-center items-center gap-8 cursor-pointer font-semibold capitalize" style={{
                                animation: isSearchOpen ? "slideInFromRight 0.3s ease-in-out" : "slideOutToRight 0.3s ease-in-out",
                            }}>
                                <li>home</li>
                                <li>menu</li>
                                <li>service</li>
                                <li>shop</li>
                            </ul>
                        </div>

                        {/* Search and Cart Icons */}
                        <div className="flex justify-center items-center gap-6 text-lg cursor-pointer">
                            {isSearchOpen && (
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className='border-2 border-black rounded-full px-2 py-1 transition-all duration-300 ease-in-out opacity-100 scale-100'
                                    style={{
                                        animation: isSearchOpen ? "slideInFromRight 0.3s ease-in-out" : "slideOutToRight 0.3s ease-in-out",
                                    }}
                                />
                            )}
                            <FaSearch onClick={toggleSearchInput} style={{
                                animation: isSearchOpen ? "slideInFromRights 0.3s ease-in-out" : "slideOutToRight 0.3s ease-in-out",
                            }} />
                            <FaBasketShopping  style={{
                                animation: isSearchOpen ? "slideInFromRights 0.3s ease-in-out" : "slideOutToRight 0.3s ease-in-out",
                            }} />
                        </div>

                        {/* SignUp/SignIn Buttons */}
                        <div className="hidden md:flex flex-nowrap justify-center items-center gap-4">
                            <button className="flex flex-nowrap justify-center items-center gap-2 border border-black rounded-full px-3 py-2 text-sm font-semibold hover:scale-105 duration-500 hover:bg-red-600 hover:text-white">
                                <LuUserRoundPen />
                                SignUp
                            </button>
                            <button className="flex flex-nowrap justify-center items-center gap-2 border border-black rounded-full px-3 py-2 text-sm bg-yellow-200 font-semibold hover:scale-105 duration-500">
                                <PiSignInBold />
                                SignIn
                            </button>
                        </div>

                        {/* Hamburger Menu for Mobile */}
                        <div className="md:hidden flex items-center">
                            <button
                                className="text-2xl"
                                onClick={toggleMenu}
                            >
                                <FaBars />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-white shadow-lg p-4">
                            <ul className="flex flex-col gap-4 font-semibold capitalize">
                                <li>home</li>
                                <li>menu</li>
                                <li>service</li>
                                <li>shop</li>
                            </ul>
                            {/* <div className="flex justify-center gap-6 mt-4 text-lg">
                                <FaSearch />
                                <FaBasketShopping />
                            </div> */}
                            <div className="flex flex-col gap-4 mt-4">
                                <button className="flex justify-center items-center gap-2 border border-black rounded-full px-3 py-2 text-sm font-semibold hover:scale-105 duration-500 hover:bg-red-600 hover:text-white">
                                    <LuUserRoundPen />
                                    SignUp
                                </button>
                                <button className="flex justify-center items-center gap-2 border border-black rounded-full px-3 py-2 text-sm bg-yellow-200 font-semibold hover:scale-105 duration-500">
                                    <PiSignInBold />
                                    SignIn
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>


        </>
    )
}

export default Navbar