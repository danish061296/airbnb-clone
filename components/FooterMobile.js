import { SearchIcon } from '@heroicons/react/solid';
import { HeartIcon, UserCircleIcon } from '@heroicons/react/outline';

const FooterMobile = () => {
  return (
    <div className="absolute sticky h-16 bg-white bottom-0 flex items-center justify-center space-x-14 text-gray-400 cursor-pointer border-t border-gray-300 sm:hidden ">
      <div className="flex flex-col items-center justify-center ">
        <SearchIcon className="h-7 text-red-500 mt-2 " />
        <p className="text-sm">Explore</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <HeartIcon className="h-7 mt-2" />
        <p className="text-sm">Whishlists</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <UserCircleIcon className="h-7 mt-2" />
        <p className="text-sm">Log In</p>
      </div>
    </div>
  );
};

export default FooterMobile;
