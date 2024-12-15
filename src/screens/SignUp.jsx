import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const images = [
    "/public/burger.png",
    "/public/pizza.jpg",
    "/public/cheeseburger.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <>
      <div className="bg-gray-200 flex justify-center items-center h-screen p-4">
        <div className="shadow-2xl bg-white grid grid-cols-1 md:grid-cols-2 flex-nowrap rounded-md w-[330px] md:w-[800px]" >
          {/* Form Section */}
          <div className="flex flex-col justify-center items-center p-6 w-full md:order-1 order-2">
            <h1 className="text-lg md:text-2xl font-bold tracking-wide mb-6">
              Create New Account
            </h1>
            <div className="flex flex-col w-full max-w-xs space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  className="border-b border-blue-600 py-1 px-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="border-b border-blue-600 py-1 px-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className="border-b border-blue-600 py-1 px-2"
                />
              </div>
              <div className="flex flex-col items-center pt-6">
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-full font-medium hover:scale-105 transition-transform">
                  Sign Up
                </button>
                <p className="text-sm mt-4">
                  Already have an account?{" "}
                  <Link
                    to={"SignIn"}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>


          {/* Carousel Section */}
          <div className="relative w-full h-48 sm:h-56 md:w-[400px] md:h-[600px] overflow-hidden rounded-t-md md:rounded-r-md md:order-2 order-1">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className=" h-full w-full object-cover"
                />
              ))}
            </div>
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                    }`}
                ></button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default SignUp;
