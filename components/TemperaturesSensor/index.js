import Image from 'next/image';
import centigradeIcon from '../../public/img/icons/centigrade.svg';
import fahrenheitIcon from '../../public/img/icons/fahrenheit.svg';
import tempRecordIcon from '../../public/img/icons/tempRecord.svg';

const TemperaturesSensor = ({
  weatherDataLatest,
  sensorType,
  temperatureAsCelsius,
  setTemperatureAsCelsius,
  toggleTooltip,
}) => {
  const sensorTypeHeader = () => {
    if (sensorType === 'groundTemperatureSensor') {
      return 'Ground Temperature Sensor';
    } else if (sensorType === 'airTemperatureSensor') {
      return 'Air Temperature Sensor';
    } else {
      return 'n/a';
    }
  };

  const displayTemperature = (minMax) => {
    if (minMax === 'min') {
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
    } else if (sensorType === 'groundTemperatureSensor') {
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
    return (
      <div
        className="flex flex-col gap-1 md:gap-2"
        onMouseEnter={() =>
          toggleTooltip(
            minMax === 'min' ? 'lowestTempRecorded' : 'highestTempRecorded'
          )
        }
        onMouseLeave={() => toggleTooltip('default')}
      >
        <div className={minMax === 'min' ? 'rotate-180' : ''}>
          <Image
            src={tempRecordIcon}
            alt="Highest recorded temperature"
            width={20}
            height={20}
            className="mb-0 px-1 md:px-1 w-5 lg:w-8"
          />
        </div>
        {temperatureAsCelsius ? (
          <Image
            src={centigradeIcon}
            alt="Degrees centigrade"
            width={30}
            height={30}
            className="self-start w-5 lg:w-8 cursor-pointer"
            onClick={() => setTemperatureAsCelsius((prevState) => !prevState)}
          />
        ) : (
          <Image
            src={fahrenheitIcon}
            alt="Degrees fahrenheit"
            width={30}
            height={30}
            className="self-start w-5 lg:w-8 cursor-pointer"
            onClick={() => setTemperatureAsCelsius((prevState) => !prevState)}
          />
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs lg:text-sm">{sensorTypeHeader()}</span>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <div className="flex">
            <span className="text-5xl lg:text-8xl">
              {displayTemperature('min')}
            </span>
            {temperatureGauge('min')}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <span className="text-5xl lg:text-8xl">
              {displayTemperature('max')}
            </span>
            {temperatureGauge('max')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperaturesSensor;
