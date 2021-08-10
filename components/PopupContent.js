import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';

function PopupContent({ result: { img, star, price, location } }) {
  return (
    <div className="h-70 w-[250px] bg-white  flex flex-col  rounded-3xl ">
      <div className="relative h-40 w-[250px] ">
        <Image
          src={img}
          objectFit="cover"
          layout="fill"
          className="rounded-2xl"
        />
      </div>
      <div className="mt-2">
        <p className="flex items-center">
          <StarIcon className="h-5 text-red-400" />
          {star}
        </p>
        <p className="font-light">{location}</p>
        <p className="font-semibold">{price}</p>
      </div>
    </div>
  );
}

export default PopupContent;
