"use client";
import AdminLayout from '@/app/components/layouts/admin/AdminLayout'
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import { AiOutlineUpload } from 'react-icons/ai';



const NewProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState();
  const router = useRouter();

  const saveHandler = async (e) => {
    e.preventDefault();
    // if(!file) return;
    try {
      // console.log(file);
      // for handling image files
      // const fileData = new FormData();
      // fileData.set('file', file);
      
      // const fileRes = await fetch("/api/products/upload", {
      //   method:"POST",
      //   body:fileData
      // })
      // const fileRes = await axios.post("/api/products/upload", {fileData})
      // if(!fileRes.success) throw new Error(await fileRes.message);
      // console.log(fileRes);
      
      const response =  await axios.post("/api/products", {title:name, description, price});         
      console.log(response);
      if(response.data.success){
        toast.success(response.data.message, { position: toast.POSITION.TOP_RIGHT}); 
        router.push("/products")       
      }
      else{
        toast.error(response.data.message, { position: toast.POSITION.TOP_RIGHT});
      }
      
      setName("");
      setDescription("");
      setPrice("");      
    } catch (error) {
      toast.error(error.message, { position: toast.POSITION.TOP_RIGHT});
    }
    
  }

  return (
    <AdminLayout>
      <h3 className='text-2xl font-bold pb-5'>New Product</h3>
      
      <form onSubmit={saveHandler} className='flex flex-col gap-2'>
        <label htmlFor="name" className='font-semibold text-lg'>Product Name</label>
        <input 
            id='name'
            type="text"  
            placeholder='Enter Product Name...'
            className='admin_text_field'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        
        <p className='font-semibold text-lg mt-3'>Product Images</p>
        <label htmlFor="file" className='self-start border py-2 px-5 flex items-center justify-center gap-1 cursor-pointer'>
          <AiOutlineUpload size={20} />
          Upload File
        </label>
        <input type="file" id='file' className='hidden' onChange={(ev) => setFile(ev.target?.files[0])} />

        <label htmlFor="description" className='font-semibold text-lg'>Description</label>
        <textarea id="description" className='admin_text_field h-[120px]' value={description}  onChange={(e) => setDescription(e.target.value)} ></textarea>
        
        <label htmlFor="price" className='font-semibold text-lg'>Price (in USD)</label>
        <input 
            id='price'
            type="number"  
            placeholder='Enter Price...'
            className='admin_text_field'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
        
        <button
            type='submit'
            className='primaryBtn'
            >Save</button>
      </form>
    </AdminLayout>
  )
}

export default NewProduct