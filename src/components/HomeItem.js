import React from 'react';
import { Button } from '@mui/material'
import styled from 'styled-components';


const HomeItem = ({item}) => {
    return (
        <Container>
           
            <Img src={item.Img}>

            </Img>
            <Info>
                <Title>{item.title}</Title>
                <Butto>SHOP NOW</Butto>
               
            </Info>
            
        </Container>
    );
};

export default HomeItem;

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`
const Img =styled.img`
   width :100% ;
   height: 100%;
   object-fit: cover;
 
`
const Info = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.div`
    color: white;
    font-weight: 700;
    font-size: 30px;
`
const Butto = styled.button`
    border: none;
    padding: 6px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`