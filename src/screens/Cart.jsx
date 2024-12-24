import React, { useState } from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";
import { FaRegTrashAlt, FaTrashAlt } from 'react-icons/fa';

function Cart() {
    let data = useCart();
    let dispatch = useDispatchCart();

    // Check if the cart is empty
    if (data.length === 0) {
        return (
            <div className="flex h-screen py-10 px-10 gap-10">
                <div className="flex-1 hidden md:flex flex-col items-center justify-center gap-2  border rounded-2xl border-black">
                    <img src="/public/cart.png" className="w-72" alt="" />
                    <h2 className="text-4xl font-bold">The Cart is Empty!</h2>
                </div>
                <div className="w-80 bg-white shadow-lg flex flex-col p-4 border-l  border rounded-2xl border-black">
                    <h2 className="text-lg font-bold mb-4">Your Cart</h2>
                    <div className="flex flex-col justify-center items-center h-full">
                        <img src="/public/cart.png" className="md:hidden flex" alt="" />
                        <p className="flex-1  text-gray-500">Your cart is empty</p>
                    </div>
                </div>
            </div>
        );
    }

    const totalPrice = data.reduce(
        (total, item) => total + item.price * (item.quantity || 1),
        0
    );

    return (
        <div className="flex h-screen py-10 px-10 gap-10">
            {/* Left side: Order Preview */}
            <div className="hidden md:flex flex-col flex-1 bg-gray-100 p-6 overflow-y-auto border border-black  rounded-2xl">
                {/* <h2 className="text-lg font-bold mb-4">Order Preview</h2> */}
                <div className="flex justify-between items-center">
                    <h1 className="w-1/5 px-6">Food Name</h1>
                    <h1 className="w-1/5 text-center">Quantity</h1>
                    <h1 className="w-1/5 text-center">Size</h1>
                    <h1 className="w-1/5 text-center">Price</h1>
                    <h1 className="w-1/5 text-center">Action</h1>
                </div>
                <hr className="border border-black my-4" />
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center border-b py-3"
                    >
                        <h3 className="text-sm font-medium w-1/5 px-6 ">{item.name}</h3>
                        <p className="text-xs text-gray-500 w-1/5 flex justify-center items-center">
                            ${item.price.toFixed(2)} x {item.qty}
                        </p>
                        <p className="text-sm font-medium w-1/5 flex justify-center items-center">{item.size}</p> {/* Display Size */}
                        <div className="text-sm font-medium w-1/5 flex justify-center items-center">
                            ${(item.price * (item.qty || 1)).toFixed(2)}
                        </div>
                        <div className="flex justify-center w-1/5 text-red-600 cursor-pointer group">
                            <FaRegTrashAlt className="group-hover:hidden" />
                            <FaTrashAlt className="group-hover:block hidden" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Right side: Cart Details */}
            <div className="w-80 bg-white shadow-lg flex flex-col p-4 border-l rounded-2xl border border-black">
                <h2 className="text-lg font-bold mb-4">Your Cart</h2>

                <div className="flex-1 overflow-y-auto">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center border-b py-3"
                        >
                            <div className="w-1/3">
                                <h3 className="text-sm font-medium">{item.name}</h3>
                                <p className="text-xs text-gray-500">
                                    ${item.price.toFixed(2)} x {item.qty || 1}
                                </p>
                            </div>

                            <div className="w-1/5 text-sm font-medium text-right">
                                ${(item.price * (item.qty || 1)).toFixed(2)}
                            </div>
                            <div className="w-1/5 text-sm font-medium">{item.size}</div> {/* Display Size */}
                        </div>
                    ))}
                </div>

                <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-medium">Total</span>
                        <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
