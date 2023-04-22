import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const TemperatureChart = ({ temperatureChartData }) => {
  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={temperatureChartData}
          margin={{
            top: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" domain={[-90, 30]} />
          <YAxis yAxisId="right" orientation="right" domain={[-90, 30]} />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="ground_temperature_sensor"
            stroke="#fc7b03"
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="air_temperature_sensor"
            stroke="#3789ed"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TemperatureChart;
