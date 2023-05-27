import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.svg';

const Navbar = ({ temperatureAsCelsius, setTemperatureAsCelsius }) => (
  <nav className="fixed z-10 px-20 w-full">
    <div className="flex flex-wrap  items-center justify-between mx-auto p-4 ">
      <Link href="#home" scroll={false} className="flex items-center">
        <Image src={logo} width={50} height={50} className="mr-2" />
        <span className="self-center text-2xl font-light">
          Mars Weather Stream
        </span>
      </Link>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="flex justify-around w-full gap-10 font-light">
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
          <li className="text-slate-500">
            <Link href="#" scroll={false}>
              News
            </Link>
          </li>
          <li className="text-slate-500">
            <Link href="#" scroll={false}>
              Gallery
            </Link>
          </li>
          <li className="text-slate-500">
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
      </div>
    </div>
  </nav>
  // <nav className="fixed z-10 right-0 pt-8 pr-24 border">
  //   <button>x</button>
  //   <ul className="flex flex-col gap-10 font-light">
  //     <li>
  //       <Link href="#home" scroll={false}>
  //         Home
  //       </Link>
  //     </li>
  //     <li>
  //       <Link href="#latest" scroll={false}>
  //         Latest
  //       </Link>
  //     </li>
  //     <li>
  //       <Link href="#analytics" scroll={false}>
  //         Analytics
  //       </Link>
  //     </li>
  //     <li>
  //       <Link href="#" scroll={false}>
  //         News
  //       </Link>
  //     </li>
  //     <li>
  //       <Link href="#" scroll={false}>
  //         Gallery
  //       </Link>
  //     </li>
  //     <li>
  //       <Link href="#" scroll={false}>
  //         About
  //       </Link>
  //     </li>
  //     <li className="border"></li>
  //     <li>
  //       <button
  //         onClick={() => setTemperatureAsCelsius((prevState) => !prevState)}
  //       >
  //         {temperatureAsCelsius ? "'C" : "'F"}
  //       </button>
  //     </li>
  //   </ul>
  // </nav>
);

export default Navbar;
