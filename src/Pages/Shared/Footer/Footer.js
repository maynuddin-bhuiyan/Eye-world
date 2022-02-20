import React from 'react';
import icon5 from '../../../images/social/stack-overflow.png';
import icon1 from '../../../images/social/facebook.png';
import icon2 from '../../../images/social/linkedin.png';
import icon4 from '../../../images/social/twitter.png';
import logo from '../../../images/Banner/Group 1.png';
import icon3 from '../../../images/social/github.png';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {



    return (
        <div className='Footer'>


            <Grid className='Footer_Text' container spacing={2} columns={16}>

                <Grid className='Text' item xs={4} md={4}>
                    <Typography variant="h1" component="h2">
                    <Link className='text-alin' to="/home">
                        <img src={logo} alt="" /></Link>
                    </Typography>
                    <Typography variant="h6" >
                        <p>Most Popular Types Of CCTV Cameras Available Here</p>
                    </Typography>

                </Grid>
                <Grid className='Text' item xs={4} md={4}>
                    <Typography variant="h5" component="h2">
                        Quick Link <br /><br /><br />

                        <ul>
                            <li>Help center</li>
                            <li>Apps</li>
                            <li>Privacy Policy</li>
                            <li>Terms &amp; Conditions</li>
                        </ul>
                    </Typography>
                </Grid>
                <Grid className='Text' item xs={4} md={4}>
                    <Typography variant="h5" component="h2">
                        Contact Us <br /> <br /> <br />


                        <ul>
                            <li>mayuddinbhuiyan.com</li>
                            <li>01908145097</li>

                        </ul>
                    </Typography>
                </Grid>
                <Grid className='Text' item xs={4} md={4}>
                    <Typography >
                        <h2>Get started </h2><br /> <br /> <br />


                        <a href="https://www.facebook.com/freelancer.maynuddin.7" target='_blank'> <img src={icon1} alt="" /></a>

                        <a href="https://www.linkedin.com/in/maynuddin-bhuiyan-7909a5216/" target='_blank'> <img src={icon2} alt="" /></a>

                        <a href="https://github.com/uxmain" target='_blank'> <img src={icon3} alt="" /></a>

                        <a href="https://twitter.com/MaynuddinBh/" target='_blank'> <img src={icon4} alt="" /></a>

                        <a href="https://stackoverflow.com/users/12873599/maynuddin-bhuiyan" target='_blank'> <img src={icon5} alt="" /></a>
                    </Typography>
                </Grid>
                



            </Grid>

        </div>
    );
};

export default Footer;