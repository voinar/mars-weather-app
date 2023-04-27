import TemperatureMeasurement from '@/components/TemperatureMeasurement';
import TemperatureGauge from '@/components/TemperatureGauge';

const SensorTypeHeader = ({ sensorType }) => {
  if (sensorType === 'groundTemperatureSensor') {
    return 'Ground Temperature Sensor';
  } else if (sensorType === 'airTemperatureSensor') {
    return 'Air Temperature Sensor';
  } else {
    return 'n/a';
  }
};

const TemperatureSensor = ({
  weatherDataLatest,
  sensorType,
  temperatureAsCelsius,
  setTemperatureAsCelsius,
  toggleTooltip,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs lg:text-sm">
        <SensorTypeHeader sensorType={sensorType} />
      </span>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <div className="flex">
            <span className="text-5xl lg:text-8xl">
              <TemperatureMeasurement
                weatherDataLatest={weatherDataLatest}
                minMax={'min'}
                sensorType={sensorType}
                temperatureAsCelsius={temperatureAsCelsius}
              />
            </span>
            <TemperatureGauge
              minMax={'min'}
              sensorType={sensorType}
              temperatureAsCelsius={temperatureAsCelsius}
              setTemperatureAsCelsius={setTemperatureAsCelsius}
              toggleTooltip={toggleTooltip}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <span className="text-5xl lg:text-8xl">
              <TemperatureMeasurement
                weatherDataLatest={weatherDataLatest}
                minMax={'max'}
                sensorType={sensorType}
                temperatureAsCelsius={temperatureAsCelsius}
              />
            </span>
            <TemperatureGauge
              minMax={'max'}
              sensorType={sensorType}
              temperatureAsCelsius={temperatureAsCelsius}
              setTemperatureAsCelsius={setTemperatureAsCelsius}
              toggleTooltip={toggleTooltip}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureSensor;
