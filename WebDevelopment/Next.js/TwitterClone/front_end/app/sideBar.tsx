'use client';

import Link from 'next/link';
import React from 'react';
import { useSidebar } from './SidebarContext.tsx';// Import the useSidebar hook

export const SideBar = () => {
  const { sideBarName } = useSidebar(); // Access sideBarName from context

  return (
    <div className="flex flex-col justify-start items-start h-full bg-gray-100 p-4 text-black">
      {sideBarName ? (
        <div className="m-2 mb-40 p-2 text-lg font-semibold text-gray-600">
          {sideBarName}
        </div>
      ) : (
        <Link
          className="bg-white m-2 mb-40 p-2 rounded shadow hover:bg-gray-200 transition duration-200"
          href="/login"
        >
          Log In
        </Link>
      )}
      <Link
        className="bg-white m-2 mb-4 p-2 rounded shadow hover:bg-gray-200 transition duration-200"
        href="/"
      >
        Home
      </Link>
      <Link
        className="bg-white m-2 p-2 rounded shadow hover:bg-gray-200 transition duration-200"
        href="/CreateNewPost"
      >
        Create
      </Link>
    </div>
  );
};
