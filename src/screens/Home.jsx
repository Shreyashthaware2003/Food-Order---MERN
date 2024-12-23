import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const reviews = [
    {
        name: "Olivia Carter",
        rating: 4.5,
        review: "The delivery was lightning-fast, and the food was still piping hot. The pasta was creamy and flavorful. Will order again!",
        image: "user(1).png",
    },
    {
        name: "Ethan Rodriguez",
        rating: 4.2,
        review: "Quick delivery, but the burger was a bit cold. Still tasted great!",
        image: "user(2).png",
    },
    {
        name: "Sophia Patel",
        rating: 5,
        review: "Ordered a large pizza for the family, and it was a hit! Amazing crust and generous toppings. 5 stars!",
        image: "user(3).png",
    },
    {
        name: "Mia Hernandez",
        rating: 4.8,
        review: "The sushi was fresh and perfectly presented. Highly recommend!",
        image: "user(4).png",
    },
];

function Home() {
    // const ratings = 4.5;


    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:3000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json();

        setFoodItem(response[0]);
        setFoodCat(response[1]);
        // console.log(response[0], response[1]);
    }

    useEffect(() => {
        loadData()
    }, [])


    // buttons
    const [currentReview, setCurrentReview] = useState(0);

    const handleNext = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const handlePrev = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const { name, rating, review, image } = reviews[currentReview];

    return (
        <>
            <div>

                <Navbar />
                <div  className='w-full'>
                    {localStorage.getItem("authToken") ? (
                        <>
                            <div className='grid  grid-cols-1 items-center justify-center gap-8 py-10 px-10 '>
                                {
                                    foodCat.length !== 0 ? (
                                        foodCat.map((data) => {
                                            return (
                                                <div key={data._id} className='md:block flex flex-col justify-center items-center'>
                                                    <div className="text-2xl m-3 font-bold tracking-wide px-10 ">{data.CategoryName}</div>

                                                    <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10'>

                                                        {foodItem.length !== 0 ? foodItem.filter((item) => item.CategoryName === data.CategoryName
                                                        ).map(filterItems => {
                                                            return (
                                                                <div className='flex justify-center items-center hover:scale-105 duration-500 ' key={filterItems._id}><Card foodName={filterItems.name}
                                                                    options={filterItems.options[0]}
                                                                    imgSrc={filterItems.img}
                                                                    // description={filterItems.description}

                                                                ></Card></div>
                                                            )
                                                        }) : (
                                                            <div>No such data</div>
                                                        )}
                                                    </div>
                                                    <hr />
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <div>Failed to load data</div>
                                    )
                                }
                            </div>
                        </>) : (
                        <>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='flex flex-col justify-center items-center bg-gray-100 w-full py-16'>
                                    <h1 className='uppercase font-bold tracking-widest text-lg text-orange-500'>Our Service</h1>
                                    <span className='capitalize text-3xl md:text-5xl font-bold tracking-wide my-2'>How does it work?</span>
                                    <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-10  w-full px-20 py-4'>
                                        <div className='flex flex-col flex-nowrap justify-center items-center gap-1'>
                                            <img src="1.png" className='w-40 md:w-56' alt="img" />
                                            <h1 className='text-2xl font-semibold'>Choose your meal</h1>
                                            <span className='text-sm text-gray-500'>50+ Menus to choose from</span>
                                        </div>
                                        <div className='flex flex-col flex-nowrap justify-center items-center'>
                                            <img src="2.png" className='w-40 md:w-56' alt="" />
                                            <h1 className='text-2xl font-semibold'>Get it delivered</h1>
                                            <span className='text-sm text-gray-500 text-center'>Get your meals delivered as fast as possible</span>
                                        </div>
                                        <div className='flex flex-col flex-nowrap justify-center items-center'>
                                            <img src="3.png" className='w-40 md:w-56' alt="" />
                                            <h1 className='text-2xl font-semibold'>Enjoy your meal</h1>
                                            <span className='text-sm text-gray-500'>Eat your freshly cooked meal</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center bg-amber-50 py-16 px-10 md:px-0 w-full">
                                    {/* Image Section */}
                                    <div className="flex justify-center items-center">
                                        <img src="review.jpg" className="w-[500px] rounded-[150px]" alt="" />
                                    </div>

                                    {/* Review Section */}
                                    <div className="flex flex-col flex-nowrap justify-center items-center md:items-start">
                                        <div className="flex flex-col justify-center items-center md:items-start md:pt-0 pt-20">
                                            <h1 className="uppercase font-bold tracking-widest text-lg text-yellow-400">Our reviews</h1>
                                            <span className="capitalize text-3xl md:text-5xl font-bold tracking-wide my-2">What they say?</span>
                                        </div>

                                        <div className="py-6 md:py-10 flex flex-col justify-center items-start">
                                            {/* Reviewer Info */}
                                            <div className="flex justify-center items-center gap-4">
                                                <img src={image} className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-full border-4 border-yellow-500" alt={name} />
                                                <div className="flex flex-col justify-center items-center flex-nowrap">
                                                    <h1 className="font-bold text-xl tracking-wide">{name}</h1>
                                                    <div className="flex justify-start items-center space-x-1 text-yellow-500 w-full">
                                                        {[...Array(5)].map((_, index) => {
                                                            if (index < Math.floor(rating)) {
                                                                return <FaStar key={index} />;
                                                            }
                                                            if (index < rating) {
                                                                return <FaStarHalfAlt key={index} />;
                                                            }
                                                            return <AiOutlineStar key={index} />;
                                                        })}
                                                        <span className="text-gray-600 text-sm ml-2 font-bold">{rating}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Review Text */}
                                            <div className="py-6">
                                                <div
                                                    className="w-full md:w-4/5 h-24 overflow-hidden transition-all duration-300"
                                                    style={{ maxHeight: "6rem" }}
                                                >
                                                    <p className="px-4 text-sm md:text-xl font-semibold tracking-wide">{review}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Buttons with Profile List */}
                                        <div className="flex justify-center items-center gap-4">
                                            <button
                                                onClick={handlePrev}
                                                className="bg-white shadow-md px-3 py-3 rounded-lg hover:bg-yellow-500 hover:text-white"
                                            >
                                                <IoIosArrowBack />
                                            </button>
                                            <div className="flex gap-2">
                                                {reviews.map((user, index) => (
                                                    <img
                                                        key={index}
                                                        src={user.image}
                                                        alt={user.name}
                                                        onClick={() => setCurrentReview(index)}
                                                        className={`w-10 h-10 rounded-full object-cover cursor-pointer transition-transform ${index === currentReview
                                                            ? "border-2 border-yellow-500 scale-125"
                                                            : "opacity-50"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <button
                                                onClick={handleNext}
                                                className="bg-white shadow-md px-3 py-3 rounded-lg hover:bg-yellow-500 hover:text-white"
                                            >
                                                <IoIosArrowForward />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home