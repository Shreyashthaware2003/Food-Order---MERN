import '../App.css'
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { PiSignInBold } from "react-icons/pi";
import { LuUserRoundPen } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
// import SignIn from '../screens/SignIn';
import { RiLogoutBoxLine } from "react-icons/ri";

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

    // logout functionality

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/signin");
    }

    return (
        <>
            <div className="max-w-[1280px] mx-auto tracking-wider">
                <div className="fixed top-0 left-0 w-full px-6 md:px-24 bg-white shadow-md z-50">
                    <div className="grid grid-cols-2  md:grid-cols-3 items-center py-4 px-4 gap-4">
                        {/* Logo */}
                        <div className="flex items-center">
                            <h1 className="flex flex-nowrap justify-center items-center font-bold text-3xl">
                                <span>f</span>
                                <span className="text-red-600">o</span>
                                <span>c</span>
                                <span className="text-red-600">o</span>
                            </h1>
                        </div>

                        {/* Navigation Menu */}
                        <div className="hidden md:flex justify-center items-center">
                            <ul
                                className="flex justify-center items-center gap-8 cursor-pointer font-semibold capitalize"
                                style={{
                                    animation: isSearchOpen
                                        ? "slideInFromRight 0.3s ease-in-out"
                                        : "slideOutToRight 0.3s ease-in-out",
                                }}
                            >
                                <Link>home</Link>
                                {/* <Link>menu</Link>
                                <Link>service</Link>
                                <Link>shop</Link> */}
                                {localStorage.getItem("authToken") && <Link>My Orders</Link>}
                            </ul>
                        </div>

                        {/* Search and Cart Icons */}
                        {/* <div className="flex justify-center items-center text-lg gap-6">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="hidden md:block w-40 border-2 border-black rounded-full px-2 py-1 transition-all duration-300 ease-in-out"
                            />
                            {isSearchOpen && (
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="border-2 border-black rounded-full px-2 py-1 transition-all duration-300 ease-in-out"
                                    style={{
                                        animation: isSearchOpen
                                            ? "slideInFromRight 0.3s ease-in-out"
                                            : "slideOutToRight 0.3s ease-in-out",
                                    }}
                                />
                            )}
                        </div> */}

                        {/* SignUp/SignIn or My Cart/Logout */}
                        <div className="hidden md:flex justify-end items-center gap-4">
                            {!localStorage.getItem("authToken") ? (
                                <>
                                    <Link
                                        to={"/signup"}
                                        className="flex justify-center items-center gap-2 border border-black rounded-full px-3 py-2 text-sm font-semibold hover:scale-105 duration-500 hover:bg-red-600 hover:text-white"
                                    >
                                        <LuUserRoundPen />
                                        SignUp
                                    </Link>
                                    <Link
                                        to={"/signin"}
                                        className="flex justify-center items-center gap-2 border border-black rounded-full px-3 py-2 text-sm bg-yellow-200 font-semibold hover:scale-105 duration-500"
                                    >
                                        <PiSignInBold />
                                        SignIn
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <div className="flex justify-center items-center gap-2 border border-black rounded-full px-3 py-2 text-sm font-semibold hover:scale-105 duration-500 hover:bg-yellow-200 cursor-pointer">
                                        My Cart <FaBasketShopping />
                                    </div>
                                    <div className="flex justify-center items-center gap-2 border border-black rounded-full px-3 py-2 text-sm font-semibold hover:scale-105 duration-500 hover:bg-red-600 hover:text-white cursor-pointer" onClick={handleLogout}>
                                        Logout <RiLogoutBoxLine />
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Hamburger Menu for Mobile */}
                        <div className="flex justify-end items-center md:hidden">
                            <button
                                className="text-2xl"
                                onClick={toggleMenu}
                            >
                                {isMenuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>


                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div
                        className={`md:hidden p-4 mt-24 shadow-xl rounded-md mx-4 bg-white transition-all duration-300 `} style={{
                            animation: isMenuOpen ? 'slideDown 0.3s ease-in-out' : 'slideUp 0.9s ease-in-out',
                        }}
                    >
                        <ul className="flex flex-col justify-center items-center gap-4 font-semibold capitalize">
                            <Link>home</Link>
                            {/* <Link>menu</Link>
                            <Link>service</Link>
                            <Link>shop</Link> */}
                            {localStorage.getItem("authToken") && <Link>My Orders</Link>}
                        </ul>

                        <div className="flex flex-col gap-4 mt-4">
                            {!localStorage.getItem("authToken") ? (
                                <>
                                    <Link
                                        to={'/signup'}
                                        className="flex justify-center items-center gap-2 border border-black rounded-full px-3 py-2 text-sm font-semibold hover:scale-105 duration-500 hover:bg-red-600 hover:text-white"
                                    >
                                        <LuUserRoundPen />
                                        SignUp
                                    </Link>
                                    <Link
                                        to={'/signin'}
                                        className="flex justify-center items-center gap-2 border border-black rounded-full px-3 py-2 text-sm bg-yellow-200 font-semibold hover:scale-105 duration-500"
                                    >
                                        <PiSignInBold />
                                        SignIn
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <div className="flex justify-center items-center gap-2 border border-black rounded-full px-3 py-2 text-sm font-semibold hover:scale-105 duration-500 hover:bg-yellow-200 cursor-pointer">
                                        My Cart <FaBasketShopping />
                                    </div>
                                    <div className="flex justify-center items-center gap-2 border border-black rounded-full px-3 py-2 text-sm font-semibold hover:scale-105 duration-500 hover:bg-red-600 hover:text-white cursor-pointer" onClick={handleLogout}>
                                        Logout <RiLogoutBoxLine />
                                    </div>
                                </>
                            )}
                        </div>

                    </div>
                )}

            </div >


        </>
    )
}

export default Navbar