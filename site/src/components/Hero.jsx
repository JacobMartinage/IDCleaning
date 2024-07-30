const Hero = () => {
  return (
    <section id="hero" className="text-white p-12 mb-12 text-center" style={{width:'100vw', background:'#808080', margin:'0px'}}>
      <h2 className="text-5xl font-bold mb-4">Welcome to ID Cleaning Services</h2>
      <p className="text-lg mb-4">Providing exceptional cleaning services tailored to your needs.</p>
      {/* <a href="#about-us" className="bg-primary text-white py-2 px-4 rounded hover:bg-white hover:text-primary transition">Learn More</a> */}
      {/* Yo why is this here? It scrolls like half a screen down the page */}
    </section>
  );
};

export default Hero;
