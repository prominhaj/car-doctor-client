import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import server1 from '../../../assets/images/services/1.jpg';

const Service_Card = () => {
    return (
        <div className='p-[20px] bg-white rounded-[10px] border border-gray-200'>
            <div>
                <img className='w-full rounded-lg' src={server1} alt="" />
            </div>
            <h2 className="text-neutral-700 my-4 text-[24px] font-bold font-['Inter']">Electrical System</h2>
            <div className='flex justify-between'>
                <h5 className="text-orange-600 text-xl font-semibold font-['Inter']">Price : $<span>20.00</span></h5>
                <button><FaArrowAltCircleRight className='text-2xl text-[#FF3811]' /></button>
            </div>
        </div>
    );
};

export default Service_Card;