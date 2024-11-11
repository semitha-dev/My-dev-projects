'use client';

import Link from 'next/link';
import React from 'react';
import { useSidebar } from './SidebarContext.tsx';
import { FiHome, FiEdit, FiUsers, FiLogIn } from 'react-icons/fi'; 

export const SideBar = () => {
  const { sideBarName } = useSidebar(); 

  return (
    <div className="flex flex-col justify-start items-start h-full bg-[#1c1c1c] text-white p-6 min-w-[260px] space-y-6 border-r border-gray-700">
      {sideBarName ? (
        <div className="mb-4 text-lg font-semibold text-gray-200">
          {sideBarName}
        </div>
      ) : (
        <Link
          className="flex items-center justify-center w-full py-2 text-sm rounded-md bg-blue-500 hover:bg-blue-600 transition duration-200 shadow-md"
          href="/login"
        >
          <FiLogIn className="mr-2" />
          Log In
        </Link>
      )}
      <nav className="flex flex-col w-full space-y-4">
        <Link
          className="flex items-center py-3 px-4 text-sm rounded-md bg-[#2a2a2a] hover:bg-[#333333] transition duration-200 text-left shadow"
          href="/"
        >
          <FiHome className="mr-3 text-gray-400" />
          <span>Home</span>
        </Link>
        <Link
          className="flex items-center py-3 px-4 text-sm rounded-md bg-[#2a2a2a] hover:bg-[#333333] transition duration-200 text-left shadow"
          href="/CreateNewPost"
        >
          <FiEdit className="mr-3 text-gray-400" />
          <span>Create</span>
        </Link>
        <Link
          className="flex items-center py-3 px-4 text-sm rounded-md bg-[#2a2a2a] hover:bg-[#333333] transition duration-200 text-left shadow"
          href="/users"
        >
          <FiUsers className="mr-3 text-gray-400" />
          <span>Users</span>
        </Link>
      </nav>
    </div>
  );
};
