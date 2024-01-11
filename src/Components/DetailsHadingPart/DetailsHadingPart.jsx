import React, { Children } from 'react';
import victor from '../../assets/images/checkout/checkout.png';

const DetailsHadingPart = ({Children}) => {
    return (
        <div className='relative'>
            <div style={{ backgroundImage: `url('${victor}')` }} className="bg-no-repeat py-16 md:py-32 bg-bottom bg-cover my-10 before:w-full before:h-full before:bg-opacity-55 before:top-0 before:z-10 before:left-0 before:absolute before:bg-neutral-900 before:rounded-lg rounded-lg">
                <div className="text-white text-center px-6 text-3xl lg:text-[45px] font-bold relative z-30 font-['Inter']">{Children}</div>
            </div>
        </div>
    );
};

export default DetailsHadingPart;