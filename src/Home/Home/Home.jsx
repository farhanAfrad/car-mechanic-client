import React from 'react';
import Slider from '../Slider/Slider';
import AboutUs from './AboutUs';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AboutUs></AboutUs>  
            <Services></Services>         
        </div>
    );
};

export default Home;