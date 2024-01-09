import React from 'react';
import team1 from '../../../assets/images/team/1.jpg';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Team_Card = () => {
    return (
        <div className='p-[20px] mx-3 cursor-pointer bg-white rounded-[10px] border border-gray-200'>
            <div className='rounded-lg h-60'>
                <img className='w-full rounded-lg h-full' src={team1} alt="" />
            </div>
            <div className="flex flex-col items-center gap-3 mt-3">
                <h2 className="text-neutral-700 text-[25px] font-bold font-['Inter']">Car Engine Plug</h2>
                <h6 className="text-neutral-500 text-xl font-semibold font-['Inter']">Engine Expert</h6>
                <div className='flex gap-3 pt-3'>
                    <Link className='bg-opacity-50 bg-white rounded-full'>
                        <FaFacebook className="text-center text-[#395185] text-sm font-normal font-['Font Awesome 5 Brands'] w-[36.36px] h-[34.62px] p-1" />
                    </Link>
                    <Link className='bg-opacity-50 bg-white rounded-full'>
                        <FaTwitter className="text-center text-[#55ACEE] text-sm font-normal font-['Font Awesome 5 Brands'] w-[36.36px] h-[34.62px] p-1" />
                    </Link>
                    <Link className='bg-opacity-50 bg-white rounded-full'>
                        <FaLinkedin className="text-center text-[#0A66C2] text-sm font-normal font-['Font Awesome 5 Brands'] w-[36.36px] h-[34.62px] p-1" />
                    </Link>
                    <Link className='bg-opacity-50 bg-white rounded-full'>
                        <FaInstagram className="text-center text-rose-500 text-sm font-normal font-['Font Awesome 5 Brands'] w-[36.36px] h-[34.62px] p-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Team_Card;