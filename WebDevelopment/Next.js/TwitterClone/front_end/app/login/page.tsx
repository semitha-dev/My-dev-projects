'use client';

import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSidebar } from '../SidebarContext.tsx';
import Image from 'next/image'; 
import backgroundImage from '../james.jpg'; 

const Login: React.FC = () => {
    const [name, setname] = useState('');
    const [password, setpassword] = useState('');
    const { setSideBarName } = useSidebar();
    const router = useRouter();  

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/userLogin', {
                Name: name, 
                password: password,
            });

            if (response.data.log) {
                console.log('Login successful');
                setSideBarName(name);
                router.push('/');
            } else {
                console.log('Login failed:', response.data.message);
            }
        } catch (error) {
            console.log('Error during login:', error);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen relative">
           
            <Image
                src={backgroundImage}
                alt="Background"
                layout="fill" 
                objectFit="cover" 
                className="z-0" 
            />
            <div className="bg-[#1c1c1c] p-8 rounded-lg shadow-xl max-w-md w-full mx-4 z-10">
                <h1 className="text-2xl font-semibold mb-6 text-center text-gray-200">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            placeholder="Enter your Name"
                            className="w-full p-3 rounded-md bg-[#2a2a2a] border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
                        <input
                            type="password" 
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            placeholder="Enter your Password"
                            className="w-full p-3 rounded-md bg-[#2a2a2a] border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full py-3 rounded-md bg-blue-500 hover:bg-blue-600 transition duration-200 font-semibold text-sm"
                    >
                        Log In
                    </button>
                </form>
                <p className="text-center mt-6 text-gray-400">
                    Don’t have an account? 
                    <Link href="/SignUp" className="ml-1 text-blue-400 hover:underline">Sign Up</Link>
                </p>
            </div>
        </main>
    );
};

export default Login;
