import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {cartItems: []},
    reducers:{
        addProduct: (state, action)=>{
            const existing = state.cartItems.find(item => item.id === action.payload.id)
            if(!existing){
                state.cartItems.push(action.payload)
            }
            
        },
        deleteProduct: (state, action)=>{
            const index = state.cartItems.findIndex((item)=>{return item.id === action.payload})
            state.cartItems.splice(index, 1)
        }
    }
}) 

export const {addProduct, deleteProduct} = cartSlice.actions
export default cartSlice.reducer