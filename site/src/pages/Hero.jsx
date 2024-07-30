import React from 'react';
import MainCleaning from '../components/MainCleaning';
import SpecializedServices from '../components/SpecializedServices';

const CleaningServices = () => {
  return (
    <div className="font-sans">
      <header className="bg-primary text-white p-6">
        <h1 className="text-4xl font-bold text-center">ID Cleaning Services</h1>
      </header>
      <main className="container mx-auto p-6">
        <section id="cleaning-services" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">Cleaning Services</h2>
          <MainCleaning />
          <SpecializedServices />
        </section>
      </main>
    </div>
  );
};

export default CleaningServices;
