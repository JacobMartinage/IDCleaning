import Hero from './components/Hero';
import AboutUs from './pages/AboutUs';
import WhoWeServePage from './pages/WhoWeServePage';
import CleaningServices from './pages/CleaningServices';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <div style={{width:'100vw', overflowX:'hidden', background:'rgba(244, 220, 195, 1)'}}>
      <main className="container">
        <Hero />
        <AboutUs />
        <WhoWeServePage />
        <CleaningServices />
        <ContactUs />
      </main>
    </div>
  );
};

export default App;
