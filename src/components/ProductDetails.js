import React, { useEffect, useState } from 'react';
import {AiOutlineShoppingCart } from 'react-icons/ai'
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethod';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const ProductDetails = () => {


    const location = useLocation();
    const id =location.pathname.split("/")[2];

    const [product, setProduct] =useState({});
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(1)
    const dispatch = useDispatch()

    useEffect(()=>{
      const getProduct= async ()=>{
        try{
          const res = await publicRequest.get("/products/find/"+id)
          setProduct(res.data)
          console.log(res.data)
        }catch(err){
          console.log(err)
        }
        
      };
      getProduct()
    },[id])
 
    const handleQuantity =(type)=>{
      if (type ==="dec"){
        quantity > 1 && setQuantity(quantity - 1);
        setTotal(quantity*product.price)
      }
      else{
        setQuantity(quantity+1);
        setTotal(quantity*product.price)
      }
    }

    const addToCart =()=>{
      dispatch(
        addProduct({
          ...product,quantity
        })
      );
      
    }
    

    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:place-items-center lg:py-8 md:px-20 p-8" >
            <div className='rounded-md  bg-orange-400 '>
                <img src={product.img} alt="product" className='w-[400px]' />
            </div>
            <div className='w-full'>
                <h1 className='text-slate-900 mb-10 font-bold text-3xl lg:text-4xl '> {product.title} </h1>
                 <p> {product.desc}</p>
                <div className="mt-10 lg:flex items-center justify-between gap-2">
            <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow lg:flex-1">
              <li onClick={() => handleQuantity("dec")} className="cursor-pointer">
                - 
              </li>
              <li>{quantity}</li>
              <li onClick={() => handleQuantity("inc")}
                
                className="cursor-pointer"
              >
                +
              </li>
            </ul>

            <div className="lg:flex-1">
              <button onClick={addToCart} className="flex items-center justify-center gap-4 px bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200">
                <AiOutlineShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
          
         
          
          
               
            </div>
           

        </div>
    );
};

export default ProductDetails;