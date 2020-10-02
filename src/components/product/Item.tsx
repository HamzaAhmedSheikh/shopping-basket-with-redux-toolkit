import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CartItem, ItemProps } from '../../global';
import { addItem } from "../cart/cartSlice";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography, CardActionArea, CardMedia, Grid } from '@material-ui/core/';
import './Product.css'
let uniqid = require('uniqid');




const useStyles = makeStyles({
    root: {
      minWidth: 200,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    media: {    
        height: 300,    
        width: "100%",
    },
    gridContainer: {
        paddingLeft: "20px",
        paddingRight: "20px",       
    }
  });


 export const Item = ({name, price, pic, id}:ItemProps) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state);
    const cartItemSubmitEventHandler = (e:any, cartItem:CartItem) => {
        e.preventDefault();

        dispatch(addItem(cartItem));
    }     

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        // <div id="product"> 
        //  <div className="card">
        //     <img src={pic} alt="shoes" className="product-pic" />
        //     <h2>{name}</h2>
        //     <h4> ${price}</h4>

        //     <button onClick={(event => cartItemSubmitEventHandler(event, {id, name, price, cartId:uniqid() }))}
        //             className='btn'>
        //        Add to cart
        //     </button>
        //  </div>   
        // </div>
        <Grid container spacing={4} className={classes.gridContainer}
              justify="flex-start" alignItems="center" style={{display: "flex"}}>
         <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root} variant="outlined">
         <CardActionArea>
          <CardMedia
            className={classes.media}
            image={pic}
            title="shoes"
          />
           <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
                {name}                
             </Typography>  
             <h4> ${price}</h4>   

             <button onClick={(event => cartItemSubmitEventHandler(event, {id, name, price, cartId:uniqid() }))}
                    className='btn'>
               Add to cart
            </button>    
           </CardContent>
         </CardActionArea>         
        </Card>
        </Grid>   
        </Grid>
    )
 }