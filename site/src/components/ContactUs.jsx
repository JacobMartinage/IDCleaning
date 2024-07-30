const ContactUs = () => {
  return (
    <section id="contact-us" className="bg-primary text-white p-6 rounded-lg shadow-lg" style={{width:'100vw'}}>
      <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
      <div className='flex flex-wrap' style={{justifyContent:'center', width:'100vw'}}>
        <div style={{paddingLeft:'10%', paddingRight:'10%'}}>
          <h3 className="text-xl font-semibold">Dennis Bravo</h3>
          <p>ID Commercial Cleaning</p>
          <p>5737 Sunset View Ln, Frederick, MD, 21703</p>
          <p>Owner</p>
          <p>443-772-6319</p>
          <p><a href="mailto:dbravo@idcommercialcleaning.com" className="text-white underline">dbravo@idcommercialcleaning.com</a></p>
        </div>
        <div style={{paddingLeft:'10%', paddingRight:'10%'}}>
          <h3 className="text-xl font-semibold">Ivonne Lindsey</h3>
          <p>ID Commercial Cleaning</p>
          <p>Owner</p>
          <p>410-805-0087</p>
          <p><a href="mailto:ilindsey@idcommercialcleaning.com" className="text-white underline">ilindsey@idcommercialcleaning.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
