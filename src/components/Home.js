import React from 'react';
import About from './About';
import Slider from './Slider';
import Header from './Slider';
//import { homeCourseData } from '../utils/data';
import HomeProducts from './HomeProducts';
import Products from './Products';

const Home = () => {
    
    return (
        <div className=''>
          <Slider/>
          <HomeProducts />
          <Products/>
          <About/>
        </div>
    );
};

export default Home;