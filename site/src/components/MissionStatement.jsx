import { missionStatement, palette } from '../constants/constants';

const MissionStatement = () => {
  return (
    <div className="p-6 pb-12 shadow-md" style={{border:'solid', borderWidth:'1px', borderLeft:'none',position:'absolute', height:'37.3vh', width:'24vw', background:palette.grayClear}}>
      <h3 className="text-2xl font-bold mb-4 text-primary">Mission Statement</h3>
      <p className="text-white">{missionStatement}</p>
    </div>
  );
};

export default MissionStatement;
