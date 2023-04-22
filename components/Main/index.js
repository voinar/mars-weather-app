import Link from 'next/link';
import Image from 'next/image';
import { MarsDate } from '/utils/marsdate.js';
import calendarIcon from '../../public/img/icons/calendar.svg';
import airIcon from '../../public/img/icons/air.svg';
import centigradeIcon from '../../public/img/icons/centigrade.svg';
import fahrenheitIcon from '../../public/img/icons/fahrenheit.svg';
import groundIcon from '../../public/img/icons/ground.svg';
import sunIcon from '../../public/img/icons/sun.svg';
import pressureIcon from '../../public/img/icons/pressure.svg';
import uvIcon from '../../public/img/icons/uv.svg';
import sunriseIcon from '../../public/img/icons/sunrise.svg';
import sunsetIcon from '../../public/img/icons/sunset.svg';

const Main = ({ weatherData, temperatureAsCelsius }) => {
  const weatherDataLatest = JSON.parse(weatherData).soles[0];
  console.log(new MarsDate(new Date(weatherDataLatest.terrestrial_date)));

  return (
    <main
      id="home"
      className="relative h-screen flex-col pt-28 p-10 md:p-24  text-red-50 bg-hero_background_mobile bg-cover md:bg-hero_background md:bg-cover bg-opacity-100 font-thin"
    >
      <div className="absolute w-full h-screen top-0 left-0 bg-gradient-to-t from-orange-900 to-black mix-blend-lighten md:bg-gradient-to-r md:from-transparent md:to-orange-900 md:mix-blend-lighten"></div>
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
                    src={temperatureAsCelsius ? centigradeIcon : fahrenheitIcon}
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
                    src={temperatureAsCelsius ? centigradeIcon : fahrenheitIcon}
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
                  <Image src={pressureIcon} alt="Ground pressure" height={28} />
                  <span className="flex items-center">
                    {weatherDataLatest.pressure} Pa
                  </span>
                </div>
                <div className="flex w-28 gap-2">
                  <Image src={uvIcon} alt="Ultraviolet radiation" height={28} />
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
  );
};

export default Main;
