import React from 'react';
import { missionStatement } from '../constants/constants';

const MissionStatement = () => {
  return (
    <div className="p-6 bg-cream rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-primary">Mission Statement</h3>
      <p className="text-secondary">{missionStatement}</p>
    </div>
  );
};

export default MissionStatement;
