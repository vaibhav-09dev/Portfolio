'use client';
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation';

const page = () => {
    const router= useRouter();
    const[admin,setadmin]=useState({
        email:"",
        password:""
    })
    const submit=async(e)=>{
        e.preventDefault(); 
        
        try {
            await axios.post("http://localhost:3000/api/Auth",admin).then((res)=>{
                router.push("/vaibhav@3615");

            })
            
        } catch (error) {
            console.log("error in login")
            
        }
    }
  return (

    <div className='bg-gray-200 w-full h-[600]'>
      <div className=" flex justify-center items-center mt-20 ">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-28">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
          Admin email
        </label>
        <input type="text" value={admin.email} onChange={(e)=>setadmin({...admin,email:e.target.value})} placeholder='enter emailid' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <label className="block text-gray-700 text-sm font-bold mb-2" >
          password
        </label>
        <input type="text" value={admin.password} onChange={(e)=>setadmin({...admin,password:e.target.value})} placeholder='enter password' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <button onClick={submit} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Submit</button>
        </form>
        </div>
    </div>
  )
}

export default page
