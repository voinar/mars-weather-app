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
  const weatherDataSoles = JSON.parse(weatherData).soles;
  const soles = weatherDataSoles.map((sol) => {
    return (
      <>
        <h2>Sol data:</h2>
        <li>
          Sol: <span>{sol.sol}</span>
        </li>
        <li>
          Radiation: <span>{sol.local_uv_irradiance_index}</span>
        </li>
        <li>
          Solar longitude: <span>{sol.ls} deg</span>
        </li>
        <li>
          Max ground temperature: <span>{sol.max_gts_temp}</span>
        </li>
        <li>
          Max air temperature: <span>{sol.max_temp}</span>
        </li>
        <li>
          Min ground temperature: <span>{sol.min_gts_temp}</span>
        </li>
        <li>
          Min air temperature: <span>{sol.min_temp}</span>
        </li>
        <li>
          Pressure: <span>{sol.pressure}</span>
        </li>
        <li>
          Pressure trend: <span>{sol.pressure_string}</span>
        </li>
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
          Terrestrial date: <span>{sol.terrestrial_date}</span>
        </li>
        <li>
          Wind direction: <span>{sol.wind_direction}</span>
        </li>
        <li>
          Wind speed: <span>{sol.wind_speed}</span>
        </li>
        <li>
          Absolute humidity: <span>{sol.abs_humidity}</span>
        </li>
        <ul>Id {sol.id}</ul>
      </>
    );
  });

  return <>{soles}</>;
};

export default Home;
