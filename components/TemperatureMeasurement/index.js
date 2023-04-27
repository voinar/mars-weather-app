const TemperatureMeasurement = ({
  weatherDataLatest,
  minMax,
  sensorType,
  temperatureAsCelsius,
}) => {
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

export default TemperatureMeasurement;
