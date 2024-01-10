import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Carousel from '../../Components/Carousel/Carousel';
import About_Us from '../../Components/About_Us/About_Us';
import Service_Area from '../../Components/Service_Area/Service_Area';
import Season from '../../Components/Season/Season';
import Popular_Products from '../../Components/Popular_Products/Popular_Products';
import Team from '../../Components/Team/Team';
import Core_Features from '../../Components/Core_Features/Core_Features';
import Testimonial from '../../Components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Carousel></Carousel>
            <About_Us></About_Us>
            <Service_Area></Service_Area>
            <Season></Season>
            <Popular_Products></Popular_Products>
            <Team></Team>
            <Core_Features></Core_Features>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;