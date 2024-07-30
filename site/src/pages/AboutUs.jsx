import CoreValues from '../components/CoreValues';
import MissionStatement from '../components/MissionStatement';

const AboutUs = () => {
  return (
    <div className="font-sans">
      <header className="bg-primary text-white p-6 mb-12" style={{width:'100vw'}}>
        <h1 className="text-4xl font-bold text-center">About Us</h1>
      </header>
      <main className="container">
        <section id="about-us" className="mb-12">
          <div className="flex flex-row" style={{alignItems:'center'}}>
            <MissionStatement />
            <CoreValues />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
