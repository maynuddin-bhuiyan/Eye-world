import { Container, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './ReviewAll.css';



const ReviewAll = () => {

    const [reviewAll, setreviewAll] = useState([]);

    useEffect( () => {

        fetch('https://salty-citadel-01065.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setreviewAll(data))
    },

     [])

console.log(reviewAll);

    return (
        <div>
             <Container className='reviewItam' sx={{ m: 'auto' }}>
            <h1>Review</h1>

            <Button> our valuable clients</Button> <br /> <br /> <br />

            <div className="reviewAll">

                {
                    reviewAll.map(reviewAll => <Review

                        key={reviewAll._id}
                        review={reviewAll}

                    />)
                }
            </div>
        </Container>
        </div>
    );
};

export default ReviewAll;