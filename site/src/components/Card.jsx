import { palette } from '../constants/constants'; 

const Card = ({ title, items }) => {

  return (
    <div className="border p-4 m-4 shadow-md rounded-lg" style={{background:palette.grayClear}}>
      <h3 className="text-lg font-bold mb-2 text-primary">{title}</h3>
      <ul className="list-disc list-inside text-white">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
