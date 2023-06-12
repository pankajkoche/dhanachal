import React from 'react';
import styled from 'styled-components';
import { homeProductsData } from '../utils/data';
import HomeItem from './HomeItem';



const HomeProducts = () => {
    
    return (
        <Container>
             {homeProductsData.map(item=>(
                <HomeItem item={item} key={item.id}/>
             ))}
        </Container>
    );
};

export default HomeProducts;

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    @media only screen and (max-width:380px){
        flex-direction: column;
        padding:10px;
    }
`
  