import React from 'react';
// import { useSelector } from 'react-redux';
// import { CartItem } from "../../global";

 // CartItem ===> id: string, name: string, price: number, cartId: string

 export function Cart() {
     // @ts-ignore
    // const myCart: CartItem[] = useSelector((state:CartItem[]) => state.cart);

    // const totalPrice =  myCart.reduce((prev, next) => prev + next.price,0); 

    return(
        <div>
          {/* <h1>Cart Summary</h1>  

          {
            myCart.map(cartItem => {
                return <div key={`${cartItem.cartId}`}>{cartItem.id}: {cartItem.name}</div>
            })  
          }
            <h4> Total: ${totalPrice} </h4> */}
        </div>
    )
 }