import React from 'react';
import Team_Card from './Team_Card/Team_Card';
import Slider from 'react-slick';

const Team = () => {
    const settings = {
        className: 'py-10',
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='py-10'>
            <div className="text-center">
                <h2 className="text-orange-600 text-xl font-bold font-['Inter']">Team</h2>
                <h1 className="text-neutral-900 text-[30px] md:text-[45px] font-bold font-['Inter']">Meet Our Team</h1>
                <p className="text-center text-neutral-500 text-base font-normal font-['Inter'] capitalize md:leading-[30px]">the majority have suffered alteration in some form, by injected humour, or randomised <br className='hidden md:block' /> words which don't look even slightly believable. </p>
            </div>

            <Slider {...settings}>
                <Team_Card></Team_Card>
                <Team_Card></Team_Card>
                <Team_Card></Team_Card>
                <Team_Card></Team_Card>
                <Team_Card></Team_Card>
                <Team_Card></Team_Card>
                <Team_Card></Team_Card>
                <Team_Card></Team_Card>
                <Team_Card></Team_Card>
            </Slider>
        </div>
    );
};

export default Team;