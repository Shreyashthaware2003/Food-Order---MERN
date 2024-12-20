import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'


function Home() {

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



    return (
        <>
            <Navbar />
            <div className='mt-32 max-w-[1280px] mx-auto'>

                <div className='grid  grid-cols-1 items-center justify-center gap-8'>

                    {
                        foodCat.length !== 0 ? (
                            foodCat.map((data) => {
                                return (
                                    <div key={data._id} className='md:block flex flex-col justify-center items-center'>
                                        <div className="text-xl m-3 ">{data.CategoryName}</div>
                                        <hr />
                                        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8'>

                                            {foodItem.length !== 0 ? foodItem.filter((item) => item.CategoryName === data.CategoryName
                                            ).map(filterItems => {
                                                return (
                                                    <div key={filterItems._id}><Card></Card></div>
                                                )
                                            }) : (
                                                <div>No such data</div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div>Failed to load data</div>
                        )
                    }

                    {/* <Card /> */}


                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home