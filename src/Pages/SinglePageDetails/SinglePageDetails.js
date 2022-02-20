import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import image1 from '../../images/DetailsPage/Ellipse 4.png';
import image2 from '../../images/DetailsPage/Ellipse -1.png';
import image3 from '../../images/DetailsPage/Ellipse -2.png';
import { useHistory } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';
import './SinglePageDetails.css';





const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};


const SinglePageDetails = () => {

  const { id } = useParams();
  const [singlePage, setSinglePage] = useState([]);
  const [specialItam, setspecialItam] = useState([]);
  const history = useHistory();

  useEffect(() => {

    fetch('http://localhost:7000/singlepage')
      .then(res => res.json())
      .then(data => {
        setSinglePage(data);
      });
  }, []);




  const detailsBuy = (id) => {

    const url = `/detailsBuy/${id}`;
    history.push(url);

  }




  useEffect(() => {
    if (singlePage.length > 0) {
      const matchItam = singlePage.find(cameraDetails => cameraDetails.id == id)
      setspecialItam(matchItam);
    }

  }, [singlePage])



  console.log(specialItam);

  const { name, img, price, simplecontrolled } = specialItam;
  //http://localhost:7000/singlepage




  const [expanded, setExpanded] = React.useState(false);

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const ininsialOrder = { name: '', ProductName: '', deatls: '', url: '' };

  const [orderinfo, setOrderinfo] = useState(ininsialOrder);



  const hendalOnBlure = data => {

    const filed = data.target.name;
    const value = data.target.value;
    const newValue = { ...orderinfo };
    newValue[filed] = value;
    setOrderinfo(newValue);
    console.log(newValue);




  }





  const handelonSubmit = data => {
    data.preventDefault();

    const newDispalyReviwe = {
      ...orderinfo
    }

    fetch('http://localhost:7000/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newDispalyReviwe)
    })
      .then(res => res.json())
      .then(data => console.log(data));

  }










  return (
    <div className='Full-page'>
      <h1>Single Page Details</h1>



      <Grid className='PageMain' container spacing={2}>

        <Grid className='Itam-Img' item xs={6} md={8}>
          <img  src={img} alt="" />
        </Grid>

        <Grid className='DetailsBox' item xs={6} md={4}>
          <h1>{name}</h1>
          <p>Choose your product variant</p>
          <h5>Color</h5>


          <div className="Wheit">

          </div>
          <div className="Red">

          </div>
          <div className="Green">

          </div>
          <div className="Black">

          </div>
          <br /><br /><br />


          <div className="Storage">
            <h5>Storage</h5>
            <Button variant="outlined">128 GB</Button>
            <Button variant="outlined">256 GB</Button>
            <Button variant="outlined">512 GB</Button><br /><br /><br />

          </div>
          <h5>Price</h5>
          <Button variant="outlined">{price}</Button>
          <br /><br /><br />
          <Button variant="contained"
            onClick={
              () => {
                detailsBuy(id);
              }}


          >Buy Now</Button>
        </Grid>



      </Grid>



      <br /><br /><br /><br /><br /><br /><br /><br /><br />


      <h2 > Product Description </h2> <br />

      <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '50%', flexShrink: 0 }}>
            Description
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {simplecontrolled}
          </Typography>
        </AccordionDetails>
      </Accordion>



      <br /><br /><br />

      <h2>Customer Review</h2>
      

      <div className="Review-Section">
        <div className="images">
          <img src={image1} alt="" />
        </div>
        <div className="Text-Areaya">
          <h2>Alex Stanton</h2>
          <div className="color">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />

          </div>
          <p>{simplecontrolled}</p>
        </div>

      </div>

      <div className="Review-Section">
        <div className="images">
          <img src={image2} alt="" />
        </div>
        <div className="Text-Areaya">
          <h2>Alex Stanton</h2>
          <div className="color">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />

          </div>
          <p>{simplecontrolled}</p>
        </div>

      </div>
      <div className="Review-Section">
        <div className="images">
          <img src={image3} alt="" />
        </div>
        <div className="Text-Areaya">
          <h2>Alex Stanton</h2>
          <div className="color">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />

          </div>
          <p>{simplecontrolled}</p>
        </div>

      </div>
      <div className="Review-Section">
        <div className="images">
          <img src={image1} alt="" />
        </div>
        <div className="Text-Areaya">
          <h2>Alex Stanton</h2>
          <div className="color">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />

          </div>
          <p>{simplecontrolled}</p>
        </div>

      </div>
      <div className="Review-Section">
        <div className="images">
          <img src={image2} alt="" />
        </div>
        <div className="Text-Areaya">
          <h2>Alex Stanton</h2>
          <div className="color">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />

          </div>
          <p>{simplecontrolled}</p>
        </div>

      </div>
      <div className="Review-Section">
        <div className="images">
          <img src={image3} alt="" />
        </div>
        <div className="Text-Areaya">
          <h2>Alex Stanton</h2>
          <div className="color">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />

          </div>
          <p>{simplecontrolled}</p>
        </div>

      </div>

      <div className="From-Main">
        <Button>#Tell Us About Your Product Feedback </Button>

        <h2>About Your Feedback</h2>
        <div className="border">

        </div>

        <form className='From' >


          <div className="Rating">
            <Typography sx={{ fontWeight: '700' }} >Your Rating</Typography>
            <Rating
              name="feedback"
              onBlur={hendalOnBlure}
              value={value}
              precision={0.5}

              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}

          </div>

          <input className='textarea' onBlur={hendalOnBlure} type="text" name='deatls' placeholder='Type Your Product Feedback' />
          <br />

          <input type="text" name='email'
            onBlur={hendalOnBlure} id="" placeholder='Manage Your Location' />

          <input type="text" name='name'
            onBlur={hendalOnBlure} id="" placeholder='Your Name' />

          <input name='ProductName'
            onBlur={hendalOnBlure} defaultValue={name} type="text" id="" placeholder='Your Product Name' />

          <input  type="url" name="url" onBlur={hendalOnBlure} id="" placeholder='Type a img url' />

          <br /><br />
          <Button onClick={handelonSubmit}

            sx={{ margin: '40px' }} >Submit <IosShareIcon /></Button>


        </form>


      </div>
    </div>
  );
};

export default SinglePageDetails;