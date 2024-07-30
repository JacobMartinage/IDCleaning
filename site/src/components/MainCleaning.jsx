import { mainCleaningServices, palette } from '../constants/constants';

const MainCleaning = () => {
  return (
    <div className= "p-6 rounded-lg shadow-md mb-12" style={{width:'60vw', background:palette.darkGrayClear}}>
      <h2 className="text-2xl font-bold mb-4 text-primary" style={{textAlign:'center'}}>Main Cleaning Services</h2>
      <ul className="list-disc list-inside text-white" style={{textAlign:'center'}}>
        {mainCleaningServices.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default MainCleaning;
