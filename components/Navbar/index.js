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
        <Link href="#analytics" scroll={false}>
          Analytics
        </Link>
      </li>
      <li>
        <Link href="#" scroll={false}>
          News
        </Link>
      </li>
      <li>
        <Link href="#" scroll={false}>
          Gallery
        </Link>
      </li>
      <li>
        <Link href="#" scroll={false}>
          About
        </Link>
      </li>
      <li className="border"></li>
      <li>
        <button
          onClick={() => setTemperatureAsCelsius((prevState) => !prevState)}
        >
          {temperatureAsCelsius ? "'C" : "'F"}
        </button>
      </li>
    </ul>
  </nav>
);

export default Navbar;
