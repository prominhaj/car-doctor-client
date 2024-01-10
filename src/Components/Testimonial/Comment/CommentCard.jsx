import React from 'react';
import commentImg from '../../../assets/images/Commets/Ellipse 2.svg';
import { Rating } from '@mui/material';
import quote from '../../../assets/icons/quote.svg';

const CommentCard = () => {
    return (
        <div className="flex flex-col gap-3 p-[40px] mx-3 bg-white rounded-[10px] border border-zinc-100">
            <header className="flex items-center gap-5">
                <div>
                    <img src={commentImg} alt="" />
                </div>
                <div>
                    <h2 className="text-neutral-700 text-[25px] font-bold font-['Inter']">Awlad Hossain</h2>
                    <h6 className="text-neutral-500 text-xl font-semibold font-['Inter']">Businessman</h6>
                </div>
                <div className='ms-auto mr-16'>
                    <img className="w-[56px]" src={quote} alt="" />
                </div>
            </header>
            <div>
                <p className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-[30px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div>
                <Rating name="read-only" value={3} readOnly />
            </div>
        </div>
    );
};

export default CommentCard;