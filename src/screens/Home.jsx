import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
function Home() {
    return (
        <>
            <Navbar />
            <div className='mt-32 max-w-[1280px] mx-auto'>

                <div className='grid sm:grid-cols-3 md:grid-cols-5 items-center justify-center gap-8'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home