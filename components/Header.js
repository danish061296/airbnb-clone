import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter } from 'next/router';
import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, DateRange } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

const Header = ({ placeholder, router }) => {
  const [searchInput, setSearchInput] = useState('');
  const [scrollDown, setScrollDown] = React.useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfAdults, setNumberOfAdults] = useState(1);
  const [numberOfKids, setNumberOfKids] = useState(0);

  const routerP = useRouter();
  // to check if the screen size is for mobile devices
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const selectDates = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const searchPlaces = () => {
    routerP.push({
      pathname: './search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfAdults,
        numberOfKids,
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

  if (process.browser && router.pathname == '/') {
    window.addEventListener('scroll', changeNavbarColor);
  }

  useEffect(() => {
    changeNavbarColor();
  }, []);

  return (
    <header
      className={
        router.pathname === '/'
          ? !scrollDown
            ? 'sticky top-0  z-50 flex flex-col items-center justify-center sm:grid grid-cols-3 bg-[#001226]  shadow-md p-4 md:px-10'
            : 'sticky top-0  z-50 flex flex-col items-center justify-center sm:grid grid-cols-3 bg-white  shadow-md p-4 md:px-10 transition duration-300'
          : 'sticky top-0  z-50 flex flex-col items-center justify-center sm:grid grid-cols-3 bg-white  shadow-md p-4 md:px-10 transition duration-300'
      }
    >
      <div
        onClick={() => routerP.push('./')}
        className="hidden sm:relative sm:flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="bg-gray-100  w-5/6  flex items-center sm:border-2 rounded-full py-2 ml-3 sm:bg-white shadow-md md:shadow-sm md:hover:shadow-md cursor-pointer text-sm ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || 'Where are you going?'}
          className={
            router.pathname === '/'
              ? !scrollDown
                ? ' placeholder-black  h-5 text-black flex-grow pl-4 sm:text-left md:pl-5 bg-transparent outline-none '
                : 'bg-white placeholder-gray-600 flex-grow pl-4 md:pl-5 bg-transparent outline-none '
              : 'bg-white placeholder-gray-600 flex-grow pl-4 md:pl-5 bg-transparent outline-none '
          }
        />
        <SearchIcon className=" h-9 pr-4 sm:pr-2 text-red-500 md:inline-flex md:h-8  md:bg-red-500 md:text-white md:rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      <div
        className={
          router.pathname === '/'
            ? !scrollDown
              ? 'hidden sm:flex space-x-4 items-center justify-end text-gray-300'
              : 'hidden sm:flex space-x-4 items-center justify-end text-gray-500'
            : 'hidden sm:flex space-x-4 items-center justify-end text-gray-500'
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
          router.pathname === '/'
            ? !scrollDown
              ? 'absolute -bottom-20  bg-gradient-to-b from-[#000d1d] h-24 w-full'
              : ' '
            : ' '
        }
      />
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto ">
          {isMobile ? (
            <DateRange
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={['#FD5B61']}
              onChange={selectDates}
            />
          ) : (
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={['#FD5B61']}
              onChange={selectDates}
            />
          )}
          <div
            className={
              router.pathname === '/'
                ? !scrollDown
                  ? 'flex  bg-white border-b py-2 px-4 border-t'
                  : 'flex  border-b mb-4 px-4 py-2 border-t '
                : 'flex  border-b mb-4 px-4 py-2 border-t '
            }
          >
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex">
                <p className="font-semibold">Adults</p>

                <input
                  value={numberOfAdults}
                  onChange={(e) => setNumberOfAdults(e.target.value)}
                  type="number"
                  min={1}
                  className="w-12 ml-2 pl-2 text-lg outline-none text-red-400 border border-red-500 rounded-lg"
                />
              </div>
              <div className="flex">
                <p className="ml-4 font-semibold">Kids</p>

                <input
                  value={numberOfKids}
                  onChange={(e) => setNumberOfKids(e.target.value)}
                  type="number"
                  min={0}
                  className="w-12 ml-2 pl-2 text-lg outline-none text-red-400 border border-red-500 rounded-lg"
                />
              </div>
            </div>
          </div>
          <div
            className={
              router.pathname === '/'
                ? !scrollDown
                  ? 'flex bg-white p-3'
                  : 'flex '
                : 'flex'
            }
          >
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

// export default Header;
export default withRouter(Header);
