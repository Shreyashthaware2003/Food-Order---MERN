import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });

    const json = await response.json();
    if (json.success) {
      toast.success("Account created successfully! Redirecting to home...", {
        position: "top-right",
        autoClose: 3000,
        onClose: () => navigate("/"),
      });
    } else {
      toast.error("Failed to create account. Please check your details.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col justify-center items-center flex-nowrap w-full h-screen">
        {/* Navbar */}
        <div className="flex justify-between items-center w-full py-4 px-10 shadow-lg">
          <div className="flex justify-center items-center gap-2">
            <img src="dash.png" className="grayscale filter brightness-0 w-10" alt="Logo" />
            <h1 className="text-black text-xl md:text-2xl font-bold uppercase">DoorDash</h1>
          </div>
          <div>
            <Link to="/signin" className="bg-[#F44322] text-white px-3 py-2 rounded-md font-semibold hover:bg-orange-500">
              Login Account
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 justify-center items-center w-full h-full p-4">
          <div className="flex flex-col flex-nowrap justify-center md:justify-end items-center md:items-end">
            <div>
              <h1 className="text-2xl md:text-5xl font-bold">Ready to <br /> satisfy your cravings?</h1>
              <p className="text-lg my-2">Sign up for <span className="text-[#F44322] font-bold">DoorDash</span> and discover your next favorite meal</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex justify-center items-center flex-nowrap rounded-md">
            <div className="flex flex-col justify-center py-6 px-8 md:px-10 w-[360px] md:w-96 space-y-4 md:order-1 order-2 border-2 rounded-md">
              <h1 className="text-lg md:text-xl text-center font-bold tracking-wide mb-6">
                New to <span className="text-[#F44322]">DoorDash?</span><br /> Let's get started!
              </h1>
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  className="border rounded-md py-1 px-2"
                  placeholder="Enter Your Fullname"
                  name="name"
                  value={credentials.name}
                  onChange={onChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="border rounded-md py-1 px-2"
                  name="email"
                  placeholder="Enter Your Email Address"
                  value={credentials.email}
                  onChange={onChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className="border rounded-md py-1 px-2"
                  name="password"
                  placeholder="Enter Your Password"
                  value={credentials.password}
                  onChange={onChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  type="text"
                  className="border rounded-md py-1 px-2"
                  name="geolocation"
                  placeholder="Enter Your Address"
                  value={credentials.geolocation}
                  onChange={onChange}
                />
              </div>
              <div className="flex flex-col items-end w-full">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 rounded-md font-medium hover:scale-105 transition-transform">
                  SignUp
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
