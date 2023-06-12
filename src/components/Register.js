import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { RegisterUser } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

import {Link} from 'react-router-dom'

const Register = () => {
    const [username, SetUserName] =useState("")
    const [password, SetPassword] =useState("")
    const [firstname, Setfirstname] =useState("")
    const [lastname, Setlastname] =useState("")
    const [mobileno, Setmobileno] =useState("")
    const [email, Setemail] =useState("")
    const dispatch = useDispatch();
    
    const handleRegister =(e)=>{
       
        RegisterUser(dispatch,{username,password,firstname,lastname,email,mobileno});
        
    }

    return (
        <Container>
            <Wrapper className='md:w-[50%] '>
                <Title>CREATE AN ACCOUNT</Title>
                <form action="#" className=''>
                        <div className="grid grid-cols-2 gap-2">
                            <input onChange={(e)=>Setfirstname(e.target.value)}
                            type="text" placeholder="Firstname" className="border border-gray-400 py-1 px-2"/>
                            <input onChange={(e)=>Setlastname(e.target.value)}
                            type="text" placeholder="Surname" className="border border-gray-400 py-1 px-2"/>
                        </div>
                        <div className="mt-5 grid grid-cols-2 gap-2">
                            <input onChange={(e)=>Setemail(e.target.value)}
                            type="" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full"/>
                            <input onChange={(e)=>Setmobileno(e.target.value)}
                            type="text" placeholder="Mobile no" className="border border-gray-400 py-1 px-2 w-full"/>
                        </div>
                        <div className="mt-5">
                            <input onChange={(e)=>SetUserName(e.target.value)}
                            type="text" placeholder="username" className="border border-gray-400 py-1 px-2 w-full"/>
                        </div>
                        <div className="mt-5">
                            <input onChange={(e)=>SetPassword(e.target.value)}
                            type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full"/>
                        </div>
                        <div className="mt-5">
                            <input type="checkbox" className="border border-gray-400"/>
                            <span>
                            I accept the <a href="#" className="text-purple-500 ">Terms of Use</a> &  <a href="#" className="text- ">Privacy Policy</a> 
                            </span>
                        </div>
                        <div className="text-center">
                            <button onClick={handleRegister}
                                className="w-full bg-red-600 py-2 rounded  text-center text-white">Register Now</button>
                            <p>Already have an account?
                              <Link to="/login" smooth={true} offset={-100} duration={500} className="text-blue-600 "> Sign in</Link></p>
                        </div>
                        
            </form>
            </Wrapper>
        </Container>
    );
};

export default Register;
const Container =styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),  url('https://img.freepik.com/premium-photo/sale-offer-black-friday-shopping-discount-closeup-woman-hand-holding-purchase-bags-isolated-orange-empty-space-background_279525-17960.jpg?w=2000');
    display: flex;
    align-items: center;
    justify-content: center;

`

const Wrapper =styled.div`
    margin: 20px;
    padding: 20px;
    background-color: white;
    margin-top: 0;
    border-radius: 8px;
`
const Title= styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
    
`
const Input = styled.input`
    flex:1; 
    min-height: 40%;
    margin: 20px 10px 0px 0px;
`
const Agreement =styled.p`
`