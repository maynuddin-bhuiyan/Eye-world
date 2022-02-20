import { Container } from '@mui/material';
import React from 'react';
import banner from '../../../images/Banner/img.png';
import './Banner.css';

const Banner = () => {
    return (
        
            
    <Container  className='images'>
        <img src={banner} alt="" />
      </Container>
    );
};

export default Banner;