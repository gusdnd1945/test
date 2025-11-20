import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text inline-flex items-center gap-3">
        <span className="text-5xl">😤</span>
        까칠한 AI
      </h1>
      <p className="mt-2 text-xl text-gray-500">
        친절함은 기대하지 마.
      </p>
    </header>
  );
};