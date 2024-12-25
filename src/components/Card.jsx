import React, { useEffect, useState, useRef } from 'react'
import { useDispatchCart, useCart } from './ContextReducer'
function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState('')

    const handleAddToCart = async () => {
        const food = data.find(item => item.id === props.foodItem._id) || {};

        if (food.id && food.size === size) {
            await dispatch({ type: "UPDATE", id: food.id, price: finalPrice, qty: qty });
            return
        } else if (food.size !== size) {
            await dispatch({
                type: "ADD",
                id: props.foodItem._id,
                name: props.foodItem.name,
                price: finalPrice,
                qty: qty,
                size: size
            });
            return
        }
        await dispatch({
            type: "ADD",
            id: props.foodItem._id,
            name: props.foodItem.name,
            price: finalPrice,
            qty: qty,
            size: size
        });
        return
        console.log(`Cart updated for item: ${props.foodItem.name}`);
    };


    let finalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value)
    })

    return (
        <>
            {/* cards */}
            <div className='flex flex-col flex-nowrap shadow-lg w-64 p-4 space-y-4 rounded-xl'>
                <img
                    src={props.foodItem.img}
                    className=" h-24 sm:h-28  md:h-36 object-cover rounded-lg"
                    alt="img"
                />

                <h5>{props.foodItem.name}</h5>
                <p>{props.description}</p>
                <div className='  flex flex-nowrap justify-center items-center gap-4'>
                    <select className=" border-black border rounded-md" onChange={(e) => setQty(e.target.value)}>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            )
                        })}
                    </select>
                    <select className="rounded-md border border-black" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                        {priceOptions.map((data) => {
                            return <option key={data} value={data}>{data}</option>
                        })}
                    </select>

                    <div>
                        <span>₹{finalPrice}/-</span>
                    </div>
                </div>
                <hr />
                <button className='bg-orange-500 px-3 py-2 font-semibold text-white rounded-md hover:scale-105 duration-200' onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </>
    )
}

export default Card