import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Service_Card = ({ service }) => {
    const { _id, img, price, title } = service;

    return (
        <div className='p-[20px] bg-white rounded-[10px] border border-gray-200'>
            <div>
                <img className='w-full h-[18rem] max-h-full sm:h-[17rem] rounded-lg' src={img} alt="" />
            </div>
            <h2 className="text-neutral-700 my-4 text-[24px] font-bold font-['Inter']">{title}</h2>
            <div className='flex justify-between'>
                <h5 className="text-orange-600 text-xl font-semibold font-['Inter']">Price : $<span>{price}</span></h5>
                <Link to={`/checkout/${_id}`}><FaArrowAltCircleRight className='text-2xl text-[#FF3811]' /></Link>
            </div>
        </div>
    );
};

export default Service_Card;