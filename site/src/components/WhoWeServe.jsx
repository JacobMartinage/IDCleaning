import React from 'react';
import Card from './Card';
import { whoWeServeCategories } from '../constants/constants';

const WhoWeServe = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-primary">Who We Serve</h2>
      <div className="flex flex-wrap">
        {whoWeServeCategories.map((category, index) => (
          <Card key={index} title={category.title} items={category.items} />
        ))}
      </div>
    </div>
  );
};

export default WhoWeServe;
