import HeroWeatherData from '../HeroWeatherData';

const Main = ({
  weatherData,
  temperatureAsCelsius,
  setTemperatureAsCelsius,
  toggleTooltip,
}) => {
  const weatherDataLatest = JSON.parse(weatherData).soles[0];
  // console.log(new MarsDate(new Date(weatherDataLatest.terrestrial_date)));

  return (
    <>
      <main
        id="home"
        className="relative h-screen flex-col pt-28 p-10 md:p-24 text-red-50 bg-hero_background_mobile bg-cover md:bg-hero_background md:bg-cover bg-opacity-100 font-thin cursor-default"
      >
        <header className="flex flex-col absolute w-full md:h-full top-0 left-0 h-screen pt-28 p-10 md:p-24 bg-gradient-to-t from-orange-900 to-black md:bg-gradient-to-r md:from-transparent md:to-orange-900">
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-light md:font-thin w-64 h-64"
            onMouseEnter={() => toggleTooltip('heroHeader')}
            onMouseLeave={() => toggleTooltip('default')}
          >
            <span>Mars</span> <br /> Weather <br /> Stream
          </h1>
          <HeroWeatherData
            weatherDataLatest={weatherDataLatest}
            temperatureAsCelsius={temperatureAsCelsius}
            setTemperatureAsCelsius={setTemperatureAsCelsius}
            toggleTooltip={toggleTooltip}
          />
        </header>
      </main>
    </>
  );
};

export default Main;
