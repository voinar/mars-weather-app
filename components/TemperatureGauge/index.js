import Image from 'next/image';
import centigradeIcon from '@/public/img/icons/centigrade.svg';
import fahrenheitIcon from '@/public/img/icons/fahrenheit.svg';
import tempRecordIcon from '@/public/img/icons/tempRecord.svg';

const TemperatureGauge = ({
  minMax,
  temperatureAsCelsius,
  setTemperatureAsCelsius,
  toggleTooltip,
}) => {
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

export default TemperatureGauge;
