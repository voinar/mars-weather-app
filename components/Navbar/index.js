import Link from 'next/link';

const Navbar = ({ temperatureAsCelsius, setTemperatureAsCelsius }) => (
  <nav className="fixed z-10 flex w-full px-24 pt-10">
    <ul className="flex gap-10 ml-auto font-light">
      <li>
        <Link href="#home" scroll={false}>
          Home
        </Link>
      </li>
      <li>
        <Link href="#latest" scroll={false}>
          Latest
        </Link>
      </li>
      <li>
        <Link href="#gallery" scroll={false}>
          Gallery
        </Link>
      </li>
      <li>
        <button
          onClick={() => setTemperatureAsCelsius((prevState) => !prevState)}
        >
          {temperatureAsCelsius ? 'Celsius' : 'Fahrenheit'}
        </button>
      </li>
      <li>About</li>
    </ul>
  </nav>
);

export default Navbar;
