import { specializedServices, palette } from '../constants/constants';

const SpecializedServices = () => {
  return (
    <div className="flex flex-wrap" style={{justifyContent:'center'}}>
      {Object.keys(specializedServices).map((service, index) => (
        <div key={index} className="border p-4 m-4 mb-4 shadow-md rounded-lg" style={{background:palette.grayClear, minHeight:'0vh', minWidth:'0vw'}}>
          <h3 className="text-xl font-semibold mb-4 text-primary">{service}</h3>
          <ul className="list-disc list-inside text-white">
            {specializedServices[service].map((item, idx) => (
              <li style={{maxWidth:'20vw'}} key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SpecializedServices;
