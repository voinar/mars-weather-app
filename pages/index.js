import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import WeatherAnalytics from '@/components/WeatherAnalytics';
import Latest from '@/components/Latest';
import Tooltip from '@/components/Tooltip';
import useTooltip from '@/hooks/useTooltip';

export const getStaticProps = async () => {
  const url =
    'http://cab.inta-csic.es/rems//wp-content/plugins/marsweather-widget/api.php';

  const response = await fetch(url);
  const data = await response.text();

  return {
    props: { weatherData: data },
  };
};

const Home = ({ weatherData }) => {
  const [temperatureAsCelsius, setTemperatureAsCelsius] = useState(true);
  const { showTooltip, setShowTooltip, toggleTooltip } = useTooltip();
  const weatherDataLatest = JSON.parse(weatherData).soles[0];

  return (
    <>
      <Tooltip showTooltip={showTooltip} />
      <Navbar
        temperatureAsCelsius={temperatureAsCelsius}
        setTemperatureAsCelsius={setTemperatureAsCelsius}
      />
      <Main
        weatherData={weatherData}
        temperatureAsCelsius={temperatureAsCelsius}
        setTemperatureAsCelsius={setTemperatureAsCelsius}
        toggleTooltip={toggleTooltip}
      />
      <Latest
        weatherDataLatest={weatherDataLatest}
        temperatureAsCelsius={temperatureAsCelsius}
        setTemperatureAsCelsius={setTemperatureAsCelsius}
        toggleTooltip={toggleTooltip}
      />
      <WeatherAnalytics
        weatherData={weatherData}
        temperatureAsCelsius={temperatureAsCelsius}
        toggleTooltip={toggleTooltip}
      />
    </>
  );
};

export default Home;
