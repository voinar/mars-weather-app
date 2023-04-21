import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });
import uvIcon from '../public/img/icons/uv.svg';
import airIcon from '../public/img/icons/air.svg';
import calendarIcon from '../public/img/icons/calendar.svg';
import centigradeIcon from '../public/img/icons/centigrade.svg';
import fahrenheitIcon from '../public/img/icons/fahrenheit.svg';
import groundIcon from '../public/img/icons/ground.svg';
import pressureIcon from '../public/img/icons/pressure.svg';
import sunriseIcon from '../public/img/icons/sunrise.svg';
import sunsetIcon from '../public/img/icons/sunset.svg';
import sunIcon from '../public/img/icons/sun.svg';
import cloudsIcon from '../public/img/icons/clouds.svg';
import overcastIcon from '../public/img/icons/overcast.svg';
import dustIcon from '../public/img/icons/dust.svg';
import lsIcon from '../public/img/icons/ls.svg';
import temperatureIcon from '../public/img/icons/temperature.svg';

import Weather from '../components/Weather';
import { MarsDate } from '/utils/marsdate.js';

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
  const weatherDataLatest = JSON.parse(weatherData).soles[0];
  console.log(new MarsDate(new Date(weatherDataLatest.terrestrial_date)));

  return (
    <>
      <nav className="fixed z-10 flex w-full px-24 pt-10">
        <ul className="flex gap-10 ml-auto font-light">
          <li>
            <Link href="#home" scroll={false}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#latest" scroll={false}>
              Latest
            </Link>
          </li>
          <li>
            <Link href="#gallery" scroll={false}>
              Gallery
            </Link>
          </li>
          <li>
            <button
              onClick={() => setTemperatureAsCelsius((prevState) => !prevState)}
            >
              {temperatureAsCelsius ? 'Celsius' : 'Fahrenheit'}
            </button>
          </li>
          <li>About</li>
        </ul>
      </nav>

      <main
        id="home"
        className="relative h-screen flex-col pt-28 p-10 md:p-24  text-red-50 bg-hero_background_mobile bg-cover md:bg-hero_background md:bg-cover bg-opacity-100 font-thin"
      >
        {/* <div className="absolute bg-hero_background bg-cover flex h-full"> */}
        <div
          className="absolute w-full h-screen top-0 left-0
        bg-gradient-to-t from-orange-900 to-black mix-blend-lighten
        md:bg-gradient-to-r md:from-transparent md:to-orange-900 md:mix-blend-lighten"
        ></div>
        {/* </div> */}
        <header className="flex flex-col w-full md:h-full">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light md:font-thin">
            Mars <br /> Weather <br /> Stream
          </h1>
          <div className="flex mt-20 md:mt-auto">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-10 justify-end">
              <div className="flex-col mt-auto">
                <Link href="#latest" scroll={false}>
                  <div className="flex gap-2">
                    <Image src={calendarIcon} alt="Dates" />
                    <span>Sol: {weatherDataLatest.sol}</span>
                    <span>|</span>
                    <span>{weatherDataLatest.terrestrial_date}</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Autumn</span>
                    <span>|</span>
                    <span>
                      {new MarsDate(
                        new Date(weatherDataLatest.terrestrial_date)
                      ).string.slice(0, -24)}
                    </span>
                  </div>
                </Link>
                <div className="text-7xl font-light md:font-medium mt-6">
                  <div className="flex">
                    <Image
                      src={airIcon}
                      alt="Temperature at 2m above ground"
                      width={40}
                      height={40}
                      className="mr-4"
                    />
                    <span>
                      {temperatureAsCelsius
                        ? (Number(weatherDataLatest.min_temp) +
                            Number(weatherDataLatest.max_temp)) /
                          2
                        : (
                            (((Number(weatherDataLatest.min_temp) +
                              Number(weatherDataLatest.max_temp)) /
                              2) *
                              9) /
                              5 +
                            32
                          ).toFixed()}
                    </span>
                    <Image
                      src={
                        temperatureAsCelsius ? centigradeIcon : fahrenheitIcon
                      }
                      alt="Degrees centigrade"
                      width={30}
                      className="self-start"
                    />
                  </div>
                  <div className="flex">
                    <Image
                      src={groundIcon}
                      alt="Ground temperature"
                      width={40}
                      height={40}
                      className="mr-4"
                    />
                    <span>
                      {temperatureAsCelsius
                        ? (Number(weatherDataLatest.min_gts_temp) +
                            Number(weatherDataLatest.max_gts_temp)) /
                          2
                        : (
                            (((Number(weatherDataLatest.min_gts_temp) +
                              Number(weatherDataLatest.max_gts_temp)) /
                              2) *
                              9) /
                              5 +
                            32
                          ).toFixed()}
                    </span>
                    <Image
                      src={
                        temperatureAsCelsius ? centigradeIcon : fahrenheitIcon
                      }
                      alt="Degrees centigrade"
                      width={30}
                      className="self-start"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <Image
                  src={
                    (weatherDataLatest.atmo_opacity === 'Sunny' && sunIcon) ||
                    (weatherDataLatest.atmo_opacity === 'Cloudy' && cloudsIcon)
                  }
                  alt="Sky"
                  width={140}
                  height={140}
                  className="hidden lg:flex"
                />
                <div className="flex mt-2">
                  <div className="flex w-28 gap-2">
                    <Image
                      src={pressureIcon}
                      alt="Ground pressure"
                      height={28}
                    />
                    <span className="flex items-center">
                      {weatherDataLatest.pressure} Pa
                    </span>
                  </div>
                  <div className="flex w-28 gap-2">
                    <Image
                      src={uvIcon}
                      alt="Ultraviolet radiation"
                      height={28}
                    />
                    <span className="flex items-center">
                      {weatherDataLatest.local_uv_irradiance_index}
                    </span>
                  </div>
                </div>
                <div className="flex mt-2">
                  <div className="flex w-28 gap-2">
                    <Image src={sunriseIcon} alt="Sunrise" height={28} />
                    <span className="flex items-center">
                      {weatherDataLatest.sunrise}
                    </span>
                  </div>
                  <div className="flex w-28 gap-2">
                    <Image src={sunsetIcon} alt="Sunset" height={28} />
                    <span className="flex items-center">
                      {weatherDataLatest.sunset}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </main>
      <section id="latest" className=" pt-28 p-10 md:p-24 text-3xl font-thin">
        <div className="mb-10 flex gap-2">
          <Image
            src={temperatureIcon}
            alt="Degrees centigrade"
            width={40}
            className="self-start"
          />
          <span>Temperatures recorded on Sol {weatherDataLatest.sol}</span>
          <span>|</span>
          <span>{weatherDataLatest.terrestrial_date}</span>
        </div>
        <div className="flex gap-4 justify-around my-24">
          <div className="flex gap-4 flex-col">
            <div className="flex">
              <span className="text-5xl lg:text-8xl">
                {temperatureAsCelsius
                  ? weatherDataLatest.min_gts_temp
                  : ((weatherDataLatest.min_gts_temp * 9) / 5 + 32).toFixed()}
              </span>
              <Image
                src={temperatureAsCelsius ? centigradeIcon : fahrenheitIcon}
                alt="Degrees centigrade"
                width={30}
                className="self-start"
              />
            </div>
            <span className="text-xs">Lowest ground temperature</span>
          </div>
          <div className="flex gap-4 flex-col">
            <div className="flex">
              <span className="text-5xl lg:text-8xl">
                {temperatureAsCelsius
                  ? weatherDataLatest.max_gts_temp
                  : ((weatherDataLatest.max_gts_temp * 9) / 5 + 32).toFixed()}
              </span>
              <Image
                src={temperatureAsCelsius ? centigradeIcon : fahrenheitIcon}
                alt="Degrees centigrade"
                width={30}
                className="self-start"
              />
            </div>
            <span className="text-xs">Highest ground temperature</span>
          </div>
          <div className="flex gap-4 flex-col">
            <div className="flex">
              <span className="text-5xl lg:text-8xl">
                {temperatureAsCelsius
                  ? weatherDataLatest.min_temp
                  : ((weatherDataLatest.min_temp * 9) / 5 + 32).toFixed()}
              </span>
              <Image
                src={temperatureAsCelsius ? centigradeIcon : fahrenheitIcon}
                alt="Degrees centigrade"
                width={30}
                className="self-start"
              />
            </div>
            <span className="text-xs">Lowest air temperature</span>
          </div>
          <div className="flex gap-4 flex-col">
            <div className="flex">
              <span className="text-5xl lg:text-8xl">
                {temperatureAsCelsius
                  ? weatherDataLatest.max_temp
                  : ((weatherDataLatest.max_temp * 9) / 5 + 32).toFixed()}
              </span>
              <Image
                src={temperatureAsCelsius ? centigradeIcon : fahrenheitIcon}
                alt="Degrees centigrade"
                width={30}
                className="self-start"
              />
            </div>
            <span className="text-sm">Highest air temperature</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col justify-around text-3xl">
            <div className="flex gap-4">
              <Image
                src={
                  (weatherDataLatest.atmo_opacity === 'Sunny' && sunIcon) ||
                  (weatherDataLatest.atmo_opacity === 'Cloudy' && cloudsIcon)
                }
                alt="Sky"
                width={40}
              />
              <span>{weatherDataLatest.atmo_opacity}</span>
            </div>
            <div className="flex gap-4">
              <Image src={pressureIcon} alt="Sky" width={40} />
              <span>{weatherDataLatest.pressure} Pa</span>
            </div>
            <div className="text-3xl flex gap-4">
              <Image src={uvIcon} alt="Sky" width={40} />
              <span>{weatherDataLatest.local_uv_irradiance_index}</span>
            </div>
            <div className="text-3xl flex gap-4">
              <Image src={sunriseIcon} alt="Sky" width={40} />
              <span>Sunrise at:</span>{' '}
              <span className="text-4xl">{weatherDataLatest.sunrise}</span>
            </div>
            <div className="text-3xl flex gap-4">
              <Image src={sunsetIcon} alt="Sky" width={40} />
              <span>Sunset at:</span>{' '}
              <span className="text-4xl">{weatherDataLatest.sunset}</span>
            </div>
            <div className="text-3xl flex gap-4">
              <Image src={lsIcon} alt="Sky" width={40} />
              <span>Solar longitude:</span>
              <span className="text-4xl">{weatherDataLatest.ls}</span>
            </div>
          </div>
          <Image
            src={
              (weatherDataLatest.atmo_opacity === 'Sunny' && sunIcon) ||
              (weatherDataLatest.atmo_opacity === 'Cloudy' && cloudsIcon)
            }
            alt="Sky"
            width={300}
          />
        </div>
      </section>
      <section>
        <Weather weatherData={weatherData} />
      </section>
    </>
  );
};

export default Home;
