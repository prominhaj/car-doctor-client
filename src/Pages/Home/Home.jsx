import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Carousel from '../../Components/Carousel/Carousel';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Carousel></Carousel>
            <Footer></Footer>
        </div>
    );
};

export default Home;