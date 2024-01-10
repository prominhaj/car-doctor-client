import React from 'react';
import Slider from 'react-slick';
import CommentCard from './Comment/CommentCard';

// Slider Arrow Custom
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: "50%"  }}
            onClick={onClick}
        />
    );
}

const Testimonial = () => {
    const settings = {
        className: 'my-10',
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
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
        <div className="py-10">
            <div className="text-center">
                <h2 className="text-orange-600 text-xl font-bold font-['Inter']">Testimonial</h2>
                <h1 className="text-neutral-900 text-[30px] md:text-[45px] font-bold font-['Inter']">What Customer Says</h1>
                <p className="text-center text-neutral-500 text-base font-normal font-['Inter'] capitalize md:leading-[30px]">the majority have suffered alteration in some form, by injected humour, or randomised <br className='hidden md:block' /> words which don't look even slightly believable. </p>
            </div>
            <div>
                <Slider {...settings}>
                    <CommentCard></CommentCard>
                    <CommentCard></CommentCard>
                    <CommentCard></CommentCard>

                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;