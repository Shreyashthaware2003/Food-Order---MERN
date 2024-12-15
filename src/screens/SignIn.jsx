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
      <div className="bg-gray-200 flex justify-center items-center h-screen p-4">
        <form onSubmit={handleSubmit} className="shadow-2xl bg-white flex flex-nowrap rounded-md " >
          {/* Form Section */}

          <div className="flex flex-col justify-center py-14 px-8 md:px-10  w-[360px] md:w-96 space-y-4 md:order-1 order-2">
            <h1 className="text-lg md:text-2xl font-bold tracking-wide mb-6">
              Login to your account
            </h1>

            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="border-b border-blue-600 py-1 px-2" name="email" value={credentials.email} onChange={onChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="border-b border-blue-600 py-1 px-2"
                name="password" value={credentials.password} onChange={onChange}
              />
            </div>

            <div className="flex flex-col items-center pt-6">
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-full font-medium hover:scale-105 transition-transform">
                Sign In
              </button>
              <p className="text-sm mt-4">
                Don't have an account?{" "}
                <Link
                  to={"/signup"}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </form >
      </div >
    </>
  );
}

export default SignIn;
