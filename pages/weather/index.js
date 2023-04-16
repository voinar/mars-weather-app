export const getStaticProps = async () => {
  const url =
    'http://cab.inta-csic.es/rems//wp-content/plugins/marsweather-widget/api.php';

  const response = await fetch(url);
  const data = await response.text();

  return {
    props: { weatherData: data },
  };
};

const Weather = ({ weatherData }) => {
  const weatherDataSoles = JSON.parse(weatherData).soles;
  const soles = weatherDataSoles.map((sol) => {
    return (
      <li key={sol.id} className="border rounded-md p-4 w-80">
        <ul>
          <li>
            Sol: <span>{sol.sol}</span>
          </li>
          <li>
            Sky: <span>{sol.atmo_opacity}</span>
          </li>
          <li>
            UV Index: <span>{sol.local_uv_irradiance_index}</span>
          </li>
          <li>
            Solar longitude: <span>{sol.ls} deg</span>
          </li>
          <li>
            Max ground temperature: <span>{sol.max_gts_temp} 'C</span>
          </li>
          <li>
            Min ground temperature: <span>{sol.min_gts_temp} 'C</span>
          </li>
          <li>
            Max air temperature: <span>{sol.max_temp} 'C</span>
          </li>
          <li>
            Min air temperature: <span>{sol.min_temp} 'C</span>
          </li>
          <li>
            Pressure: <span>{sol.pressure} pa</span>
          </li>
          {/* <li>
            Pressure trend: <span>{sol.pressure_string}</span>
          </li> */}
          <li>
            Season: <span>{sol.season}</span>
          </li>
          <li>
            Sunrise: <span>{sol.sunrise}</span>
          </li>
          <li>
            Sunset: <span>{sol.sunset}</span>
          </li>
          <li>
            Earth date: <span>{sol.terrestrial_date}</span>
          </li>
          {/* <li>
            Wind direction: <span>{sol.wind_direction}</span>
          </li>
          <li>
            Wind speed: <span>{sol.wind_speed}</span>
          </li>
          <li>
            Absolute humidity: <span>{sol.abs_humidity}</span>
          </li> */}
          <span>Id {sol.id}</span>
        </ul>
      </li>
    );
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Curiosity Rover Weather Data</h1>
      <ul className="flex flex-wrap gap-4">{soles}</ul>
    </main>
  );
};

export default Weather;
