import FormControlLabel from '@mui/material/FormControlLabel';
import { Button, Grid, TextField } from '@mui/material';
import AddCardIcon from '@mui/icons-material/AddCard';
import FormControl from '@mui/material/FormControl';
import React, { useEffect, useState } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import { useParams } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import './DetailsBuy.css';

const DetailsBuy = () => {

    const { id } = useParams();
    const [singlePage, setSinglePage] = useState([]);
    const [specialItam, setspecialItam] = useState([]);

    useEffect(() => {

        fetch('http://localhost:7000/singlepage')
            .then(res => res.json())
            .then(data => {
                setSinglePage(data);
            });
    }, []);



    useEffect(() => {
        if (singlePage.length > 0) {
            const matchItam = singlePage.find(cameraDetails => cameraDetails.id == id)
            setspecialItam(matchItam);
        }

    }, [singlePage]);



    console.log(specialItam);

    return (
        <div>
            <h1> Hi Man It's <AddCardIcon /> Checkout</h1>



            <Grid sx={{ margin: '100px' }} className='DetailsBuy' container spacing={2}>

                <Grid item xs={4} md={4}>
                    
                <h2>Billing Address</h2>
                <TextField sx={{ width: '200px', margin: '10px' }} id="outlined-basic" label="First Name" variant="outlined" />
                <TextField sx={{ width: '200px', margin: '10px' }} id="outlined-basic" label="Last Name" variant="outlined" /> <br />
                <TextField sx={{ width: '350px', margin: '10px' }} id="outlined-basic" label="Email adress" variant="outlined" /> <br />
                <TextField sx={{ width: '350px', margin: '10px' }} id="outlined-basic" label="Phone Number" variant="outlined" /> <br />
                <TextField sx={{ width: '350px', margin: '10px' }} id="outlined-basic" label="Country" variant="outlined" /> <br />
                <TextField sx={{ width: '350px', margin: '10px' }} id="outlined-basic" label="Address" variant="outlined" /> <br />
                <TextField sx={{ width: '350px', margin: '10px' }} id="outlined-basic" label="City" variant="outlined" /> <br /><br /><br /><br />


                <Button variant='contained'>Update from profile</Button>

                </Grid>

                <Grid item xs={4} md={4}>
                

                <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"><h3>Select Shipping Method</h3></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Standard Shipping $99 " />
        <FormControlLabel value="male" control={<Radio />} label="Express Shipping  $99" />
        
      </RadioGroup>
    </FormControl>

    <br /><br /><br />
    <h3>Promo Code</h3>
    <TextField id="outlined-basic" label="Enter Code" variant="outlined" />

    <Button>Apply</Button>
                </Grid>

                <Grid className='MyOrder' item xs={4} md={4}>
                <h1>Review Order</h1>
                </Grid>




            </Grid>














        </div>
    );
};

export default DetailsBuy;