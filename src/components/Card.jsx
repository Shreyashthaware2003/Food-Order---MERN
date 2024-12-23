import React from 'react'

function Card(props) {

    let options = props.options;
    let priceOptions = Object.keys(options);


    return (
        <>
            {/* cards */}
            <div className='flex flex-col flex-nowrap shadow-lg w-64 p-4 space-y-4 rounded-xl'>
                <img
                    src={props.imgSrc}
                    className=" h-24 sm:h-28  md:h-36 object-cover rounded-lg"
                    alt="img"
                />

                <h5>{props.foodName}</h5>
                <p>{props.description}</p>
                <div className='  flex flex-nowrap justify-center items-center gap-4'>
                    <select className=" border-black border rounded-md">
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            )
                        })}
                    </select>
                    <select className="rounded-md border border-black">
                        {priceOptions.map((data) => {
                            return <option key={data} value={data}>{data}</option>
                        })}
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