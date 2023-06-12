
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import { removeProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Cart = () => {
    const cart = useSelector (state=>(state.cart))

    const dispatch = useDispatch()

    const removeFromCart = ()=>{
        dispatch(
            removeProduct()
          );
    }
    return (
       <Container>
            <Wrapper>
                <Title className='text-xl'>Your Cart</Title>
                <Top>
                    <button className='border-black p-[10px] bg-orange-400 font-sans text-white'>CONTINUE SHOPPING</button>

                    <button className='bg-black p-[10px] text-white font-sans'>CHECKOUT NOW</button>
                </Top>
                <div class="container mx-auto mt-10 ">
                <div class="flex flex-wrap my-10">
                <div class="md:flex-[70] bg-white md:px-10 py-10">
                    <div class="flex justify-between border-b pb-8">
                    <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                    <h2 class="font-semibold text-2xl">{cart.quantity} Items</h2>
                    </div>
                    <div class="flex mt-10 mb-5">
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>

                    </div>
                    { cart.products.map((product)=>(
                            <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                            <div class="flex w-2/5">
                                <div class="w-20">
                                <img class="h-24" src={product.img}alt=""/>
                                </div>
                                <div class="flex flex-col justify-between ml-4 flex-grow">
                                <span class="font-bold text-sm">{product.title}</span>
                                <span class="text-red-500 text-xs">{product._id}</span>
                                <li onClick={removeFromCart}
                                 class="font-semibold hover:text-red-500 text-gray-500 text-xs">
                                    Remove
                                    </li>
                                </div>
                            </div>
                            <div class="flex justify-center w-1/5">
                                <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                                </svg>
        
                                {product.quantity}
        
                                <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                                </svg>
                            </div>
                            <span class="text-center w-1/5 font-semibold text-sm">{product.price * product.quantity}</span>
                            <span class="text-center w-1/5 font-semibold text-sm">{product.total}</span>
                            </div>
                    ))
                    
                    }
                    

                    

                    <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">
                
                    <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                    Continue Shopping
                    </a>
                </div>

                <div id="summary" class=" px-8 py-10 bg-gray-200 h-full ">
                    <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div class="flex justify-between mt-3 mb-5">
                    <span class="font-semibold text-sm uppercase">Subtotal</span>
                    <span class="font-semibold text-sm">{cart.total} RS</span>
                    </div>
                    <div>
                    <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                    <select class="block p-2 text-gray-600 w-full text-sm">
                        <option>Standard shipping - 10.00 RS</option>
                    </select>
                    </div>
                    <div class="border-t mt-1">
                    <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total cost</span>
                        <span>{cart.total+50} RS</span>
                    </div>
                    <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                    </div>
                </div>

                </div>
  </div>
            </Wrapper>
            
       </Container>
    );
};

export default Cart;

const Container =styled.div`

`
const Wrapper =styled.div`
    padding: 20px;
`
const Title =styled.h1`
    font-weight: 400;
    text-align: center;
`
const Top =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`