import { LineChart as LChart, Line ,XAxis, YAxis } from "recharts";

const Linechart = () => {
    const data = [
        { name: 'Student 1', mathScore: 80, physicsScore: 75, chemistryScore: 85 },
        { name: 'Student 2', mathScore: 85, physicsScore: 78, chemistryScore: 88 },
        { name: 'Student 3', mathScore: 70, physicsScore: 65, chemistryScore: 72 },
        { name: 'Student 4', mathScore: 90, physicsScore: 82, chemistryScore: 91 },
        { name: 'Student 5', mathScore: 75, physicsScore: 70, chemistryScore: 80 },
        { name: 'Student 6', mathScore: 88, physicsScore: 85, chemistryScore: 90 },
        { name: 'Student 7', mathScore: 95, physicsScore: 92, chemistryScore: 98 },
        { name: 'Student 8', mathScore: 82, physicsScore: 77, chemistryScore: 86 },
        { name: 'Student 9', mathScore: 78, physicsScore: 72, chemistryScore: 81 },
        { name: 'Student 10', mathScore: 87, physicsScore: 80, chemistryScore: 89 },
      ];
      
  return (
    <div>
      <LChart width={1200} height={400} data={data}>
        <Line type="monotone" dataKey="mathScore" stroke="#8884d8" />
        <Line type="monotone" dataKey="physicsScore" stroke="red" />
        <Line type="monotone" dataKey="chemistryScore" stroke="purple" />
        <XAxis dataKey={"name"}></XAxis>
        <YAxis ></YAxis>
      </LChart>
    </div>
  );
};

Linechart.propTypes = {};

export default Linechart;
