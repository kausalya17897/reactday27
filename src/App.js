
import './App.css';
import * as React from 'react';
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';


export default function App() {
  return (
    <div className="App">
      <Msg /> 
    </div>
  );
}

function Msg(){
  const [age, setAge] = React.useState(''); 
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  const [cart, setCart] = useState(0);
  return(
  <div className="container">
    <div>
    <div className="headall">
    <ul className="headtop">
    <li className="heading"><a href="#">Start Bootstrap</a></li> 
    <ul className="group">
    <li className="home"><a href="#">Home</a></li>
    <li className="about"><a href="#">About</a></li>
    <li className="shop">
    <li className="menuIcon"><DehazeIcon/></li>
      <div className="shopbox">
      <FormControl sx={{ m: 0, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>shop</em>
          </MenuItem>
          <MenuItem value={10}>All Products</MenuItem>
          <MenuItem value={20}>Popular item</MenuItem>
          <MenuItem value={30}>New Arrivals</MenuItem>
        </Select>
        </FormControl>
        </div>
        </li>
        </ul>
      </ul>
      
      
      
      <button className="cart">🛒Cart <span className="addcart"> { cart } </span></button>
      </div>
      </div>
      <div className="blackcontent">
        <h1 className="blackhead">Shop in style</h1>
        <h2 className="blackhead2">With this shop hompeage template</h2>
      
      </div>
      <section className="maincontent">
  <div className="box">
      <Card sx={{ maxWidth: 345 }}>
<CardMedia
        component="img"
        height="180"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="450 *300"
      />
      <CardContent>
        <div className="productname">
        <Typography gutterBottom variant="h5" component="div">
       <b> Fancy Product</b>
        </Typography>
        </div>
      <div className="price">
        <Typography variant="body2" color="text.secondary">
        $40.00 - $80.00
        </Typography>
        </div>
      </CardContent>
      <CardActions className="button">
      <Button size="small" variant="outlined" >View options<a href="#"></a></Button>
      </CardActions>
  </Card>
  </div>
  <div className="box">
      <Card sx={{ maxWidth: 345 }}>
      <div className="sale" >Sale</div>
<CardMedia
        component="img"
        height="180"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="450 *300"
      />
      <CardContent>
        <div className="productname">
        <Typography gutterBottom variant="h5" component="div">
       <b> Special Item</b>
       <p className="star">⭐⭐⭐⭐⭐</p>
        </Typography>
        </div>
      <div className="starprice">
        <Typography variant="body2" color="text.secondary">
        <span className="strike">$20.00</span>$18.00
        </Typography>
        </div>
      </CardContent>
      <CardActions className="starbutton">
      <IconButton aria-label="like-dislike"
      className="like-dislike" 
      color="primary"
      onClick={() => setCart(cart + 1)}>
        <Button size="small" variant="outlined" className="button">Add to cart</Button>
  </IconButton>
        </CardActions>
  </Card>
  </div>

  <div className="box">
  <div className="sale" >Sale</div>
      <Card sx={{ maxWidth: 345 }}>
<CardMedia
        component="img"
        height="180"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="450 *300"
      />
      <CardContent>
        <div className="productname">
        <Typography gutterBottom variant="h5" component="div">
       <b> Sale Item</b>
        </Typography>
        </div>
      <div className="price">
        <Typography variant="body2" color="text.secondary">
       <span className="strike">$50.00</span>  $25.00
        </Typography>
        </div>
      </CardContent>
      <CardActions className="button">
      <IconButton aria-label="like-dislike"
      className="like-dislike" 
      color="primary"
      onClick={() => setCart(cart + 1)}>
        <Button size="small" variant="outlined" className="button">Add to cart</Button>
  </IconButton>
      </CardActions>
  </Card>
  </div>
  <div className="box">
      <Card sx={{ maxWidth: 345 }}>
<CardMedia
        component="img"
        height="180"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="450 *300"
      />
      <CardContent>
        <div className="productname">
        <Typography gutterBottom variant="h5" component="div">
       <b> Popular Item</b>
       <p className="star">⭐⭐⭐⭐⭐</p>
        </Typography>
        </div>
      <div className="starprice">
        <Typography variant="body2" color="text.secondary">
          $40.00
        </Typography>
        </div>
      </CardContent>
      <CardActions className="starbutton">
      <IconButton aria-label="like-dislike"
      className="like-dislike" 
      color="primary"
      onClick={() => setCart(cart + 1)}>
        <Button size="small" variant="outlined" className="button">Add to cart</Button>
  </IconButton>
      </CardActions>
  </Card>
  </div>
  <div className="box">
  <div className="sale" >Sale</div>
      <Card sx={{ maxWidth: 345 }}>
<CardMedia
        component="img"
        height="180"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="450 *300"
      />
      <CardContent>
        <div className="productname">
        <Typography gutterBottom variant="h5" component="div">
       <b> Sale Item</b>
        </Typography>
        </div>
      <div className="price">
        <Typography variant="body2" color="text.secondary">
        <span className="strike">$50.00</span> $25.00
        </Typography>
        </div>
      </CardContent>
      <CardActions className="button">
      <IconButton aria-label="like-dislike"
      className="like-dislike" 
      color="primary"
      onClick={() => setCart(cart + 1)}>
        <Button size="small" variant="outlined" className="button">Add to cart</Button>
  </IconButton>
      </CardActions>
  </Card>
  </div>
  <div className="box">
      <Card sx={{ maxWidth: 345 }}>
<CardMedia
        component="img"
        height="180"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="450 *300"
      />
      <CardContent>
        <div className="productname">
        <Typography gutterBottom variant="h5" component="div">
       <b> Fancy Product</b>
        </Typography>
        </div>
      <div className="price">
        <Typography variant="body2" color="text.secondary">
        $120.00 - $280.00
        </Typography>
        </div>
      </CardContent>
      <CardActions className="button">
     
        <Button size="small" variant="outlined" className="button">Add to cart</Button>
  
      </CardActions>
  </Card>
  </div>
  <div className="box">
  <div className="sale" >Sale</div>
      <Card sx={{ maxWidth: 345 }}>
<CardMedia
        component="img"
        height="180"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="450 *300"
      />
      <CardContent>
        <div className="productname">
        <Typography gutterBottom variant="h5" component="div">
       <b> Special Item</b>
        </Typography>
        </div>
      <div className="price">
        <Typography variant="body2" color="text.secondary">
        <span className="strike">$20.00</span>$18.00
        </Typography>
        </div>
      </CardContent>
      <CardActions className="button">
      <IconButton aria-label="like-dislike"
      className="like-dislike" 
      color="primary"
      onClick={() => setCart(cart + 1)}>
        <Button size="small" variant="outlined" className="button">Add to cart</Button>
  </IconButton>
      </CardActions>
  </Card>
  </div>
  <div className="box">
      <Card sx={{ maxWidth: 345 }}>
<CardMedia
        component="img"
        height="180"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="450 *300"
      />
      <CardContent>
        <div className="productname">
        <Typography gutterBottom variant="h5" component="div">
       <b> Popular Item</b>
        </Typography>
        </div>
      <div className="price">
        <Typography variant="body2" color="text.secondary">
        $40.00
        </Typography>
        </div>
      </CardContent>
      <CardActions className="button">
      <IconButton aria-label="like-dislike"
      className="like-dislike" 
      color="primary"
      onClick={() => setCart(cart + 1)}>
        <Button size="small" variant="outlined" className="button">Add to cart</Button>
  </IconButton>
      </CardActions>
  </Card>
  </div>
  </section>
<footer>
<div>
  <p className="copyright">
Copyright © Your Website 2021</p>
</div>
</footer>  
</div>
)
}
;
