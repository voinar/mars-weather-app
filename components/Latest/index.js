import Image from 'next/image';

import temperatureIcon from '../../public/img/icons/temperature.svg';
import uvIcon from '../../public/img/icons/uv.svg';
import centigradeIcon from '../../public/img/icons/centigrade.svg';
import fahrenheitIcon from '../../public/img/icons/fahrenheit.svg';
import pressureIcon from '../../public/img/icons/pressure.svg';
import sunriseIcon from '../../public/img/icons/sunrise.svg';
import sunsetIcon from '../../public/img/icons/sunset.svg';
import sunIcon from '../../public/img/icons/sun.svg';
import cloudsIcon from '../../public/img/icons/clouds.svg';
import lsIcon from '../../public/img/icons/ls.svg';
import tempRecordIcon from '../../public/img/icons/tempRecord.svg';

const Latest = ({
  weatherData,
  temperatureAsCelsius,
  setTemperatureAsCelsius,
}) => {
  const weatherDataLatest = JSON.parse(weatherData).soles[0];

  const TemperaturesRecorded = ({ sensorType }) => {
    const sensorTypeHeader = () => {
      if (sensorType === 'groundTemperatureSensor') {
        return 'Ground Temperature Sensor';
      } else if (sensorType === 'airTemperatureSensor') {
        return 'Air Temperature Sensor';
      } else {
        return 'n/a';
      }
    };

    const displayMinTemperature = () => {
      if (sensorType === 'groundTemperatureSensor') {
        return temperatureAsCelsius
          ? weatherDataLatest.min_gts_temp
          : ((weatherDataLatest.min_gts_temp * 9) / 5 + 32).toFixed();
      } else if (sensorType === 'airTemperatureSensor') {
        return temperatureAsCelsius
          ? weatherDataLatest.min_temp
          : ((weatherDataLatest.min_temp * 9) / 5 + 32).toFixed();
      } else {
        return 'n/a';
      }
    };

    const displayMaxTemperature = () => {
      if (sensorType === 'groundTemperatureSensor') {
        return temperatureAsCelsius
          ? weatherDataLatest.max_gts_temp
          : ((weatherDataLatest.max_gts_temp * 9) / 5 + 32).toFixed();
      } else if (sensorType === 'airTemperatureSensor') {
        return temperatureAsCelsius
          ? weatherDataLatest.max_temp
          : ((weatherDataLatest.max_temp * 9) / 5 + 32).toFixed();
      } else {
        return 'n/a';
      }
    };

    const temperatureGauge = (minMax) => {
      if (temperatureAsCelsius) {
        return (
          <div className="flex flex-col gap-1 md:gap-2">
            <div className={minMax === 'min' ? 'rotate-180' : ''}>
              <Image
                src={tempRecordIcon}
                alt="Highest recorded temperature"
                width={20}
                height={20}
                className="mb-0 px-1 md:px-1 w-5 lg:w-8"
              />
            </div>
            <Image
              src={centigradeIcon}
              alt="Degrees centigrade"
              width={30}
              height={30}
              className="self-start w-5 lg:w-8"
            />
          </div>
        );
      } else {
        return (
          <div className="flex flex-col">
            <Image
              src={tempRecordIcon}
              alt="Highest recorded temperature"
              width={20}
              height={20}
              className="w-[30px] mb-2 px-2"
            />
            <Image
              src={fahrenheitIcon}
              alt="Degrees fahrenheit"
              width={30}
              height={30}
              className="self-start w-6 lg:w-8"
            />
          </div>
        );
      }
    };

    return (
      <div className="flex flex-col gap-2">
        <span className="text-xs lg:text-sm">{sensorTypeHeader()}</span>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <div className="flex">
              <span className="text-5xl lg:text-8xl">
                {displayMinTemperature()}
              </span>
              {temperatureGauge('min')}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <span className="text-5xl lg:text-8xl">
                {displayMaxTemperature()}
              </span>
              {temperatureGauge('max')}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="latest" className=" pt-28 p-10 md:p-24 text-3xl font-thin">
      <div className="flex mb-10 gap-2">
        <Image
          src={temperatureIcon}
          alt="Degrees centigrade"
          width={40}
          height={40}
          className="self-start"
        />
        <span>Temperatures recorded on Sol {weatherDataLatest.sol}</span>
        <span>|</span>
        <span>{weatherDataLatest.terrestrial_date}</span>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-around my-24">
        <TemperaturesRecorded sensorType={'groundTemperatureSensor'} />
        <TemperaturesRecorded sensorType={'airTemperatureSensor'} />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col justify-around text-3xl gap-4">
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
          height={300}
          className="hidden md:visible"
        />
      </div>
    </section>
  );
};

export default Latest;
