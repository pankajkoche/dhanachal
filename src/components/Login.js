import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';

import {Link} from 'react-router-dom'
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {

    const [username, SetUserName] =useState("")
    const [password, SetPassword] =useState("")
    const dispatch = useDispatch();

    const { isFetching,error} = useSelector((state)=>state.user);

    const handleLogin =(e)=>{
        e.preventDefault()

        login(dispatch,{username,password});
    }
    return (
        <Container>
            <Wrapper className=''>
            <div class="w-full h-full max-w-xs">
                    <form class=" px-10 pt-6 pb-8 mb-1">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-semibold mb-2" for="username">
                                Username
                            </label>
                            <input onChange={(e)=>SetUserName(e.target.value)}
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input onChange={(e)=>SetPassword(e.target.value)}
                                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                            
                        </div>
                        <div class="flex items-center justify-between">
                            {
                                isFetching===false &&  <button onClick={handleLogin}
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            
                            Sign In
                            </button>
                            }

                            {
                                isFetching===true && <p className='text-orange-600 font-bold'>Loading...</p>
                            }
                           
                            <p className='p-3 text-blue-600' ><Link to="/register" smooth={true} offset={-100} duration={500}>Create Account</Link></p>

                            
                       
                        
                        </div>
                        
                    </form>
                    <p class="text-center text-gray-500 text-xs">
                        &copy;2022 Dhanachal. All rights reserved.
                    </p>
                </div>
            </Wrapper>
        </Container>
    );
};

export default Login;

const Container =styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),  url('https://img.freepik.com/premium-photo/hand-holding-shopping-bags-plain-background_23-2148286215.jpg?w=2000') center;
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