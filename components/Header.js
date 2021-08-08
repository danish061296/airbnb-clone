import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4 md:px-10 ">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Search Section */}
      <div className="flex items-center md:border-2 rounded-full py-2 ml-3 shadow-md md:shadow-sm md:hover:shadow-md cursor-pointer text-sm ">
        <input
          type="text"
          placeholder="Start your search"
          className="placeholder-black flex-grow pl-4 md:pl-5 bg-transparent outline-none "
        />
        <SearchIcon className="hidden h-8 text-red-500 md:inline-flex md:bg-red-500 md:text-white md:rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-4 sm:h-6" />
          <UserCircleIcon className="h-4 sm:h-8" />
        </div>
      </div>
    </header>
  );
};

export default Header;
