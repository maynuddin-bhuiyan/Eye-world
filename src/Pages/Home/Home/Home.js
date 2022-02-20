import React from 'react';
import Banner from '../Banner/Banner';
import Cameras from '../Cameras/Cameras';
import Features from '../Features/Features';
import Gellary from '../Gellary/Gellary';
import ReviewAll from '../ReviewAll/ReviewAll';

const Home = () => {
    return (
        <div>

       
        <Banner />
        <Cameras />
        <Gellary />
        <Features />
        <ReviewAll />
      

        </div>
    );
};

export default Home;