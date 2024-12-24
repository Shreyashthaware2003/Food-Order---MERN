import '../App.css';
import React, { useState } from "react";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { PiSignInBold } from "react-icons/pi";
import { LuUserRoundPen } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

function Navbar() {

    // Search
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const toggleSearchInput = () => setIsSearchOpen(!isSearchOpen);

    // Menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Logout functionality
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/signin");
    };

    // order now functionality
    const handleOrderClick = () => {
        if (!localStorage.getItem('authToken')) {
            // Redirect to the login page if the user is not logged in
            navigate('/signin');
        }
    };


    return (
        <>
            <div className="relative w-full tracking-wider">
                {/* Background Image with Orange Overlay */}
                <div className="relative w-full h-screen">
                    <img src="bg.webp" alt="Background" className="absolute top-0 left-0 w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full bg-orange-600 md:opacity-0"></div> {/* Orange overlay */}
                </div>

                {/* Navbar */}
                <div className="absolute top-0 left-0 w-full px-2 md:px-6 z-50">
                    <div className="flex items-center justify-between py-4 px-4 bg-transparent">
                        <div className="hidden md:block"></div>

                        {/* Logo at the Center */}
                        <div className="flex justify-start md:justify-center items-center w-96 md:pl-56 gap-2">
                            <img src="dash.png" className="w-10" alt="" />
                            <h1 className="font-bold text-2xl text-white uppercase tracking-widest">
                                doordash
                            </h1>
                        </div>

                        {/* Navigation Menu and Buttons */}
                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex">
                                <ul className="flex justify-center items-center gap-8 cursor-pointer font-semibold capitalize text-white">
                                    {localStorage.getItem("authToken") && <Link>My Orders</Link>}
                                </ul>
                            </div>

                            <div className="hidden md:flex items-center gap-4">
                                {!localStorage.getItem("authToken") ? (
                                    <>
                                        <Link
                                            to="/signup"
                                            className="flex justify-center items-center gap-2 border border-white rounded-full px-3 py-2 text-sm font-semibold hover:scale-105 duration-500 hover:bg-white hover:text-black text-white"
                                        >
                                            <LuUserRoundPen />
                                            SignUp
                                        </Link>
                                        <Link
                                            to="/signin"
                                            className="flex justify-center items-center gap-2 border border-white rounded-full px-3 py-2 text-sm bg-yellow-200 font-semibold hover:scale-105 duration-500 text-black"
                                        >
                                            <PiSignInBold />
                                            SignIn
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to={'/cart'} className="flex justify-center items-center gap-2 border border-white rounded-full px-3 py-2 text-sm font-semibold hover:scale-105 duration-500 hover:bg-white cursor-pointer text-white hover:text-black">
                                            <Badge className='flex justify-center items-center gap-2' badgeContent={4} color="primary">
                                                My Cart <FaBasketShopping />
                                            </Badge>
                                        </Link>
                                        <div
                                            className="flex justify-center items-center gap-2 border border-white rounded-full px-3 py-2 text-sm font-semibold hover:scale-105 duration-500 bg-red-600 hover:text-white cursor-pointer text-white"
                                            onClick={handleLogout}
                                        >
                                            Logout <RiLogoutBoxLine />
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Hamburger Menu for Mobile */}
                            <div className="md:hidden relative">
                                <button className="text-2xl text-white my-2" onClick={toggleMenu}>
                                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                                </button>

                                {/* Mobile Menu */}
                                {isMenuOpen && (
                                    <div
                                        className="absolute top-10 right-0 p-4 shadow-xl rounded-md bg-white w-56 text-black transition-all duration-300 z-60"
                                        style={{
                                            animation: isMenuOpen
                                                ? "slideDown 0.3s ease-in-out"
                                                : "slideUp 0.9s ease-in-out",
                                        }}
                                    >
                                        <ul className="flex flex-col justify-center items-center gap-4 font-semibold capitalize">
                                            <Link>home</Link>
                                            {localStorage.getItem("authToken") && <Link>My Orders</Link>}
                                        </ul>

                                        <div className="flex flex-col gap-4 mt-4">
                                            {!localStorage.getItem("authToken") ? (
                                                <>
                                                    <Link
                                                        to="/signup"
                                                        className="flex justify-center items-center gap-2 border border-black rounded-full px-3 py-2 text-sm font-semibold hover:scale-105 duration-500 hover:bg-red-600 hover:text-white"
                                                    >
                                                        <LuUserRoundPen />
                                                        SignUp
                                                    </Link>
                                                    <Link
                                                        to="/signin"
                                                        className="flex justify-center items-center gap-2 border border-black rounded-full px-3 py-2 text-sm bg-yellow-200 font-semibold hover:scale-105 duration-500"
                                                    >
                                                        <PiSignInBold />
                                                        SignIn
                                                    </Link>
                                                </>
                                            ) : (
                                                <>
                                                    <Link to='/cart' className="flex justify-center items-center gap-2 border border-black rounded-full px-3 py-2 text-sm font-semibold hover:scale-105 duration-500 hover:bg-yellow-200 cursor-pointer">
                                                        My Cart <FaBasketShopping />
                                                    </Link>
                                                    <div
                                                        className="flex justify-center items-center gap-2 border border-black rounded-full px-3 py-2 text-sm font-semibold hover:scale-105 duration-500 hover:bg-red-600 hover:text-white cursor-pointer"
                                                        onClick={handleLogout}
                                                    >
                                                        Logout <RiLogoutBoxLine />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Centered on Image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-full px-4 sm:px-0 gap-4 text-white">
                    <h2 className="text-xl sm:text-3xl font-bold text-center w-full">
                        Order your favorite food and get it delivered.
                    </h2>
                    {!localStorage.getItem('authToken') ? (
                        <button
                            onClick={handleOrderClick}
                            className="border rounded-full border-white px-3 py-2 font-bold hover:scale-105 duration-500 text-center sm:w-auto"
                        >
                            Order Now
                        </button>
                    ) : (
                        <button
                            className="border rounded-full border-white px-3 py-2 font-bold hover:scale-105 duration-500 text-center sm:w-auto"
                        >
                            Order Now
                        </button>
                    )}

                </div>




            </div>
        </>
    );
}

export default Navbar;
