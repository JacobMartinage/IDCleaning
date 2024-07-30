import React from 'react';
import { specializedServices } from '../constants/constants';

const SpecializedServices = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {Object.keys(specializedServices).map((service, index) => (
        <div key={index} className="border p-4 shadow-md rounded-lg bg-cream">
          <h3 className="text-xl font-semibold mb-4 text-primary">{service}</h3>
          <ul className="list-disc list-inside text-secondary">
            {specializedServices[service].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SpecializedServices;
