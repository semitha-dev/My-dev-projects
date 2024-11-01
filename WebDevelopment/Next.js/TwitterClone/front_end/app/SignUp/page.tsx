'use client'

import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const signup = () => {

    const  [name , setname] = useState('')
    const  [password , setpassword] = useState('')
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:3001/userSignUp' ,{
                Name:name,
                password: password,
            });
            router.push('/login')
            console.log(response)
        }catch(error){
            console.log(error)
        }
        

    }




  return (
    <main className='bg-slate-600 flex flex-col items-center mt-64 max-w-md mx-auto p-4 rounded-lg shadow-lg'>
    <h1 className='text-xl font-bold'>SignUp </h1>
    <form onSubmit={handleSubmit} className='w-full'>
        <div className='mb-4'>
            <label className='block text-sm font-medium'>Name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Enter your Name"
                className='w-full p-2 border rounded text-black'
            />
        </div>
        <div className='mb-4'>
            <label className='block text-sm font-medium'>Password</label>
            <input
                type="password" 
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Enter your Password"
                className='w-full p-2 border rounded text-black'
            />
        </div>
        <button type="submit" className='bg-blue-500 text-white p-2 rounded'>Submit</button>
    </form>
    <Link href="/login" className='mt-4 text-blue-300'>Login</Link>
</main>
  )
}

export default signup