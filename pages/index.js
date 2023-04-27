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

  // const Tooltip = ({ showTooltip }) => {
  //   const useMousePosition = () => {
  //     const [mousePosition, setMousePosition] = useState({
  //       x: -10000,
  //       y: -10000,
  //     });

  //     useEffect(() => {
  //       const updateMousePosition = (ev) => {
  //         setMousePosition({ x: ev.clientX, y: ev.clientY });
  //       };

  //       window.addEventListener('mousemove', updateMousePosition);

  //       return () => {
  //         window.removeEventListener('mousemove', updateMousePosition);
  //       };
  //     }, []);

  //     return mousePosition;
  //   };

  //   const mousePosition = useMousePosition();

  //   return (
  //     <div
  //       className="absolute z-10 border border-dotted border-orange-700 px-4 py-2 ml-4 mt-4
  //       min-h-fit
  //       w-96 min-w-[calc(10%+2rem)]
  //       rounded-xl backdrop-blur-lg shadow-xl text-sm"
  //       style={
  //         showTooltip.tooltipVisibility
  //           ? {
  //               display: 'visible',
  //               top: mousePosition.y,
  //               left: mousePosition.x,
  //             }
  //           : { display: 'none' }
  //       }
  //     >
  //       {showTooltip.tooltipText}
  //     </div>
  //   );
  // };

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
