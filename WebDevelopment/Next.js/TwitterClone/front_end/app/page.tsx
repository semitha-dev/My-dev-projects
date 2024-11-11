'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import backgroundImage from './james.jpg'; 

interface Message {
  _id: string;
  username: string;
  content: string;
  createdAt: string;
}

const Home: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:3001/getPosts");
        setMessages(response.data);
      } catch (error) {
        console.log("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen p-4 relative">
      
      <Image
        src={backgroundImage}
        alt="Background"
        layout="fill" 
        objectFit="cover"
        className="z-0"
      />
      <h3 className="text-xl font-bold mb-4 text-white z-10">Home</h3>
      <ul className="w-full max-w-md space-y-4 z-10">
        {messages
          .slice()
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .map((message) => (
            <li
              key={message._id}
              className="bg-[#252525] rounded-lg p-4 text-white"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                  {message.username[0].toUpperCase()}
                </div>
                <p className="text-sm font-semibold">{message.username}</p>
                <small className="text-gray-500 ml-auto text-xs">
                  {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </small>
              </div>
              <p className="text-gray-300 text-sm mb-3">{message.content}</p>
              <Link href={`/reply/${message._id}`} passHref>
                <span className="text-blue-500 text-xs hover:underline cursor-pointer">
                  Reply
                </span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
