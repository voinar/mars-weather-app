import { useState } from 'react';
// import Image from 'next/image';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import WeatherAnalytics from '../components/WeatherAnalytics';
import Latest from '../components/Latest';

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

  return (
    <>
      <Navbar
        temperatureAsCelsius={temperatureAsCelsius}
        setTemperatureAsCelsius={setTemperatureAsCelsius}
      />
      <Main
        weatherData={weatherData}
        temperatureAsCelsius={temperatureAsCelsius}
        setTemperatureAsCelsius={setTemperatureAsCelsius}
      />
      <Latest
        weatherData={weatherData}
        temperatureAsCelsius={temperatureAsCelsius}
        setTemperatureAsCelsius={setTemperatureAsCelsius}
      />
      <WeatherAnalytics
        weatherData={weatherData}
        temperatureAsCelsius={temperatureAsCelsius}
        setTemperatureAsCelsius={setTemperatureAsCelsius}
      />
    </>
  );
};

export default Home;
