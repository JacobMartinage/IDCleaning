import { coreValues, palette } from '../constants/constants';

const CoreValues = () => {
  return (
    <div className="border p-6 rounded-lg shadow-md" style={{marginLeft:'87vw', minWidth:'200px', maxHeight:'220px', background:palette.grayClear}}>
      <h3 className="text-2xl font-bold mb-4 text-primary">Core Values</h3>
      <ul className="list-disc list-inside text-white">
        {coreValues.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoreValues;
