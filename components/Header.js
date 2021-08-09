import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState('');
  const [scrollDown, setScrollDown] = React.useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const selectDates = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const searchPlaces = () => {
    router.push({
      pathname: './search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  const resetInput = () => {
    setSearchInput('');
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setScrollDown(true);
    } else {
      setScrollDown(false);
    }
  };

  if (process.browser) {
    window.addEventListener('scroll', changeNavbarColor);
  }

  useEffect(() => {
    changeNavbarColor();
  }, []);

  return (
    <header
      className={
        !scrollDown
          ? 'sticky top-0  z-50 grid grid-cols-3 bg-[#001226]  shadow-md p-4 md:px-10'
          : 'sticky top-0  z-50 grid grid-cols-3 bg-white  shadow-md p-4 md:px-10 transition duration-300'
      }
    >
      <div
        onClick={() => router.push('./')}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Search Section */}
      <div className="flex items-center sm:border-2 rounded-full py-2 ml-3 shadow-md md:shadow-sm md:hover:shadow-md cursor-pointer text-sm ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || 'Start your search'}
          className={
            !scrollDown
              ? 'placeholder-white text-white flex-grow pl-4 md:pl-5 bg-transparent outline-none '
              : ' placeholder-gray-600 flex-grow pl-4 md:pl-5 bg-transparent outline-none '
          }
        />
        <SearchIcon className="hidden h-8 text-red-500 md:inline-flex md:bg-red-500 md:text-white md:rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      <div
        className={
          !scrollDown
            ? 'flex space-x-4 items-center justify-end text-gray-300'
            : 'flex space-x-4 items-center justify-end text-gray-500'
        }
      >
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-4 sm:h-6" />
          <UserCircleIcon className="h-4 sm:h-8" />
        </div>
      </div>
      <div
        className={
          !scrollDown
            ? 'absolute -bottom-20  bg-gradient-to-b from-[#000d1d] h-24 w-full'
            : ' '
        }
      />
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={selectDates}
          />
          <div
            className={
              !scrollDown
                ? 'flex items-center bg-white border-b pb-4 px-4'
                : 'flex items-center border-b mb-4 px-4'
            }
          >
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 ml-2 pl-2 text-lg outline-none text-red-400 border border-red-500 rounded-lg"
            />
          </div>
          <div className={!scrollDown ? 'flex bg-white p-3' : 'flex '}>
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={searchPlaces} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
