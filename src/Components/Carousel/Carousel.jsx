import React from 'react';
import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';

const Carousel = () => {
    return (
        <div className='pb-16'>
            <div className="carousel w-full mt-4 -z-10 lg:h-[700px] rounded-lg">
                <div id="slide1" className="carousel-item relative bg-cover bg-center bg-si w-full" style={{backgroundImage: `url('${img1}')`}}>
                    {/* <img src={img1} className=" w-full rounded-xl" /> */}
                    <div className="rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-5">
                        <div className="text-white space-y-7 pl-12 md:w-1/2 font-['Inter']">
                            <h2 className="text-white text-4xl lg:text-6xl font-bold lg:leading-[75px]">Affordable Price For Car Servicing</h2>
                            <p className="text-white text-lg font-normal capitalize leading-[30px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="btn px-5 text-white hover:bg-transparent border-primary bg-primary text-lg font-semibold">Discover More</button>
                                <button className="btn px-5 btn-outline border-white text-white bg-transparent hover:bg-primary hover:text-white text-lg font-semibold">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end right-5 bottom-5">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative bg-cover bg-center bg-si w-full" style={{backgroundImage: `url('${img2}')`}}>
                    {/* <img src={img2} className=" w-full rounded-xl" /> */}
                    <div className="rounded-xl flex items-center p-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 pl-12 md:w-1/2 font-['Inter']">
                            <h2 className="text-white text-4xl lg:text-6xl font-bold lg:leading-[75px]">Affordable Price For Car Servicing</h2>
                            <p className="text-white text-lg font-normal capitalize leading-[30px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="btn px-5 text-white hover:bg-transparent border-primary bg-primary text-lg font-semibold">Discover More</button>
                                <button className="btn px-5 btn-outline border-white text-white bg-transparent hover:bg-primary hover:text-white text-lg font-semibold">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end right-5 bottom-5">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative bg-cover bg-center bg-si w-full" style={{backgroundImage: `url('${img3}')`}}>
                    {/* <img src={img3} className=" w-full rounded-xl" /> */}
                    <div className="rounded-xl flex items-center p-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 pl-12 md:w-1/2 font-['Inter']">
                            <h2 className="text-white text-4xl lg:text-6xl font-bold lg:leading-[75px]">Affordable Price For Car Servicing</h2>
                            <p className="text-white text-lg font-normal capitalize leading-[30px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="btn px-5 text-white hover:bg-transparent border-primary bg-primary text-lg font-semibold">Discover More</button>
                                <button className="btn px-5 btn-outline border-white text-white bg-transparent hover:bg-primary hover:text-white text-lg font-semibold">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end right-5 bottom-5">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative bg-cover bg-center bg-si w-full" style={{backgroundImage: `url('${img4}')`}}>
                    {/* <img src={img4} className=" w-full rounded-xl" /> */}
                    <div className="rounded-xl flex items-center p-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 pl-12 md:w-1/2 font-['Inter']">
                            <h2 className="text-white text-4xl lg:text-6xl font-bold lg:leading-[75px]">Affordable Price For Car Servicing</h2>
                            <p className="text-white text-lg font-normal capitalize leading-[30px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="btn px-5 text-white hover:bg-transparent border-primary bg-primary text-lg font-semibold">Discover More</button>
                                <button className="btn px-5 btn-outline border-white text-white bg-transparent hover:bg-primary hover:text-white text-lg font-semibold">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end right-5 bottom-5">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;