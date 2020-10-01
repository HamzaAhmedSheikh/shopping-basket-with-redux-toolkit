import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from '../../global'

// CartItem ===> id: string,  name: string, price: number, cartId: string,

 const cartSlice = createSlice({
     name: 'cart',
     initialState: [],
     reducers: {
        addItem: (state, action) => {
            const cartItem: {} = action.payload;
            const newState: any = [...state, cartItem]

            return newState
        },

        removeItem: (state, action) => {
            let idToRemove = action.payload.cartId
            const newState = state.filter((item: CartItem) => item.cartId !== idToRemove)

            return newState
        }
     }
 })

 export const { addItem, removeItem } = cartSlice.actions
 export const reducer = cartSlice.reducer