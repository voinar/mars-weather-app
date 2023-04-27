import Image from 'next/image';
import { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import TemperatureChart from '../TemperatureChart';
import Soles from '../Soles';
import defaultTemperatureChartData from './defaultTemperatureChartData';
import temperatureIcon from '../../public/img/icons/temperature.svg';

const WeatherAnalytics = ({ weatherData, toggleTooltip }) => {
  const [temperatureChartData, setTemperatureChartData] = useState(
    defaultTemperatureChartData
  );

  const startDate = new Date(new Date().setDate(new Date().getDate() - 14));
  const endDate = new Date();

  const [range, setRange] = useState({
    from: startDate,
    to: endDate,
  });

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

  const selectSol = (sol) => {
    setTemperatureChartData([
      {
        name: 'Daily Avg',
        air_temperature_sensor: (sol.min_temp - sol.max_temp) / 2,
        ground_temperature_sensor: (sol.min_gts_temp - sol.max_gts_temp) / 2,
      },
      {
        name: `Lowest temperature recorded`,
        air_temperature_sensor: sol.min_temp,
        ground_temperature_sensor: sol.min_gts_temp,
      },
      {
        name: `Highest temperature recorded`,
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

  const weatherDataSoles = JSON.parse(weatherData).soles;

  return (
    <section
      id="analytics"
      className="flex flex-col  p-10 md:p-24 min-h-screen items-center justify-between cursor-default"
    >
      <div
        class="relative mr-auto mb-10"
        onMouseEnter={() => toggleTooltip('tempAmplitude')}
        onMouseLeave={() => toggleTooltip('default')}
      >
        <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-900 to-pink-900 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div class="relative flex gap-2 text-3xl font-thin px-7 py-4 bg-stone-950 rounded-lg">
          <Image
            src={temperatureIcon}
            alt="Temperatures"
            width={40}
            height={40}
            className="self-start"
          />
          <span>Temperature amplitude</span>
        </div>
      </div>

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
        <Soles
          weatherDataSoles={weatherDataSoles}
          range={range}
          selectSol={selectSol}
        />
      </ul>
    </section>
  );
};

export default WeatherAnalytics;
