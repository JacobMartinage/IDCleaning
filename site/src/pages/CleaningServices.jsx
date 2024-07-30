import MainCleaning from '../components/MainCleaning';
import SpecializedServices from '../components/SpecializedServices';

const CleaningServices = () => {
  return (
    <div className="font-sans">
      <header className="bg-primary text-white p-6 mb-12" style={{width: '100vw'}}>
        <h1 className="text-4xl font-bold text-center">Cleaning Services We Offer</h1>
      </header>
      <main className="container" >
        <section id="cleaning-services" className="mb-12 flex flex-wrap" style={{width:'100vw', justifyContent:'center', alignItems:'center'}}>
          <MainCleaning />
          <SpecializedServices />
        </section>
      </main>
    </div>
  );
};

export default CleaningServices;
