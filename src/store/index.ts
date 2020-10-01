import { configureStore } from "@reduxjs/toolkit";
import { reducer } from '../components/cart/cartSlice';

 const store = configureStore({
     reducer: {
        cart: reducer
     }
 })

 export default store;