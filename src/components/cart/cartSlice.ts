import { createSlice, configureStore } from "@reduxjs/toolkit";
import { InitialState } from '../../store/state'

 const cartSlice = createSlice({
     name: 'cart',
     initialState: InitialState,
     reducers: {
        addItem: (state, action) => {
            console.log(state);            
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }

                return {
                    ...item,
                    added: true,
                    quantity: item.quantity + 1
                }
            })
        },

        removeItem: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                      return item
                }

                else if (item.quantity <= 1) {
                    return {
                        ...item,
                        quantity: 0,
                        added: false,
                    }
                }

                return {
                    ...item,
                    quantity: item.quantity - 1
                }

            })
        },

        increment: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                      return item
                }

                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            })
        },

        decrement: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }

                return {
                    ...item,
                    quantity: 0,
                    added: false,
                }
            })
        }
    }
})
  
 const store = configureStore({ reducer: cartSlice.reducer })  
 export const { addItem, removeItem, increment, decrement } = cartSlice.actions
 export const reducer = cartSlice.reducer

 export { cartSlice, store }