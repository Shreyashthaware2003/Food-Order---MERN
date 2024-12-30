import React from "react";
import { Link, useNavigate } from "react-router-dom";

const orders = [
    {
        id: 1,
        item: "Chicken Biryani",
        image: "Chicken-Biryani.jpg", // Replace with actual image URLs
        price: 12.99,
        date: "2024-12-28",
        status: "Delivered",
    },
    {
        id: 2,
        item: "Margherita Pizza",
        image: "margherita-pizza.jpg",
        price: 9.99,
        date: "2024-12-27",
        status: "In Progress",
    },
    {
        id: 3,
        item: "Pasta Alfredo",
        image: "Fettuccine-Alfredo.jpg",
        price: 10.49,
        date: "2024-12-25",
        status: "Cancelled",
    },
    // Add more orders as needed...
];

const MyOrders = () => {
    const navigate = useNavigate(); // Hook to navigate after logout

    const handleLogout = () => {
        // Clear the authToken from localStorage to log the user out
        localStorage.removeItem("authToken");

        // Optionally, you can add a message to inform the user they have logged out
        alert("You have been logged out.");

        // Navigate to the sign-in page after logout
        navigate("/signin");
    };

    return (
        <div className="flex w-full min-h-screen bg-gray-100">
            {/* Sticky Sidebar */}
            <div className="w-full sm:w-64 bg-white shadow-lg hidden md:flex flex-col sticky top-0 h-screen">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-orange-500">Dashboard</h1>
                </div>
                <nav className="flex flex-col space-y-4 p-4">
                    <Link
                        to="/"
                        className="text-gray-800 font-medium hover:bg-orange-100 px-4 py-2 rounded-lg"
                    >
                        Home
                    </Link>
                    <Link
                        to="#"
                        className="text-gray-800 font-medium bg-orange-100 hover:bg-orange-100 px-4 py-2 rounded-lg"
                    >
                        My Orders
                    </Link>
                    <Link
                        to="/cart"
                        className="text-gray-800 font-medium hover:bg-orange-100 px-4 py-2 rounded-lg"
                    >
                        Cart
                    </Link>
                    <button
                        className="text-red-600 font-medium hover:bg-red-100 px-4 py-2 rounded-lg"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </nav>
            </div>

            {/* Orders Content */}
            <div className="flex-1 p-6">
                <div className="sticky top-0 bg-white z-10 p-4 border border-black border-b-0 rounded-t-md">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8 px-4 sm:px-10">My Orders</h1>
                </div>
                <div className="overflow-y-scroll h-[calc(100vh-160px)] bg-white p-4 sm:p-10 border border-black rounded-b-md">
                    {/* Adjusted height for scrolling */}
                    <div className="space-y-6">
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row items-center sm:items-start w-full"
                            >
                                {/* Product Image */}
                                <div className="w-full sm:w-1/3 h-48 sm:h-60 overflow-hidden">
                                    <img
                                        src={order.image}
                                        alt={order.item}
                                        className="w-full h-full object-cover  transition-transform"
                                    />
                                </div>
                                {/* Order Details */}
                                <div className="p-6 flex-1 w-full">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                        {order.item}
                                    </h2>
                                    <p className="text-sm text-gray-600 mb-1">
                                        <span className="font-medium">Date:</span> {order.date}
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        <span className="font-medium">Price:</span> ${order.price.toFixed(2)}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <span className="font-medium">Order ID:</span> #{order.id}
                                    </p>
                                    {/* Status Badge */}
                                    <div className="mt-4">
                                        <span
                                            className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${order.status === "Delivered"
                                                ? "bg-green-100 text-green-700"
                                                : order.status === "In Progress"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </div>
                                </div>
                                {/* Actions */}
                                <div className="p-6 flex flex-row md:flex-col items-end gap-2 justify-between ">
                                    <button className="text-orange-600 font-medium hover:text-orange-800 transition">
                                        View Details
                                    </button>
                                    <button className="text-red-600 font-medium hover:text-red-800 transition">
                                        Cancel Order
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
