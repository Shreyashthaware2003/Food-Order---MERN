import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { PiSignInBold } from "react-icons/pi";
import { LuUserRoundPen } from "react-icons/lu";

function Navbar() {
    return (
        <>
            <div className='max-w-[1280px] mx-auto tracking-wider'>
                <div className='flex justify-between items-center py-6 px-4'>
                    <h1 className='flex flex-nowrap justify-center items-center font-bold text-xl'>
                        <span>f</span>
                        <span className='text-red-600'>o</span>
                        <span>c</span>
                        <span className='text-red-600'>o</span>
                    </h1>
                    <div className=''>
                        <ul className='flex justify-center items-center gap-16 cursor-pointer font-semibold capitalize flex-nowrap'>
                            <li>home</li>
                            <li>menu</li>
                            <li>service</li>
                            <li>shop</li>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center gap-8 text-lg cursor-pointer'>
                        <FaSearch />
                        <FaBasketShopping />
                    </div>
                    <div className='flex flex-nowrap justify-center items-center gap-4'>
                        <button className='flex flex-nowrap justify-center items-center gap-2 border border-black rounded-full px-2 py-2 text-sm font-semibold hover:scale-105 duration-500 hover:bg-red-600 hover:text-white'><LuUserRoundPen />SignUp</button>
                        <button className='flex flex-nowrap justify-center items-center gap-2 border border-black rounded-full px-2 py-2 text-sm bg-yellow-200 font-semibold hover:scale-105 duration-500'><PiSignInBold />SignIn</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar