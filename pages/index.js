import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import WeatherAnalytics from '../components/WeatherAnalytics';
import Latest from '../components/Latest';
import tooltipContent from '../data/tooltipContent.json';
// import { Tooltip, toggleTooltip } from '../../components/Tooltip';

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

  const [showTooltip, setShowTooltip] = useState({
    tooltipVisibility: false,
    tooltipText: 'tooltip content',
  });

  const toggleTooltip = (hoverArea) => {
    switch (hoverArea) {
      case 'heroHeader':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.heroHeader.en,
        });
        break;
      case 'solNumber':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.solNumber.en,
        });
        break;
      case 'latestUpdateDate':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.latestUpdateDate.en,
        });
        break;
      case 'season':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.season.en,
        });
        break;
      case 'marsDate':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.marsDate.en,
        });
        break;
      case 'airAverageTemperature':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.airAverageTemperature.en,
        });
        break;
      case 'groundAverageTemperature':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.groundAverageTemperature.en,
        });
        break;
      case 'atmoOpacity':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.atmoOpacity.en,
        });
        break;
        case 'pressure':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.pressure.en,
        });
        break;
        case 'localUvIndex':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.localUvIndex.en,
        });
        break;
        case 'sunrise':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.sunrise.en,
        });
        break;
        case 'sunset':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.sunset.en,
        });
        break;
      case 'default':
        setShowTooltip({
          tooltipVisibility: false,
          tooltipText: '',
        });
        break;
      default:
        setShowTooltip({
          tooltipVisibility: false,
          tooltipText: '',
        });
    }
  };

  const Tooltip = ({ showTooltip }) => {
    const useMousePosition = () => {
      const [mousePosition, setMousePosition] = useState({
        x: -10000,
        y: -10000,
      });

      useEffect(() => {
        const updateMousePosition = (ev) => {
          setMousePosition({ x: ev.clientX, y: ev.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
          window.removeEventListener('mousemove', updateMousePosition);
        };
      }, []);

      return mousePosition;
    };

    const mousePosition = useMousePosition();

    return (
      <div
        className="absolute z-10 border border-dotted border-orange-700 px-4 py-2 ml-4 mt-4
        min-h-fit
        w-96 min-w-[calc(10%+2rem)]
        rounded-xl backdrop-blur-lg shadow-xl text-sm"
        style={
          showTooltip.tooltipVisibility
            ? {
                display: 'visible',
                top: mousePosition.y,
                left: mousePosition.x,
              }
            : { display: 'none' }
        }
      >
        {showTooltip.tooltipText}
      </div>
    );
  };

  return (
    <>
      <Tooltip showTooltip={showTooltip} toggleTooltip={toggleTooltip} />

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
