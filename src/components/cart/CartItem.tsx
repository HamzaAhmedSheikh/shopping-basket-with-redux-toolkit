import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from "./cartSlice";
import { CartItem } from "../../global";
import './CartItem.css'


 const CartItems = () => {
    // @ts-ignore     

   const myCartItem: CartItem[] = useSelector((state:CartItem[]) => state.cart);   
   const totalPrice =  myCartItem.reduce((prev, next) => prev + next.price,0);
   const dispatch = useDispatch();

    return (
        <div>
          <h3>Your Items</h3>   

          <table>
            <thead>
              <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>              
              <th> T.Price</th>   
              <th />                         
              </tr> 
            </thead>  

            <tbody>              
              {myCartItem.map((product,index) => {
                  return (                     
                      <tr key={product.cartId} >
                        <td>
                          <img className='img-table' src={product.pic} alt={product.name} height='100px' width='100px' />
                        </td>
                        <td className='product'> {product.name} </td>                          
                        <td>{product.price}</td>
                        <td>
                          <button className='cart-button' onClick={() => dispatch(removeItem({ cartId: product.cartId }))}>
                              X 
                          </button>                       
                        </td>                   
                      </tr>                     
                  )
              })}                
            </tbody>            
          </table>

          <h4 className='total-align'> Total: ${totalPrice} </h4>
        </div>
    )
 }

 export default CartItems;