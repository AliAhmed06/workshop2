"use client";
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

import { toast } from 'react-toastify';

const Register = () => {    
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const registerHandler = async () => {
    try {
      setLoading(true);
      const response =  await axios.post("/api/users/register", user);
      console.log(response);

      if(response.data.success){
        toast.success("User Registered Successfully", { position: toast.POSITION.TOP_RIGHT});    
        console.log(response.data.success);
      }
      else{
        toast.error(response.data.error, { position: toast.POSITION.TOP_RIGHT});        
      }

      setUser({
        username:"",
        email:"",
        password:""
      })      
    } catch (error) {
      console.log("Signup failed");
      toast.error(error.message, { position: toast.POSITION.TOP_RIGHT});
    }finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(user.username.length > 0 && user.password.length > 0 && user.email.length > 0 ){
      setButtonDisabled(false);
    }
    else{
      setButtonDisabled(true);
    }
  }, [user])
  
  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className='w-[40%] p-20 rounded-md bg-red-800 flex flex-col text-black'>
            <h2 className='text-center text-3xl font-bold text-white'>Register</h2>
           
            <input 
                type="text"  
                className='py-2 px-5 rounded-md mt-5 outline-none'
                placeholder='Enter Username'
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                />

            <input 
                type="email"  
                className='py-2 px-5 rounded-md mt-5 outline-none'
                placeholder='Enter Email'
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                />
            
            <input 
                type="password"  
                className='py-2 px-5 rounded-md mt-5 outline-none'
                placeholder='Enter Password'
                value={user.password}
                onChange={(e) => setUser({...user, password:e.target.value})}
                />

            <button
                className='mt-5 bg-black text-white rounded-md py-2 hover:bg-opacity-60'
                onClick={registerHandler}
                disabled = {buttonDisabled ? true : false}
                >
                  {loading ? <img src="/images/loading.gif" height={40} width={40} alt="loading" /> : "Register"}
                </button>
            
            <p className='text-white mt-5'>Already have an account? <Link href={"/login"} className='text-black underline font-semibold'>Login</Link> </p>
        </div>
    </div>
  )
}

export default Register