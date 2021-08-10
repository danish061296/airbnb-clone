import Image from 'next/image';

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-40 left-12 ">
        <h3 className=" text-4xl  sm:text-5xl mb-3 w-70 text-white tracking-wider">
          {title}
        </h3>
        <p className="text-white text-sm sm:text-md tracking-wider">
          {description}
        </p>

        <button className="text-md font-semibold text-gray-900 bg-white px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
