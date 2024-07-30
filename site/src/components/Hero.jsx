import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-secondary text-white p-12 mb-12 rounded-lg shadow-lg text-center">
      <h2 className="text-5xl font-bold mb-4">Welcome to ID Cleaning Services</h2>
      <p className="text-lg mb-4">Providing exceptional cleaning services tailored to your needs.</p>
      <a href="#about-us" className="bg-primary text-white py-2 px-4 rounded hover:bg-white hover:text-primary transition">Learn More</a>
    </section>
  );
};

export default Hero;
