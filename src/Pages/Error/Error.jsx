import React from 'react';
import error from '../../assets/Error.png';

const Error = () => {
    return (
        <div className="container mx-auto mt-20">
            <img className='mx-auto' src={error} alt="" />
        </div>
    );
};

export default Error;