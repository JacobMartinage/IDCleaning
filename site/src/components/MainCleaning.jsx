import React from 'react';
import { mainCleaningServices } from '../constants/constants';

const MainCleaning = () => {
  return (
    <div className="p-6 bg-neutral rounded-lg shadow-md mb-12">
      <h2 className="text-2xl font-bold mb-4 text-primary">Main Cleaning Services</h2>
      <ul className="list-disc list-inside text-secondary">
        {mainCleaningServices.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default MainCleaning;
