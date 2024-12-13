import React from 'react'

function Card() {
    return (
        <>
            {/* cards */}
            <div className='flex flex-col flex-nowrap border-2 border-black w-64 p-4 space-y-4'>
                <img src=".." alt="" />
                <h5>Card title</h5>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className='  flex flex-nowrap justify-center items-center gap-4'>
                    <select className=" border-black border rounded-md">
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            )
                        })}
                    </select>
                    <select className="rounded-md border border-black">
                        <option value={'half'}>Half</option>
                        <option value={'full'}>Full</option>
                    </select>

                    <div>
                        <span>Total Price</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card