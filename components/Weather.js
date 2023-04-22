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

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

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
            // right: 30,
            // left: 20,
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

const Weather = ({ weatherData }) => {
  const [temperatureChartData, setTemperatureChartData] = useState([
    {
      name: 'Daily average',
      air_temperature_sensor: (-79 - 21) / 2,
      ground_temperature_sensor: (-84 - 6) / 2,
    },
    {
      name: `Lowest temperature recorded`,
      air_temperature_sensor: -79,
      ground_temperature_sensor: -21,
    },
    {
      name: `Highest temperature recorded`,
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

  const startDate = new Date(new Date().setDate(new Date().getDate() - 14));
  const endDate = new Date();

  const [range, setRange] = useState({
    from: startDate,
    to: endDate,
  });

  console.log('range: ', range);

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
        </p>
      );
    }
  }

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
        name: `Lowest temperature recorded during sol`,
        air_temperature_sensor: sol.min_temp,
        ground_temperature_sensor: sol.min_gts_temp,
      },
      {
        name: `Highest temperature recorded during sol`,
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
    .filter((sol) => {
      if (
        range === undefined ||
        range.from === undefined ||
        range.to === undefined
      ) {
        return (
          sol.terrestrial_date >=
          format(
            new Date(new Date().setDate(new Date().getDate() - 14)),
            'yyyy-MM-dd'
          )
        );
      } else if (range.from !== undefined && range.to === undefined) {
        return sol.terrestrial_date == format(range.from, 'yyyy-MM-dd');
      } else if (range.from === range.to) {
        return sol.terrestrial_date === format(range.from, 'yyyy-MM-dd');
      } else if (range.from !== range.to) {
        return (
          sol.terrestrial_date >= format(range.from, 'yyyy-MM-dd') &&
          sol.terrestrial_date <= format(range.to, 'yyyy-MM-dd')
        );
      }
    })
    .map((sol) => {
      return (
        <li
          key={sol.id}
          className="hover:outline outline-orange-700 rounded-md p-4 m-2 cursor-pointer bg-slate-900"
          onMouseOver={() => selectSol(sol)}
        >
          <ul className="w-64">
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
            <li>
              Pressure trend: <span>{sol.pressure_string}</span>
            </li>
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
            <span>Id {sol.id}</span>
          </ul>
        </li>
      );
    });

  return (
    <section
      id="graph"
      className="flex p-10 md:p-24 min-h-screen flex-col items-center justify-between"
    >
      <span className="text-5xl font-light text-left w-full mb-12">
        Temperature amplitude
      </span>
      <div className="flex flex-col lg:flex-row w-full pb-8">
        <DayPicker
          id="dateRangePicker"
          mode="range"
          defaultMonth={startDate}
          selected={range}
          disabled={[
            {
              from: new Date(
                new Date().getFullYear(),
                new Date().getMonth(),
                new Date().getDate() + 1
              ),
              to: new Date(3000, 1, 1),
            },
          ]}
          footer={footer}
          onSelect={setRange}
        />
        <TemperatureChart temperatureChartData={temperatureChartData} />
      </div>
      <ul className="flex overflow-x-auto w-full gap-4">
        {soles}
      </ul>
    </section>
  );
};

export default Weather;
