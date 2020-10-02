import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CartItem, ItemProps } from '../../global';
import { addItem } from "../cart/cartSlice";
import './Product.css';
let uniqid = require('uniqid');

 
 
 export const Item = ({name, price, pic, id}:ItemProps) => {
    
    const dispatch = useDispatch();
    let cart = useSelector(state => state);
    const cartItemSubmitEventHandler = (e:any, cartItem:CartItem) => {
        e.preventDefault();

        dispatch(addItem(cartItem));
    
    }     
    
    return (
      <div className="product-display-card"> 
         <div>
            <img src={pic} alt="shoes" className="product-pic" />
            <h2 className="h2">{name}</h2>
            <h4 className="h4"> ${price}</h4>

            <button onClick={(event => cartItemSubmitEventHandler(event, {id, name, price, pic, cartId:uniqid() }))}
                    className='btn'>
               Add to cart
            </button>
         </div>            
        </div>        
    )
 }