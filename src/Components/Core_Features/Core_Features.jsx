import React from 'react';
import group from '../../assets/icons/group.svg';
import delivery from '../../assets/icons/Group 38729.svg';
import support from '../../assets/icons/person.svg';
import equipment from '../../assets/icons/Wrench.svg';
import guaranty from '../../assets/icons/check.svg';
import timely from '../../assets/icons/deliveryt.svg';

const Core_Features = () => {
    return (
        <div className='py-10'>
            <div className="text-center">
                <h2 className="text-orange-600 text-xl font-bold font-['Inter']">Core Features</h2>
                <h1 className="text-neutral-900 text-[30px] md:text-[45px] font-bold font-['Inter']">Why Choose Us</h1>
                <p className="text-center text-neutral-500 text-base font-normal font-['Inter'] capitalize md:leading-[30px]">the majority have suffered alteration in some form, by injected humour, or randomised <br className='hidden md:block' /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-6 gap-[24px] py-10'>
                <div className="flex flex-col gap-3 transition ease-in-out cursor-pointer hover:bg-[#FF3811] group/item items-center rounded-[10px] border border-gray-200 p-[30px]">
                    <div>
                        <img src={group} alt="" />
                    </div>
                    <h2 className="group-hover/item:text-white text-neutral-700 text-lg font-bold font-['Inter']">Expert Team</h2>
                </div>
                <div className="flex flex-col gap-3 transition ease-in-out cursor-pointer hover:bg-[#FF3811] group/item items-center rounded-[10px] border border-gray-200 p-[30px]">
                    <div>
                        <img src={delivery} alt="" />
                    </div>
                    <h2 className="group-hover/item:text-white text-neutral-700 text-lg font-bold font-['Inter']">Timely Delivery</h2>
                </div>
                <div className="flex flex-col gap-3 transition ease-in-out cursor-pointer hover:bg-[#FF3811] group/item items-center rounded-[10px] border border-gray-200 p-[30px]">
                    <div>
                        <img src={support} alt="" />
                    </div>
                    <h2 className="group-hover/item:text-white text-neutral-700 text-lg font-bold font-['Inter']">24/7 Support</h2>
                </div>
                <div className="flex flex-col gap-3 transition ease-in-out cursor-pointer hover:bg-[#FF3811] group/item items-center rounded-[10px] border border-gray-200 p-[30px]">
                    <div>
                        <img src={equipment} alt="" />
                    </div>
                    <h2 className="group-hover/item:text-white text-neutral-700 text-lg font-bold font-['Inter']">Best Equipment</h2>
                </div>
                <div className="flex flex-col gap-3 transition ease-in-out cursor-pointer hover:bg-[#FF3811] group/item items-center rounded-[10px] border border-gray-200 p-[30px]">
                    <div>
                        <img src={guaranty} alt="" />
                    </div>
                    <h2 className="group-hover/item:text-white text-neutral-700 text-lg font-bold font-['Inter']">100% Guranty</h2>
                </div>
                <div className="flex flex-col gap-3 transition ease-in-out cursor-pointer hover:bg-[#FF3811] group/item items-center rounded-[10px] border border-gray-200 p-[30px]">
                    <div>
                        <img src={timely} alt="" />
                    </div>
                    <h2 className="group-hover/item:text-white text-neutral-700 text-lg font-bold font-['Inter']">Timely Delivery</h2>
                </div>
            </div>
        </div>
    );
};

export default Core_Features;