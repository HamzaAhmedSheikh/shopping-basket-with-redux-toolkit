import React from 'react';
import { Item } from './Item';
import { data } from '../../store/state';
import { Cart } from '../cart/Cart';


 let uniqid = require('uniqid');

 export const ProductList = () => {
    return (
        <>
         <div className='row-left'>
            <Cart />
         </div>

         <div>
           {
             data.map(item => (
                <Item name={item.title} price={item.price} pic={item.pic} id={item.id} key={uniqid()} />
             ))  
           }  
         </div>
        </>
    )
 }

 