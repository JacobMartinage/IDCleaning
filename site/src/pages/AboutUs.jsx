import React from 'react';
import CoreValues from '../components/CoreValues';
import MissionStatement from '../components/MissionStatement';

const AboutUs = () => {
  return (
    <div className="font-sans">
      <header className="bg-primary text-white p-6">
        <h1 className="text-4xl font-bold text-center">ID Cleaning Services</h1>
      </header>
      <main className="container mx-auto p-6">
        <section id="about-us" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">About Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CoreValues />
            <MissionStatement />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
