import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Carousel from '../../Components/Carousel/Carousel';
import About_Us from '../../Components/About_Us/About_Us';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Carousel></Carousel>
            <About_Us></About_Us>
            <Footer></Footer>
        </div>
    );
};

export default Home;