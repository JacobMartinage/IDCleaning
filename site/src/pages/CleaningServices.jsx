import React from 'react';
import MainCleaning from '../components/MainCleaning';
import SpecializedServices from '../components/SpecializedServices';

const CleaningServices = () => {
  return (
    <section id="cleaning-services" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">Cleaning Services</h2>
      <MainCleaning />
      <SpecializedServices />
    </section>
  );
};

export default CleaningServices;
