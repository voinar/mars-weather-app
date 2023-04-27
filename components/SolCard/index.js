import { MarsDate } from '/utils/marsdate.js';

const SolCard = ({ sol }) => (
  <>
    <div class="relative group">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-900 to-pink-900 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div class="relative px-7 py-4 bg-black rounded-lg">
        <ul className="w-64 min-h-[420px]">
          <li>
            Sol: <span>{sol.sol}</span>
          </li>
          <li>
            Sky: <span>{sol.atmo_opacity}</span>
          </li>
          <li>
            Radiation: <span>{sol.local_uv_irradiance_index}</span>
          </li>
          <li>
            Solar longitude: <span>{sol.ls} deg</span>
          </li>
          <li>
            Highest ground temperature: <span>{sol.max_gts_temp} 'C</span>
          </li>
          <li>
            Lowest ground temperature: <span>{sol.min_gts_temp} 'C</span>
          </li>
          <li>
            Highest air temperature: <span>{sol.max_temp} 'C</span>
          </li>
          <li>
            Lowest air temperature: <span>{sol.min_temp} 'C</span>
          </li>
          <li>
            Pressure: <span>{sol.pressure} pa</span>
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
            Mars date:
            <span>
              {' '}
              {new MarsDate(new Date(sol.terrestrial_date)).string.slice(
                0,
                -24
              )}
            </span>
          </li>
          <span>Id {sol.id}</span>
        </ul>
      </div>
    </div>
  </>
);

export default SolCard;
