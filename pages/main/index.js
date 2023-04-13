export const getStaticProps = async () => {
  const url =
    'http://cab.inta-csic.es/rems//wp-content/plugins/marsweather-widget/api.php';

  const axiosConfig = {
    responseType: 'json',
  };

  const response = await axios.get(url, axiosConfig);
  const data = await response.text();
  console.log('data', data);

  return {
    props: { googleData: data },
  };
};

const Main = ({ googleData }) => {
  console.log('googleData', googleData);

  return (
    <div>
      start//
      {typeof googleData}
      //end
      {/* {weatherData} */}
    </div>
  );
};

export default Main;
