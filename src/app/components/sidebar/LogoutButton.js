import axios from 'axios';
import React from 'react'
import { AiOutlineLogout } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();
  const logoutHandler = async() => {
    try {
        const response =  await axios.get("/api/users/logout");   
        
        if(response.data.success){
          toast.success("Logout Successful", { position: toast.POSITION.TOP_RIGHT});
          router.push("/login");
        }
        else{
          toast.error(response.data.message, { position: toast.POSITION.TOP_RIGHT});
        }
              
      } catch (error) {
        toast.error(error.message, { position: toast.POSITION.TOP_RIGHT});
      }finally {
        
      }
  }

  return (
    <button 
        onClick={logoutHandler}
        className={`flex items-center font-semibold gap-3 p-2 hover:bg-white hover:text-black rounded-full`}>
        <AiOutlineLogout size={25} />
        <p className='text-lg'>Logout</p>    
    </button>
  )
}

export default LogoutButton