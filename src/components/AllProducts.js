import React, { useEffect ,useState} from 'react';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const getProducts= async()=>{
        try{
                const res = await axios.get("https://dhanachal.onrender.com/api/products/")
                setProducts(res.data);
                console.log(res)
        }
        catch(err){
            console.log(err)
        }
    };
    getProducts()
})
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-5 p-10 ">
          {
            products.map(item=>(
               <div className="flex flex-col justify-between cursor-pointer bg-green-200 px-3 pb-3">
                <div className="aspect-w-1 aspect-h-1">
                  <img className='' src={item.img} alt="product" />
                </div>
                <h1 className="font-semibold">{item.title}</h1>
                <p className="text-xs text-gray-500">its very good products</p>
                <p className="font-semibold text-gray-700">{item.price}</p>
                <div className="flex justify-between items-center">
                  <MdOutlineAddShoppingCart className="bg-green-500 rounded-full text-white p-1 w-8 h-8" />
                  <AiOutlineHeart className="bg-red-600 rounded-full text-white p-1 w-8 h-8" />
                  <Link to={`/product/${item._id}`}>
                  <button className="bg-blue-800 text-white px-2 rounded py-1">
                    Buy Now
                  </button>
                  </Link>
                </div>


                
          </div>
            ))
          }
            


         
          
        </div>
    );
};

export default AllProducts;