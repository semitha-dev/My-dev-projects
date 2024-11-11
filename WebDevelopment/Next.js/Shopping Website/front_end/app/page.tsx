import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-blue-500 text-white p-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        
        <div className="max-w-lg space-y-4">
          <h1 className="text-5xl font-bold leading-tight">Keep on track. Reach your fitness goal.</h1>
          <p className="text-lg text-blue-100">
            Cursus amet, mattis placerat convallis libero faucibus quis est porta vivamus erat tristique sed.
          </p>
          <div className="flex space-x-4 mt-4">
            <button className="px-6 py-2 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-100">
              Start For Free
            </button>
            <a href="#" className="flex items-center text-white font-semibold hover:underline">
              ➞ Learn More
            </a>
          </div>
        </div>
        
        <div className="relative flex-shrink-0">
          <div className="absolute top-0 left-8 bg-white p-6 rounded-lg shadow-lg w-64 transform scale-90">
            <h3 className="text-xl font-semibold text-gray-700">Hi, Jane</h3>
            <p className="mt-2 text-gray-500">92 Current Score</p>
            <p className="mt-1 text-gray-400 text-sm">Odio amet pretium imperdiet urna molestie id eget ullamcorper.</p>
            <a href="#" className="mt-2 text-blue-500 text-sm underline">Read More</a>
          </div>

          <div className="relative bg-white p-6 rounded-lg shadow-lg w-64">
            <h3 className="text-2xl font-bold text-gray-700">Gobios</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Fermentum ut in interdum parturient odio tellus sapien arcu leo nunc id mus orci id commodo.
            </p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600">
              Create Account
            </button>
            <p className="mt-2 text-gray-400 text-sm">
              Already have an account? <a href="#" className="text-blue-500 underline">Sign In Here</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
