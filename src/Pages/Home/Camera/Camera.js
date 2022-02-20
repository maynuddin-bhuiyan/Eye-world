import { Button, Container,  Typography } from '@mui/material';
import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Camera.css';
import { useHistory } from 'react-router-dom';


const Camera = (props) => {
    const { img, name, id, price } = props.cameras;

    const history = useHistory();

    const detailsItam = (id) => {

        const url = `/detailsItam/${id}`;
        history.push(url);

    }

    

    return (





        <Container className='images'>
            <div className='srevice'>
                <Typography  className='FavoritIcon'>
                    <Button onClick={
              () => {
                detailsItam(id);
              }}>
                    <ShoppingCartIcon />
                    </Button>
                    
                </Typography>

                <img src={img} alt="" />

                <div className="text-head">
                    <Typography >
                        <h4 sx={{ mb: 1.5, fontSize: "25" }} color="#000000">{name}</h4>
                    </Typography>
                    <Typography sx={{ mb: 1.5, fontSize: "20" }} color="#000000" >

                        <h5>{price}</h5>
                    </Typography>
                </div>

                <Typography className='Icon' >

                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                    <StarBorderIcon />
                </Typography>

            </div>
        </Container>





    );
};

export default Camera;