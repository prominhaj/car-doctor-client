import React, { useState } from 'react';
import { FaX } from "react-icons/fa6";

<<<<<<< HEAD
const OrderStatus = ({ order, handleStatus, deleteOrder }) => {
=======
const OrderStatus = ({ order, handleStatus }) => {
>>>>>>> 852eb53acaf4e64d4a94f7c8784411328d97c951
    const { img, date, service, price, _id, status } = order;

    return (
        <div className='flex items-center justify-center flex-wrap md:justify-between gap-10'>
            <div className="flex items-center flex-wrap justify-center gap-6">
                <button onClick={() => deleteOrder(_id)} className="w-6 h-6 md:w-10 md:h-10 flex text-white items-center justify-center bg-neutral-700 rounded-full"><FaX /></button>
                <img className='h-32 rounded-[10px]' src={img} alt="" />
                <div className='flex flex-col gap-2'>
                    <h2 className="text-neutral-700 text-xl font-semibold font-['Inter'] leading-[30px]">{service}</h2>
                    <h4 className="text-neutral-700 text-xl font-semibold font-['Inter'] leading-[30px]">${price}</h4>
                    <h6 className="text-zinc-800 text-xl font-medium font-['Inter'] leading-[30px]">{date}</h6>
                </div>
            </div>
            <div>
                {
<<<<<<< HEAD
                    status === 'Complete' ? <button className="rounded-[10px] border border-green-500 py-2 px-3 text-center text-green-500 text-xl font-semibold font-['Inter'] leading-[30px]">{status}</button> : <button onClick={() => handleStatus(_id)} className="bg-[#FF3811] py-2 px-3 rounded-[10px] text-center text-white text-xl font-semibold font-['Inter'] leading-[30px]">{status}</button>
=======
                    status === 'Complete' ? <button className="rounded-[10px] border border-green-500 py-2 px-3 rounded-[10px] text-center text-green-500 text-xl font-semibold font-['Inter'] leading-[30px]">{status}</button> : <button onClick={() => handleStatus(_id)} className="bg-[#FF3811] py-2 px-3 rounded-[10px] text-center text-white text-xl font-semibold font-['Inter'] leading-[30px]">{status}</button>
>>>>>>> 852eb53acaf4e64d4a94f7c8784411328d97c951
                }
            </div>
        </div>
    );
};

export default OrderStatus;