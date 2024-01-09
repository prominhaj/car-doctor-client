import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Carousel from '../../Components/Carousel/Carousel';
import About_Us from '../../Components/About_Us/About_Us';
import Service_Area from '../../Components/Service_Area/Service_Area';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Carousel></Carousel>
            <About_Us></About_Us>
            <Service_Area></Service_Area>
            <Footer></Footer>
        </div>
    );
};

export default Home;