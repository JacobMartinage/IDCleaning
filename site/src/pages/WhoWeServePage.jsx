import WhoWeServe from '../components/WhoWeServe';

const WhoWeServePage = () => {
  return (
    <div className="font-sans">
      <header className="bg-primary text-white p-6" style={{width: '100vw'}}>
        <h1 className="text-4xl font-bold text-center">Who We Serve</h1>
      </header>
      <main className="container mx-auto p-6">
        <section id="who-we-serve" className="mb-0" >
          <WhoWeServe />
        </section>
      </main>
    </div>
  );
};

export default WhoWeServePage;
