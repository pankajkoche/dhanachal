import Home from "./components/Home";
import Header from "./components/Header";
import {Route,Routes, Navigate} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import AllProducts from "./components/AllProducts";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import Products from "./components/Products";
import { useSelector } from "react-redux";


function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <AnimatePresence exitBeforeEnter>
    <div className=' '>
        <Header/>
        <main className="pt-20"> 
        <Routes>
        <Route  exact path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/Allproducts' element={<AllProducts/>}/>
        <Route path='/product/:_id' element={<ProductDetails/>}/>
        <Route path='/login' element={user ? <Navigate to="/" /> : <Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/payment' element={<Payment/>}/>
            
        </Routes>
        </main>
        <Footer/>
    </div>
    </AnimatePresence>
  );
}

export default App;
