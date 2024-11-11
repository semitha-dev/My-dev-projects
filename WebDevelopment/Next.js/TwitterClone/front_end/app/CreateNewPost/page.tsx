'use client';

import { useState } from 'react';
import axios from 'axios';
import { useSidebar } from '../SidebarContext.tsx';
import Image from 'next/image'; 
import backgroundImage from '../james.jpg'; 

const SendMessage = () => {
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [warning, setWarning] = useState<string>('');
  const { sideBarName } = useSidebar();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!sideBarName) {
      setWarning('You are not logged in. Please log in before sending a post.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/addPost', { 
        content: message, 
        username: sideBarName  
      });
      setStatus('Message sent successfully');
      setMessage(''); 
      setWarning(''); 
    } catch (error: any) {
      if (error.response) {
        setStatus(`Failed to send message: ${error.response.data}`);
      } else {
        setStatus('Failed to send message: Unknown error');
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen">
      
      <Image
        src={backgroundImage}
        alt="Background"
        layout="fill" 
        objectFit="cover" 
        className="z-0"
      />
      <div className='bg-[#1c1c1c] bg-opacity-80 p-8 rounded-lg shadow-md max-w-md mx-auto z-10'>
        <h1 className='text-3xl font-bold text-white mb-6'>Create a Post</h1>
        <form onSubmit={handleSubmit} className='w-full'>
          <textarea
            className='w-full h-32 p-4 border border-gray-700 bg-[#2a2a2a] text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here"
            required
          />
          <button type="submit" className='w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200 mt-4'>
            Send
          </button>
        </form>
        {warning && <div className='mt-4 text-red-500'>{warning}</div>}
        {status && <p className='mt-2 text-green-500'>{status}</p>}
      </div>
    </div>
  );
};

export default SendMessage;
