import React, {useState} from 'react';
import {  animateScroll as scroll, } from 'react-scroll'
import {Link} from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion";
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCross} from 'react-icons/im'
import {MdShoppingCart} from 'react-icons/md'
import Logo from '../assets/logo.png'
import Notice from './Notice';
import { Button } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import { LogOut } from '../redux/apiCalls';
import { logoutCart } from '../redux/cartRedux';

const Header = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

    const quantity = useSelector(state=>state.cart.quantity)
    const user = useSelector((state) => state.user.currentUser);
    
    const dispatch = useDispatch();
    const userLogout=()=>{
      LogOut(dispatch);
      dispatch(logoutCart({
    
      }));

    } 
  

  return (
    <div className='fixed z-10'>
      <Notice/>
        <div className='w-screen md:h-[56px] h-[60px]   bg-white  drop-shadow-lg'>
      <div className=' flex justify-between items-center w-full h-full'>  
        <div className='flex items-center'>
            <div>
        <Link to={'/'} className='flex item-center gap-2 px-3'>
                <img src={Logo} className='w-10 object-cover' alt='logo' />
            <p className='text-headingColor text-xl font-bold '>Dhanachal</p>
            </Link>
            </div>
        </div>

        
        <div  className='ml-auto mr-2'>
        <motion.ul 
                initial={{opacity:0,x:200}} 
                animate={{opacity:1, x:0}}
                exit={{opacity:0,x:200}}  className='hidden md:flex  text-sm items-center gap-6 '>
          <li><Link to="/" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="Allproducts" smooth={true} offset={-50} duration={500}>Products</Link></li>
          <li><Link to="/about" smooth={true} offset={-100} duration={500}>About Us</Link></li>
          <li><Link to="/contact" smooth={true} offset={-50} duration={500}>Contact</Link></li>
          </motion.ul >
        </div>
        
        <div className='hidden md:flex pr-4'>
        <motion.div className='relative flex items-center justify-center px-2' >
           
        <Link to="/cart" smooth={true} offset={-100} duration={500}><MdShoppingCart/> </Link>
                <div className='w-5 h-5 rounded-full bg-red-500 flex items-center justify-center'>
                    
                <Link to="/cart" smooth={true} offset={-100} duration={500}><p className='text-xs text-white font-semibold'>{quantity}</p></Link>
                </div>
                
           </motion.div>
           {
              user && 
              <div className='flex '>
                <p className='m-2 text-lg text-blue-700'>{user.firstname}</p>
                  <Button onClick={userLogout}
               variant="contained" color="error"><Link to="/login" smooth={true} offset={-100} duration={500}>Logout</Link></Button>
               
              </div>
              
           }
           {
              user==null && <Button variant="contained" color="error"><Link to="/login" smooth={true} offset={-100} duration={500}>SIGN IN</Link></Button>
           }
           
          
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <GiHamburgerMenu className='w-5' /> : <ImCross className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 md:hidden'}>
      <li><Link to="/" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="Allproducts" smooth={true} offset={-50} duration={500}>Products</Link></li>
          <li><Link to="about" smooth={true} offset={-100} duration={500}>About Us</Link></li>
          <li><Link to="contact" smooth={true} offset={-50} duration={500}>Contact</Link></li>
          <Link to="/cart" smooth={true} offset={-100} duration={500}>
          <div className='relative flex items-center justify-center' >
                <MdShoppingCart/> 
                <div className='w-5 h-5 rounded-full bg-red-500 flex items-center justify-center'>
                    <p className='text-xs text-white font-semibold'>2</p>
                </div>
           </div>
           </Link> 

        <div className='flex flex-col my-4'>
        <button className=' rounded-md px-3 py-1 mr-4 bg-blue-700'>
        <Link to="/login" smooth={true} offset={-100} duration={500}>Sign in</Link>
          </button>
        </div>
      </ul>
    </div>
    </div>
    
  );
};

export default Header;