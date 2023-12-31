"use client";
import { useEffect, useState } from 'react';
import AdminLayout from './components/layouts/admin/AdminLayout'
// import useStore from '@/hooks/useStore';
import useCourseStore from '@/hooks/courseStore';
import axios from 'axios';
import useUserStore from '@/hooks/userStore';



const Page = () => {
  const userStore = useUserStore((state) => state.user);
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(userStore);
  }, [userStore])
  
  
  console.log("user Data",user);
  // let user = JSON.parse(sessionStorage.getItem('user'));
  
  return (
    <AdminLayout>
      <div className='flex items-center justify-between'>
        <div>
          <p>
            Hello 
            {/* {user.username && ( */}
              <span className='font-bold'> {user?.username } </span>
            {/* )} */}
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