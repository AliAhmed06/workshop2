"use client";
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import axios from 'axios';
import Link from 'next/link';

const Profile = () => {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserDetails();
  }, [])
  
  
  const logoutHandler = async () => {
    try {
      await axios.get("/api/users/logout");            
      toast.success("User Logged out Successfully", { position: toast.POSITION.TOP_RIGHT});
      router.push("/login");
    } catch (error) {
      // console.log("Signup failed");
      toast.error(error.message, { position: toast.POSITION.TOP_RIGHT});
    }
  }

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");    
    setUser(res.data.user);
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-3'>
        <h2 className='text-2xl font-bold'>Profile Page</h2>
        <p>hello {user?.username}</p>

        <button 
          className='bg-blue-500 py-2 px-7 rounded-md'
          onClick={getUserDetails}
          >Get user id</button>

        <button 
          className='bg-red-500 py-2 px-7 rounded-md'
          onClick={logoutHandler}
          >Logout</button>
    </div>
  )
}

export default Profile