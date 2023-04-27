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

const HeroWeatherData = ({
  weatherDataLatest,
  temperatureAsCelsius,
  setTemperatureAsCelsius,
  toggleTooltip,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 md:gap-10 mt-20 md:mt-auto cursor-default">
      <div className="flex-col mt-auto">
        <Link href="#latest" scroll={false} className="cursor-pointer">
          <div className="flex gap-2">
            <Image src={calendarIcon} alt="Dates" />
            <span
              onMouseEnter={() => toggleTooltip('solNumber')}
              onMouseLeave={() => toggleTooltip('default')}
            >
              Sol: {weatherDataLatest.sol}
            </span>
            <span>|</span>
            <span
              onMouseEnter={() => toggleTooltip('latestUpdateDate')}
              onMouseLeave={() => toggleTooltip('default')}
            >
              {weatherDataLatest.terrestrial_date}
            </span>
          </div>
          <div className="flex gap-2">
            <span
              onMouseEnter={() => toggleTooltip('season')}
              onMouseLeave={() => toggleTooltip('default')}
            >
              Autumn
            </span>
            <span>|</span>
            <span
              onMouseEnter={() => toggleTooltip('marsDate')}
              onMouseLeave={() => toggleTooltip('default')}
            >
              {new MarsDate(
                new Date(weatherDataLatest.terrestrial_date)
              ).string.slice(0, -24)}
            </span>
          </div>
        </Link>
        <div className="text-7xl font-light md:font-medium mt-6">
          <div
            className="flex"
            onMouseEnter={() => toggleTooltip('airAverageTemperature')}
            onMouseLeave={() => toggleTooltip('default')}
          >
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
              height={30}
              className="self-start cursor-pointer"
              onClick={() => setTemperatureAsCelsius((prevState) => !prevState)}
            />
          </div>
          <div
            className="flex"
            onMouseEnter={() => toggleTooltip('groundAverageTemperature')}
            onMouseLeave={() => toggleTooltip('default')}
          >
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
              height={30}
              className="self-start cursor-pointer"
              onClick={() => setTemperatureAsCelsius((prevState) => !prevState)}
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
          onMouseEnter={() => toggleTooltip('atmoOpacity')}
          onMouseLeave={() => toggleTooltip('default')}
        />
        <div className="flex mt-2">
          <div
            className="flex w-28 gap-2"
            onMouseEnter={() => toggleTooltip('pressure')}
            onMouseLeave={() => toggleTooltip('default')}
          >
            <Image src={pressureIcon} alt="Ground pressure" height={28} />
            <span className="flex items-center">
              {weatherDataLatest.pressure} Pa
            </span>
          </div>
          <div
            className="flex w-28 gap-2"
            onMouseEnter={() => toggleTooltip('localUvIndex')}
            onMouseLeave={() => toggleTooltip('default')}
          >
            <Image src={uvIcon} alt="Ultraviolet radiation" height={28} />
            <span className="flex items-center">
              {weatherDataLatest.local_uv_irradiance_index}
            </span>
          </div>
        </div>
        <div className="flex mt-2">
          <div
            className="flex w-28 gap-2"
            onMouseEnter={() => toggleTooltip('sunrise')}
            onMouseLeave={() => toggleTooltip('default')}
          >
            <Image src={sunriseIcon} alt="Sunrise" height={28} />
            <span className="flex items-center">
              {weatherDataLatest.sunrise}
            </span>
          </div>
          <div
            className="flex w-28 gap-2"
            onMouseEnter={() => toggleTooltip('sunset')}
            onMouseLeave={() => toggleTooltip('default')}
          >
            <Image src={sunsetIcon} alt="Sunset" height={28} />
            <span className="flex items-center">
              {weatherDataLatest.sunset}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWeatherData;
