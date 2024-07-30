import React from 'react';

const Card = ({ title, items }) => {
  return (
    <div className="border p-4 m-2 shadow-md rounded-lg bg-cream hover:bg-neutral hover:text-white transition">
      <h3 className="text-lg font-bold mb-2 text-primary">{title}</h3>
      <ul className="list-disc list-inside text-secondary">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
