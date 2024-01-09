import React from 'react';
import Product_Card from './Product_Card/Product_Card';

const Popular_Products = () => {
    return (
        <div className='py-10'>
            <div className="text-center">
                <h2 className="text-orange-600 text-xl font-bold font-['Inter']">Popular Products</h2>
                <h1 className="text-neutral-900 text-[30px] md:text-[45px] font-bold font-['Inter']">Browse Our Products</h1>
                <p className="text-center text-neutral-500 text-base font-normal font-['Inter'] capitalize md:leading-[30px]">the majority have suffered alteration in some form, by injected humour, or randomised <br className='hidden md:block' /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid md:grid-cols-2 py-10 lg:grid-cols-3 gap-6'>
                <Product_Card></Product_Card>
                <Product_Card></Product_Card>
                <Product_Card></Product_Card>
                <Product_Card></Product_Card>
            </div>
        </div>
    );
};

export default Popular_Products;