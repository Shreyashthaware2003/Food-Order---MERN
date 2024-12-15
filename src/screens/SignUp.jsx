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
      <div className="bg-gray-200 flex justify-center items-center h-screen">
        <div className="shadow-2xl bg-white grid grid-cols-2 flex-nowrap rounded-md" >
          {/* Form Section */}
          <div className="flex flex-col justify-center items-center w-[400px] p-4 h-[600px]">
            <h1 className="text-2xl font-bold tracking-wide py-6">
              Create new account
            </h1>
            <div className="flex flex-col justify-center flex-nowrap w-56 space-y-4">
              <div className="flex flex-col flex-nowrap">
                <span>Name</span>
                <input
                  type="text"
                  className="border-b border-blue-600 py-1 px-2"
                />
              </div>
              <div className="flex flex-col flex-nowrap">
                <span>Email</span>
                <input
                  type="email"
                  className="border-b border-blue-600 py-1 px-2"
                />
              </div>
              <div className="flex flex-col flex-nowrap">
                <span>Password</span>
                <input
                  type="password"
                  className="border-b border-blue-600 py-1 px-2"
                />
              </div>
              <div className="flex flex-col flex-nowrap justify-center items-center py-4 space-y-2 ">
                <button className="border rounded-full py-1 px-2 font-medium hover:scale-105 duration-500 w-full bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 text-white">
                  SignUp
                </button>
                <div className="text-sm space-x-2">
                  <span>Already have an account?</span>
                  <Link
                    to={"SignIn"}
                    className="text-blue-600 font-medium hover:text-blue-700 hover:underline"
                  >
                    Signin
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="relative w-[400px] h-[600px] overflow-hidden rounded-r-md">
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
                  className="w-full h-full object-cover"
                />
              ))}
            </div>
            {/* Indicators */}
            <div className="absolute bottom-4 right-0 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${currentIndex === index
                      ? "bg-blue-500"
                      : "bg-gray-300"
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
