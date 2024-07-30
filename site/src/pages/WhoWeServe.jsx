import React from 'react';
import WhoWeServe from '../components/WhoWeServe';

const WhoWeServePage = () => {
  return (
    <div className="font-sans">
      <header className="bg-primary text-white p-6">
        <h1 className="text-4xl font-bold text-center">ID Cleaning Services</h1>
      </header>
      <main className="container mx-auto p-6">
        <section id="who-we-serve" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">Who We Serve</h2>
          <WhoWeServe />
        </section>
      </main>
    </div>
  );
};

export default WhoWeServePage;
