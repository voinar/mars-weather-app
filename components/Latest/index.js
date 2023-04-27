import TemperatureSensor from '../TemperatureSensor';
import Image from 'next/image';
import calendarIcon from '../../public/img/icons/calendar.svg';
import uvIcon from '../../public/img/icons/uv.svg';
import pressureIcon from '../../public/img/icons/pressure.svg';
import sunriseIcon from '../../public/img/icons/sunrise.svg';
import sunsetIcon from '../../public/img/icons/sunset.svg';
import sunIcon from '../../public/img/icons/sun.svg';
import cloudsIcon from '../../public/img/icons/clouds.svg';
import dustIcon from '../../public/img/icons/dust.svg';
import lsIcon from '../../public/img/icons/ls.svg';

const Latest = ({
  weatherDataLatest,
  temperatureAsCelsius,
  setTemperatureAsCelsius,
  toggleTooltip,
}) => {
  return (
    <section id="latest" className="pt-28 p-10 md:p-24 text-3xl font-thin cursor-default">
      <div
        class="relative max-w-fit group"
        onMouseEnter={() => toggleTooltip('latestUpdateDate')}
        onMouseLeave={() => toggleTooltip('default')}
      >
        <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-900 to-pink-900 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div class="relative flex mb-10 gap-2 px-7 py-4 bg-stone-950 rounded-lg">
          <Image
            src={calendarIcon}
            alt="Temperatures"
            width={40}
            height={40}
            className="self-start"
          />
          <span>Temperatures recorded on Sol {weatherDataLatest.sol}</span>
          <span>|</span>
          <span>{weatherDataLatest.terrestrial_date}</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-around my-24">
        <TemperatureSensor
          sensorType={'groundTemperatureSensor'}
          temperatureAsCelsius={temperatureAsCelsius}
          setTemperatureAsCelsius={setTemperatureAsCelsius}
          weatherDataLatest={weatherDataLatest}
          toggleTooltip={toggleTooltip}
        />
        <TemperatureSensor
          sensorType={'airTemperatureSensor'}
          temperatureAsCelsius={temperatureAsCelsius}
          setTemperatureAsCelsius={setTemperatureAsCelsius}
          weatherDataLatest={weatherDataLatest}
          toggleTooltip={toggleTooltip}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col justify-around text-3xl gap-4">
          <div
            className="flex gap-4"
            onMouseEnter={() => toggleTooltip('atmoOpacity')}
            onMouseLeave={() => toggleTooltip('default')}
          >
            <Image
              src={
                (weatherDataLatest.atmo_opacity === 'Sunny' && sunIcon) ||
                (weatherDataLatest.atmo_opacity === 'Cloudy' && cloudsIcon) ||
                (weatherDataLatest.atmo_opacity === 'Dusty' && dustIcon)
              }
              alt="Sky"
              width={40}
            />
            <span>{weatherDataLatest.atmo_opacity}</span>
          </div>
          <div
            className="flex gap-4"
            onMouseEnter={() => toggleTooltip('pressure')}
            onMouseLeave={() => toggleTooltip('default')}
          >
            <Image src={pressureIcon} alt="Pressure" width={40} />
            <span>{weatherDataLatest.pressure} Pa</span>
          </div>
          <div
            className="text-3xl flex gap-4"
            onMouseEnter={() => toggleTooltip('localUvIndex')}
            onMouseLeave={() => toggleTooltip('default')}
          >
            <Image src={uvIcon} alt="Local UV index" width={40} />
            <span>{weatherDataLatest.local_uv_irradiance_index}</span>
          </div>
          <div
            className="text-3xl flex gap-4"
            onMouseEnter={() => toggleTooltip('sunrise')}
            onMouseLeave={() => toggleTooltip('default')}
          >
            <Image src={sunriseIcon} alt="Sunrise Time" width={40} />
            <span>Sunrise at:</span>{' '}
            <span className="text-4xl">{weatherDataLatest.sunrise}</span>
          </div>
          <div
            className="text-3xl flex gap-4"
            onMouseEnter={() => toggleTooltip('sunset')}
            onMouseLeave={() => toggleTooltip('default')}
          >
            <Image src={sunsetIcon} alt="Sunset Time" width={40} />
            <span>Sunset at:</span>{' '}
            <span className="text-4xl">{weatherDataLatest.sunset}</span>
          </div>
          <div
            className="text-3xl flex gap-4"
            onMouseEnter={() => toggleTooltip('solarLongitude')}
            onMouseLeave={() => toggleTooltip('default')}
          >
            <Image src={lsIcon} alt="Solar Longitude" width={40} />
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
          height={300}
          className="hidden lg:flex"
          onMouseEnter={() => toggleTooltip('atmoOpacity')}
          onMouseLeave={() => toggleTooltip('default')}
        />
      </div>
    </section>
  );
};

export default Latest;
