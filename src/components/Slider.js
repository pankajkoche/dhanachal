import React, { useState } from 'react';
import styled from 'styled-components';
import {RiArrowLeftSFill,RiArrowRightSFill } from 'react-icons/ri'
import {slideData} from '../utils/data'
import { Button } from '@mui/material';
const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick =(direction)=>{
        if (direction ==='left'){
            setSlideIndex(slideIndex > 0 ? slideIndex-1: 2)
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1: 0)
        }
    };
    return (
        <Container>
            <Arrow direction='left' onClick={()=>handleClick('left')}>
                <RiArrowLeftSFill />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {slideData.map(item=>(
                    <Slide bg={item.bg}>
                    <ImgContainer>
                        <Image src={item.Img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>
                            {item.title} 
                        </Title>
                        <Desc>
                            {item.desc}
                        </Desc>
                        <Button variant="outlined" color="secondary">
                        Shop Now
                        </Button>
                      
                    </InfoContainer>
                </Slide>
                ))}
                
            </Wrapper>
            <Arrow direction='right' onClick={()=>handleClick('right')}>
                <RiArrowRightSFill />
            </Arrow>
        </Container>
    );
};

export default Slider;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    
`

const Arrow =styled.div`
    width: 40px;
    height: 40px;
    background-color: #00FF7F;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left:${props=> props.direction === "left" && "10px"};
    right:${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;

`

const Wrapper =styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition:all 1.5s ease ;
`
const Slide =styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: ${props=>props.bg};

`
const ImgContainer =styled.div`
    height: 100%;
    flex: 1;
    margin-left: 90px;
`
const InfoContainer =styled.div`
    flex: 1;
    padding: 50px;
    
`
const Title = styled.h2`
     font-size: 60px;
`
const Desc = styled.p`
    margin: 30px 0px ;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Image =styled.img`
height: 80%;
`