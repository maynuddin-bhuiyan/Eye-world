import React from 'react';
import { Button, Grid } from '@mui/material';
import Platformimg from '../../../images/file-20180530-120505-j9xs87.jpg';
import './Features.css';



const Features = () => {
    return (
        <div id='Features'>
            <h1>Features</h1>
            <Grid container spacing={2}>
                <Grid item xs={10} md={6}>
                    <div className='LearningText'>
                        <Button>#Platform for Security Camera </Button>
                        <h1>Technician installing wireless CCTV security camera
                        </h1>
                        <p>Surveillance Camera Man: With Surveillance Camera Man. The feature length compilation of Surveillance Camera Man's interactions.Security Man IPCAM Network Camera - Color IPCAM-SDII : Electronics. ... remote access/control, record/playback, and monitor up to 64 IP cameras</p>
                        <Button className='Button' variant="outlined">   Read More</Button>
                    </div>
                </Grid>

                <Grid item xs={2} md={6}>
                    <div className='LearningImg'>
                        <img className='LearningImgOne' src={Platformimg} alt="" />

                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Features;