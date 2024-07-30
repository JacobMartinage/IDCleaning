import React from 'react';
import { coreValues } from '../constants/constants';

const CoreValues = () => {
  return (
    <div className="p-6 bg-cream rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-primary">Core Values</h3>
      <ul className="list-disc list-inside text-secondary">
        {coreValues.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoreValues;
