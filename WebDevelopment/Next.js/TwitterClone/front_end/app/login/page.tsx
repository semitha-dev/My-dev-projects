'use client';

import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSidebar } from '../SidebarContext.tsx'; // Import useSidebar

const Login: React.FC = () => {
    const [name, setname] = useState('');
    const [password, setpassword] = useState('');
    const { setSideBarName } = useSidebar(); // Access setSideBarName from context
    const router = useRouter();  

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/userLogin', {
                Name: name, 
                password: password,
            });

            if (response.data.log) { // If login is successful
                console.log('Login successful');
                setSideBarName(name); // Update context's sideBarName
                router.push('/');  // Redirects to the home page after login
            } else {
                console.log('Login failed:', response.data.message);
            }
        } catch (error) {
            console.log('Error during login:', error);
        }
    };

    return (
        <main className='bg-slate-600 flex flex-col items-center mt-64 max-w-md mx-auto p-4 rounded-lg shadow-lg'>
    <h1 className='text-xl font-bold'>Login</h1>
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
    <Link href="/SignUp" className='mt-4 text-blue-300'>Sign Up</Link>
</main>
    );
};

export default Login;
