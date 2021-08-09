import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative   h-[570px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image
        // src="https://links.papareact.com/0fm"
        src="https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute px-10 text-center w-full top-[30px] md:top-1/4 md:pl-16 py-6 space-y-6 md:w-1/3">
        <p className="text-white text-3xl md:text-3xl lg:text-6xl font-bold  ">
          Olympian & Paralympian Online Experiences
        </p>
        <button className="text-black text-sm shadow-sm sm:shadow-md bg-white px-3 py-2 rounded-md ">
          Explore now
        </button>
      </div>
    </div>
  );
};

export default Banner;
