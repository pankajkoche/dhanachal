import { createSlice } from "@reduxjs/toolkit";
function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
  
    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }
  
    return arr;
  }

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products:[],
        quantity:0,
        total:0
    },

    reducers:{
        addProduct:(state,action)=>{
            state.quantity+=1;
            state.products.push(action.payload)
            state.total+= action.payload.price * action.payload.quantity;
            console.log("product",state.products)
            alert(state.products)
        },
        logoutCart:(state)=>{
            state.products=null;
            state.quantity=null;
            state.total=null;
        },
        removeProduct:(state,action)=>{
            state.quantity-=1;
            const index = state.products.indexOf(action.payload);
            removeObjectWithId(state.products,action.payload.id);
            state.total-= action.payload.price * action.payload.quantity;
        }
    }
});

export const {addProduct,logoutCart,removeProduct} = cartSlice.actions;
export default cartSlice.reducer;