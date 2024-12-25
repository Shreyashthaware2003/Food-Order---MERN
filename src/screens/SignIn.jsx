import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {


  //backend

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    }

    if (!json.success) {
      alert("Enter valid credentials");
    }
  }


  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <>
      <div className="flex flex-col flex-nowrap justify-center items-center w-full h-screen">
        {/* Navbar */}
        <div className=" flex justify-between items-center w-full py-4 px-10 shadow-lg">
          <div className="flex justify-center items-center gap-2 ">
            <img src="dash.png" className="grayscale filter brightness-0 w-10" alt="" />
            <h1 className="text-black text-xl md:text-2xl font-bold uppercase ">doordash</h1>
          </div>
          <div>
            <Link to={'/signup'} className="bg-[#F44322] text-white px-3 py-2 rounded-md font-semibold hover:bg-orange-500">Create Account</Link>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center h-full p-4 w-full ">
          <div className="flex flex-col flex-nowrap justify-center md:justify-end items-center md:items-end">
            <div className="">
              <h1 className="text-2xl md:text-5xl font-bold">Craving <br />something delicious?</h1>
              <p className="text-lg my-2">Log in to <span className="text-[#F44322] font-bold">DoorDash</span> and order now!</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className=" flex flex-nowrap justify-center items-center rounded-md w-full " >
            {/* Form Section */}
            <div className="flex flex-col justify-center border-2 rounded-md py-6 px-6 md:px-10  w-[360px] md:w-96 space-y-4 md:order-1 order-2">
              <h1 className="text-lg md:text-xl font-bold tracking-wide mb-6">
                Welcome back to <span className="text-[#F44322]">DoorDash!</span>
              </h1>

              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  className="border rounded-md py-1 px-2" name="email" placeholder="Enter Your Email Address" value={credentials.email} onChange={onChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className="border rounded-md py-1 px-2"
                  name="password" placeholder="Enter Your Password" value={credentials.password} onChange={onChange}
                />
              </div>

              <div className="flex flex-col items-end w-full">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 rounded-md font-medium hover:scale-105 transition-transform">
                  Sign In
                </button>
                {/* <p className="text-sm mt-4">
                  Don't have an account?{" "}
                  <Link
                    to={"/signup"}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Sign Up
                  </Link>
                </p> */}
              </div>
            </div>
          </form >
        </div >
      </div>
    </>
  );
}

export default SignIn;
