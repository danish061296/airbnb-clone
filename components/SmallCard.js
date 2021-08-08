import Image from 'next/image';

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center rounded-lg mr-4  space-x-4 cursor-pointer ml-4 hover:bg-white hover:border-gray-400 hover:scale-105 hover:shadow-md transition transform duration-200 ease-out mb-4 pr-24 sm:pr-0 sm:mr-0 sm:mb-0  ">
      <div className="relative h-20 w-20 sm:h-16 sm:w-16 pl-3 shadow-lg rounded-lg ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col items-left justify-center">
        <h2 className="font-semibold">{location}</h2>
        <h3 className="text-sm text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
