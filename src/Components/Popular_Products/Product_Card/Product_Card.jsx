import React from 'react';
import product1 from '../../../assets/images/products/1.png';
import { Rating } from '@mui/material';
import backPack from '../../../assets/icons/Frame.svg';

const Product_Card = () => {
    return (
        <div className='p-[20px] group/item duration-500 cursor-pointer bg-white rounded-[10px] border border-gray-200'>
            <div className='bg-[#F3F3F3] rounded-lg p-10 relative'>
                <button className='group/edit invisible duration-300 transition-all ease-innpm group-hover/item:duration-0 group-hover/item:visible w-[53px] absolute right-10 h-[53px] bg-white rounded-[10px]'>
                    <img src={backPack} className='w-full h-full p-2' alt="" />
                </button>
                <img className='w-full rounded-lg h-60' src={product1} alt="" />
            </div>
            <div className="flex flex-col items-center gap-3 mt-3">
                <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
                <h2 className="text-neutral-700 text-[25px] font-bold font-['Inter']">Car Engine Plug</h2>
                <h5 className="text-orange-600 text-xl font-semibold font-['Inter']">$<span>20.00</span></h5>
            </div>
        </div>
    );
};

export default Product_Card;