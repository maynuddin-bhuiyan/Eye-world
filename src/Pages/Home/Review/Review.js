import { Rating } from '@mui/material';
import React from 'react';
import './Review.css';
import StarIcon from '@mui/icons-material/Star';

const Review = (props) => {
    const { name, ProductName, deatls, email, feedback, url } = props.review;
    console.log(props.review);


    return (
        <div className="Review">


            <div className='ReviewItam'>
                <h2>{name}</h2>
                <p>{deatls}</p>
                <img src={url} alt="" />
                <Rating defaultValue={feedback}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <h5>{ProductName}</h5>
                <p>{email}</p>

                

            </div>

        </div>
    );
};

export default Review;