import Card from './Card';
import { whoWeServeCategories } from '../constants/constants';

const WhoWeServe = () => {
  return (
      <div className="flex flex-wrap" style={{width:'100vw',justifyContent:'center', alignContent:'center'}}>
        {whoWeServeCategories.map((category, index) => (
          <Card key={index} title={category.title} items={category.items} />
        ))}
      </div>
  );
};

export default WhoWeServe;
