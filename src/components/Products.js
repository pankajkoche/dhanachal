import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { homeProduct } from '../utils/data';
import Product from './Product';


const Products = () => {
    
    return (
        <Container className=' sm:flex-direction: column'>
            {homeProduct.map(item=>( 
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    );
};

export default Products;

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
   
`