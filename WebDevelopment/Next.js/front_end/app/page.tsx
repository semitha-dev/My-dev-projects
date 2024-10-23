// pages/index.tsx
import Link from "next/link";
import React from 'react';

const Home: React.FC = () => {
  return (
    <main>
      <Link href="/Comment">
        Click ME
      </Link>
    </main>
  );
};

export default Home;
