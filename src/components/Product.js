import React from 'react';
import styled from 'styled-components';
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Product = ({item}) => {
    return (
        <Container>
           
            <Img src={item.Img}/>
            <Info> 
                <Icon> 
                <AiOutlineShoppingCart/>
                </Icon>
                <Icon>
                <AiOutlineHeart/>
                </Icon>
                <Link to={`/product/${item.id}`}>
                <Button variant="contained" size="small" >Buy Now</Button>
                </Link>
                

            </Info>

        </Container>
    );
};

export default Product;

const Info =styled.div` 
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;

`
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width:280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }

`
const Img = styled.img`
  
    height: 75%;
    z-index: 2;

`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`
const Title =styled.h1`

`