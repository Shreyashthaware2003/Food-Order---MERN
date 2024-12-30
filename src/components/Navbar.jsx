import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import { FaBasketShopping } from "react-icons/fa6";
import { RiLogoutBoxLine } from "react-icons/ri";
import { PiSignInBold } from "react-icons/pi";
import { LuUserRoundPen } from "react-icons/lu";
import { useCart } from "../components/ContextReducer";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const cartData = useCart();
    const endOfNavbarRef = useRef(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/signin");
    };

    const handleOrderClick = () => {
        if (!localStorage.getItem('authToken')) {
            navigate('/signin');
        } else if (endOfNavbarRef.current) {
            endOfNavbarRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="relative w-full">
            {/* Navbar */}
            <div
                className={`fixed top-0 left-0 w-full z-50 px-4 md:px-8 md:py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? "bg-[#F44322] shadow-lg" : "bg-transparent"
                    }`}
            >
                <div className={`hidden md:block ${isScrolled ? 'hidden' : 'block'}`}></div>
                <div className={`flex items-center justify-between py-4 px-2 md:px-4 bg-transparent ${isScrolled ? 'w-full' : ''}`}>
                    <div className={`flex justify-start items-center transition-all duration-300 md:w-96 gap-2 ${isScrolled ? 'pl-0 w-full justify-start' : 'md:pl-56 md:justify-center'}`}>
                        <img src="dash.png" className="w-10" alt="Logo" />
                        <h1 className="text-white text-xl md:text-2xl font-bold uppercase">
                            DoorDash
                        </h1>
                    </div>
                </div>

                <div className={`hidden md:flex items-center gap-4 ${isScrolled ? 'w-[376px] justify-end' : ''}`}>
                    {localStorage.getItem("authToken") && <Link to={'/myorder'} className="text-white">My Orders</Link>}
                    {!localStorage.getItem("authToken") ? (
                        <>
                            <Link
                                to="/signup"
                                className="flex justify-center items-center gap-2 hover:scale-105 duration-500 text-white border border-white rounded-full px-3 py-2 text-sm font-semibold hover:bg-white hover:text-black"
                            >
                                SignUp<LuUserRoundPen />
                            </Link>
                            <Link
                                to="/signin"
                                className="flex justify-center items-center gap-2 hover:scale-105 duration-500 text-black bg-yellow-200 border border-black rounded-full px-3 py-2 text-sm font-semibold"
                            >
                                SignIn <PiSignInBold />
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/cart"
                                className="text-white flex justify-center items-center gap-2 hover:scale-105 duration-500 hover:bg-yellow-200 hover:text-black hover:border-black border border-white rounded-full px-3 py-2 text-sm font-semibold"
                            >
                                <Badge badgeContent={cartData.length} className="flex justify-center items-center gap-2" color="primary">
                                    My Cart<FaBasketShopping />
                                </Badge>
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="flex justify-center items-center gap-2 hover:scale-105 duration-500 text-white bg-red-600 border border-black rounded-full px-3 py-2 text-sm font-semibold"
                            >
                                Logout<RiLogoutBoxLine />
                            </button>
                        </>
                    )}
                </div>

                <button
                    className="text-white text-2xl md:hidden"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
                {isMenuOpen && (
                    <div
                        className="absolute top-16 right-4 p-4 shadow-xl rounded-md bg-white w-56 text-black transition-all duration-300 z-60"
                        style={{
                            animation: isMenuOpen
                                ? "slideDown 0.3s ease-in-out"
                                : "slideUp 0.9s ease-in-out",
                        }}
                    >
                        <ul className="flex flex-col justify-center items-center gap-4 font-semibold capitalize">
                            <Link>home</Link>
                            {localStorage.getItem("authToken") && <Link to={'/myorder'}>My Orders</Link>}
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
                                        <Badge badgeContent={cartData.length} className="flex justify-center items-center gap-2" color="primary">
                                            My Cart<FaBasketShopping />
                                        </Badge>
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

            {/* Hero Section with Background */}
            <div className="w-full h-screen bg-cover bg-center bg-[url('/public/bg1.webp')] md:bg-[url('/public/bg.webp')] relative">
                {/* Black overlay for small devices */}
                <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-bold md:w-1/2">
                        Order your favorite food and get it delivered.
                    </h2>
                    <button
                        onClick={handleOrderClick}
                        className="mt-6 border border-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black duration-500"
                    >
                        Order Now
                    </button>
                </div>
            </div>




            {/* End of Navbar Target Section */}
            <div ref={endOfNavbarRef} />
        </div>
    );
}

export default Navbar;
