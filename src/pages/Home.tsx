import React from 'react';

const Home: React.FC = () => {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex h-full w-full items-center justify-center bg-shuvium-blue text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shuvium-saffron focus-visible:ring-inset"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-shuvium-gold mb-4">Shuvium Sanctum</h1>
        <p className="text-lg text-shuvium-saffron">Locked Viewport Initialized</p>
      </div>
    </main>
  );
};

export default Home;