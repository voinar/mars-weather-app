// export const getStaticProps = async () => {
//   const url =
//     'http://cab.inta-csic.es/rems//wp-content/plugins/marsweather-widget/api.php';

//   const response = await fetch(url);
//   const data = await response.text();

//   return {
//     props: { weatherData: data },
//   };
// };

import { useState } from 'react';

import { MarsDate } from '/utils/marsdate.js';
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
    <div className="h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={temperatureChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" domain={[-140, 30]} />
          <YAxis yAxisId="right" orientation="right" domain={[-140, 30]} />
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

const Weather = ({ weatherData }) => {
  const [temperatureChartData, setTemperatureChartData] = useState([
    {
      name: 'Daily average',
      air_temperature_sensor: (-79 - 21) / 2,
      ground_temperature_sensor: (-84 - 6) / 2,
    },
    {
      name: `Highest temperature recorded during sol`,
      air_temperature_sensor: -79,
      ground_temperature_sensor: -21,
    },
    {
      name: `Lowest temperature recorded during sol`,
      air_temperature_sensor: -84,
      ground_temperature_sensor: -6,
    },
    {
      name: 'Daily average',
      air_temperature_sensor: (-79 - 21) / 2,
      ground_temperature_sensor: (-84 - 6) / 2,
    },
    // {
    //   "id": "3605",
    //   "terrestrial_date": "2023-04-12",
    //   "sol": "3797",
    //   "ls": "49",
    //   "season": "Month 2",
    //   "min_temp": "-79",
    //   "max_temp": "-21",
    //   "pressure": "851",
    //   "pressure_string": "Higher",
    //   "abs_humidity": "--",
    //   "wind_speed": "--",
    //   "wind_direction": "--",
    //   "atmo_opacity": "Sunny",
    //   "sunrise": "06:11",
    //   "sunset": "17:58",
    //   "local_uv_irradiance_index": "Moderate",
    //   "min_gts_temp": "-84",
    //   "max_gts_temp": "-6"
    // },
  ]);

  const weatherDataSoles = JSON.parse(weatherData).soles;
  const selectSol = (sol) => {
    console.log(sol);

    setTemperatureChartData([
      {
        name: 'Daily Avg',
        air_temperature_sensor: (sol.min_temp - sol.max_temp) / 2,
        ground_temperature_sensor: (sol.min_gts_temp - sol.max_gts_temp) / 2,
      },
      {
        name: `Highest temperature recorded during sol`,
        air_temperature_sensor: sol.min_temp,
        ground_temperature_sensor: sol.min_gts_temp,
      },
      {
        name: `Lowest temperature recorded during sol`,
        air_temperature_sensor: sol.max_temp,
        ground_temperature_sensor: sol.max_gts_temp,
      },
      {
        name: 'Daily Avg',
        air_temperature_sensor: (sol.min_temp - sol.max_temp) / 2,
        ground_temperature_sensor: (sol.min_gts_temp - sol.max_gts_temp) / 2,
      },
    ]);
  };

  const soles = weatherDataSoles
    .filter((sol) => sol.sol > 3750)
    .map((sol) => {
      return (
        <li
          key={sol.id}
          className="border rounded-md p-4 cursor-pointer"
          onClick={() => selectSol(sol)}
        >
          <ul>
            <li>
              Sol: <span>{sol.sol}</span>
            </li>
            <li>
              Sky: <span>{sol.atmo_opacity}</span>
            </li>
            <li>
              Radiation: <span>{sol.local_uv_irradiance_index}</span>
            </li>
            <li>
              Solar longitude: <span>{sol.ls} deg</span>
            </li>
            <li>
              Highest ground temperature: <span>{sol.max_gts_temp} 'C</span>
            </li>
            <li>
              Lowest ground temperature: <span>{sol.min_gts_temp} 'C</span>
            </li>
            <li>
              Highest air temperature: <span>{sol.max_temp} 'C</span>
            </li>
            <li>
              Lowest air temperature: <span>{sol.min_temp} 'C</span>
            </li>
            <li>
              Pressure: <span>{sol.pressure} pa</span>
            </li>
            {/* <li>
            Pressure trend: <span>{sol.pressure_string}</span>
          </li> */}
            <li>
              Season: <span>{sol.season}</span>
            </li>
            <li>
              Sunrise: <span>{sol.sunrise}</span>
            </li>
            <li>
              Sunset: <span>{sol.sunset}</span>
            </li>
            <li>
              Terrestrial date: <span>{sol.terrestrial_date}</span>
            </li>
            <li>
              Mars date:
              <span>
                {' '}
                {new MarsDate(new Date(sol.terrestrial_date)).string.slice(
                  0,
                  -24
                )}
              </span>
            </li>
            {/* <li>
            Wind direction: <span>{sol.wind_direction}</span>
          </li>
          <li>
            Wind speed: <span>{sol.wind_speed}</span>
          </li>
          <li>
            Absolute humidity: <span>{sol.abs_humidity}</span>
          </li> */}
            <span>Id {sol.id}</span>
          </ul>
        </li>
      );
    });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-40">
      <h1>Curiosity Rover Weather Data</h1>
      <div className="w-full h-[360px] pb-8">
        <span className="m-8">Temperature amplitude on sol</span>
        <TemperatureChart temperatureChartData={temperatureChartData} />
      </div>
      <ul className="flex flex-wrap gap-4 mt-8">{soles}</ul>
    </main>
  );
};

export default Weather;
