import { GlobeAltIcon } from '@heroicons/react/outline';

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14  text-gray-600">
        <div className="space-y-4 tracking-wide text-sm text-gray-700">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>HotelTonight</p>
          <p>Airbnb for Work</p>
          <p>Careers</p>
          <p>Made possible by Host</p>
        </div>

        <div className="space-y-4 tracking-wide text-sm text-gray-700">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessinility</p>
          <p>This is not a real site</p>
          <p>Its a pretty awesome clone</p>
          <p>Referrals accepted</p>
          <p>Danish</p>
        </div>
        <div className="space-y-4 tracking-wide text-sm text-gray-700">
          <h5 className="font-bold">HOST</h5>
          <p>Danish Siddiqui</p>
          <p>Presents</p>
          <p>React Development</p>
          <p>Cool Websites</p>
          <p>Lets Go</p>
        </div>
        <div className="space-y-4 tracking-wide text-sm text-gray-700">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Help Center</p>
          <p>Trust & Safety</p>
          <p>Say Hi Developers</p>
          <p>Easter Eggs</p>
          <p>For the Win</p>
        </div>
      </div>
      <div className="border-t max-w-[1200px] m-auto border-gray-300 grid grid-cols-1 md:grid-cols-3 h-40 md:h-20 text-gray-700">
        <div className="flex  justify-center items-center text-xs space-x-2 ">
          <p>© 2021 Airbnb-clone, Inc</p>
          <p>. Privacy</p>
          <p>. Terms</p>
          <p>. Sitemap</p>
        </div>
        <div className="flex justify-center items-center text-xs ">
          <p>By Danish Siddiqui</p>
        </div>
        <div className="flex justify-center items-center text-xs space-x-2 font-semibold">
          <GlobeAltIcon className="h-5 w-5" />

          <p>English(US)</p>
          <p>$ USD</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
