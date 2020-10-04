import React from 'react';
import { ProductItem } from '../../global';
import { addItem, store } from '../cart/cartSlice';
import { useSelector } from 'react-redux';
import './Product.css'

  function ProductList() {

   const products = useSelector((state: ProductItem[]) => state)       
       
   let product = products.map((product, i) => {    
      
       return (
           <div key={i} className='product-list'>
               <img className='product-img' src={product.pic} alt={i.toString()} />
               <div className='product-div'>
                   <h4>{product.title}</h4>
                   <h5> <b className='price'> Price: </b> ${product.price}</h5>
                   <button className='cart' disabled={product.added} onClick={() => store.dispatch(addItem(product))}> add to cart </button>
               </div>
           </div>
       )
   })

   return (
       <div className='product-display container'>
          {product}
       </div>
   )
}

 
 export default ProductList;
