import React from 'react';
import { useDispatch } from 'react-redux';
import { CartItem, ItemProps } from '../../global';
import { addItem } from "../cart/cartSlice";
var uniqid = require('uniqid');

// CartItem ===> id: string, name: string,  price: number, cartId: string
// ItemProps ===>  name: string,  price: number, pic: string, id: string

 export const Item = ({name, price, pic, id}:ItemProps) => {
    const dispatch = useDispatch();
    // const cart = useSelector(state => state);
    const cartItemSubmitEventHandler = (e:any, cartItem:CartItem) => {
        e.preventDefault();

        dispatch(addItem(cartItem));
    }     

    return (
        <div> 
            <img src={pic} alt="shoes" className="product-pic" />
            <h2>{name}</h2>
            <h4>{price}</h4>

            <button onClick={(event => cartItemSubmitEventHandler(event, {id, name, price, cartId:uniqid() }))}
                    className='btn'>
               Add to cart
            </button>
        </div>
    )
 }