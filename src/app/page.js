"use client";
import { useEffect, useState } from 'react';
import AdminLayout from './components/layouts/admin/AdminLayout'
// import useStore from '@/hooks/useStore';
import useCourseStore from '@/hooks/courseStore';
import axios from 'axios';



const Page = () => {
  
  const [user, setUser] = useState({});
  useEffect(() => {
    getUserData();
  }, [])

  async function getUserData(){
    let userData = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/api/users/me` );
    userData = await userData.data.user;
    setUser(userData);    
    // let test = await process.env.DOMAIN;
    // console.log("ali", test);
  }

  console.log(user);
  
  return (
    <AdminLayout>
      <div className='flex items-center justify-between'>
        <div>
          <p>
            Hello 
            <span className='font-bold'> {user?.username}</span>
          </p>
        </div>
        <div className='flex items-center gap-5 bg-gray-300 p-1 rounded-full overflow-hidden pr-4 '>
          <img src="/images/avatar.png" alt="" className='h-[50px] w-[50px]' />
          <p className='font-bold'>{user?.username}</p>
        </div>
      </div>
    </AdminLayout>
  )
}

export default Page