'use client';

import { useState } from 'react';
import axios from 'axios';
import { useSidebar } from '../SidebarContext.tsx';

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
      setMessage(''); // Clear the input
      setWarning(''); // Clear any warnings
    } catch (error: any) { // Type assertion here
      if (error.response) {
        setStatus(`Failed to send message: ${error.response.data}`);
      } else {
        setStatus('Failed to send message: Unknown error');
      }
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl mb-20'>Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className='border border-gray-300 p-2 w-96 h-32 text-black'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here"
          required
        ></textarea><br />
        <button type="submit" className='bg-green-600 p-2 pr-4 rounded-md'>Send</button>
      </form>
      <div className='text-red-800'>
        {warning}
      </div>
      {status && <p>{status}</p>}
    </div>
  );
};

export default SendMessage;
