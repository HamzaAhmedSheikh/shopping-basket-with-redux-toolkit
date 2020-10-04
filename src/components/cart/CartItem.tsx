import React from 'react';
import { useSelector } from 'react-redux';
import { store, removeItem, increment, decrement } from './cartSlice';
import { ProductItem } from '../../global';
import { Link } from 'react-router-dom';

import './CartItem.css';

 export function Cart() {    
  const products = useSelector((state: ProductItem[]) => state)   
   
    return(
        <>
         <div className='ifempty'>
           {products.filter(product => product.added).length === 0 ? (
             <>
              <h1>Your Cart is Empty</h1>
              <Link to='/'>
                <button className='hvr-bounce-to-left'>
                   shop here
                </button>
              </Link>
            </>) : ''}
         </div>    

         {products.filter(product => product.added).length === 0 ? ' ' :
            <div>
              <table >
                <thead >
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total Price</th>
                    <th />
                  </tr>
                </thead>
                
                <tbody>
                  {products.filter(product => product.added).map((product: ProductItem, i) => (                               
                    <tr key={i.toString()}>
                      <td>
                        <img className='cart-img' src={product.pic} alt={product.title} height='100px' width='100px' />
                      </td>

                      <td>  {product.title} </td>

                      <td> {product.quantity} </td>
                
                      <td> ${product.price} </td>

                      <td> ${product.price * product.quantity} </td>

                      <td>
                        <button className='cart-button' onClick={() => store.dispatch(increment(product))}>+</button>
                        <button className='cart-button' onClick={() => store.dispatch(removeItem(product))}>-</button>
                        <button className='cart-button' onClick={() => store.dispatch(decrement(product))}>x</button>
                      </td>
                    </tr>
                 ))}
                </tbody>                
              </table>
              
                <h5 className='total-bill'>Total : ${products.reduce((total, pro) => total + (pro.price) * pro.quantity, 0)}</h5>
            </div>}      
        </>
    )
 }