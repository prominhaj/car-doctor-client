import React from 'react';
import parsonal from '../../assets/images/about_us/person.jpg';
import parse from '../../assets/images/about_us/parts.jpg';
import { Link } from 'react-router-dom';

const About_Us = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-10 pt-2 pb-12">
            <div className='relative w-full'>
                <div className='w-[90%] h-[90%] lg:h-[75%] xl:h-[90%]'>
                    <img className='rounded-lg w-full h-full' src={parsonal} alt="" />
                </div>
                <div className='absolute bottom-0 right-0 w-[50%] lg:w-[75%] xl:w-[50%]'>
                    <img className='rounded-lg border-8 w-full border-white' src={parse} alt="" />
                </div>
            </div>
            <div className='text-center md:text-start'>
                <h2 className="text-orange-600 text-xl font-bold font-['Inter']">About Us</h2>
                <h1 className="text-neutral-900 text-[30px] md:text-[45px] font-bold font-['Inter']">We are qualified & of experience in this field</h1>
                <p className="text-neutral-500 text-base font-normal font-['Inter'] capitalize md:leading-[30px] mt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className="text-neutral-500 my-4 text-base font-normal font-['Inter'] capitalize leading-[30px]">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <Link to="/about" className="btn btn-error text-center mt-2 text-white text-lg font-semibold font-['Inter']">Get More Info</Link>
            </div>
        </div>
    );
};

export default About_Us;