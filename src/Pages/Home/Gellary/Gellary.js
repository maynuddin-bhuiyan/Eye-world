import React from 'react';
import { Container } from '@mui/material';
import imgesa1 from '../../../images/Gellary/3d-illustration-equipment-protection-concept-cam-1412076.png';
import imgesa2 from '../../../images/Gellary/PngItem_1593378.png';
import imgesa3 from '../../../images/Gellary/PngItem_48755.png';
import imgesa4 from '../../../images/Gellary/PngItem_49252(1).png';
import imgesa5 from '../../../images/Gellary/PngItem_50185.png';
import imgesa6 from '../../../images/Gellary/PngItem_5319230.png';
import './Gellary.css';

const Gellary = () => {
    return (
        <Container sx={{ m: 'auto' }}>
            <h1>Gellary</h1>

            <div className='Gellary' >

                <img className='Gellary-img' src={imgesa4} alt="" />
                <img className='Gellary-img' src={imgesa5} alt="" />
                <img className='Gellary-img' src={imgesa6} alt="" />
                <img className='Gellary-img' src={imgesa1} alt="" />
                <img className='Gellary-img' src={imgesa2} alt="" />
                <img className='Gellary-img' src={imgesa3} alt="" />

            </div>

        </Container>
    );
};

export default Gellary;