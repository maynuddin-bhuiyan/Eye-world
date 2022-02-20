import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SinglePageItam from '../SinglePageItam/SinglePageItam';
import './SinglePage.css';

const SinglePage = () => {
 //State Declare
 const [singlePage, setSinglePage] = useState([]);


 //Loaed Data
 useEffect(() => {
    fetch('https://salty-citadel-01065.herokuapp.com/singlepage')
        .then(res => res.json())
        .then(data => setSinglePage(data))
},
    []);


    return (
        <div>
           <Container sx={{ m: 'auto' }}>
            <h1>We Offer The Best Service</h1>

            <div className="SinglePage">

                {
                    singlePage.map(singlePage => <SinglePageItam

                        key={singlePage._id}
                        singlePage={singlePage}

                    />)
                }
            </div>
        </Container>









        </div>
    );
};

export default SinglePage;