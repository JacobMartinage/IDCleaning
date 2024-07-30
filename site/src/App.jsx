import React from 'react';
import Hero from './components/Hero';
import AboutUs from './pages/AboutUs';
import WhoWeServeSection from './pages/WhoWeServe';
import CleaningServices from './pages/CleaningServices';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <div className="font-sans">
      <main className="container mx-auto p-6">
        <Hero />
        <AboutUs />
        <WhoWeServeSection />
        <CleaningServices />
        <ContactUs />
      </main>
    </div>
  );
};

export default App;
