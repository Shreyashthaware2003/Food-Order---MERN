import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
function Home() {
    return (
        <>
            <Navbar />
            <div className='mt-24 max-w-[1280px] mx-auto'>
                <Card />

            </div>
            <Footer />
        </>
    )
}

export default Home