const PriceMarker = ({ price }) => {
  return (
    <div className="flex items-center justify-content py-1 px-2 bg-white  rounded-lg shadow-xl">
      <p className="font-semibold text-sm">{price.split(' ')[0]}</p>
    </div>
  );
};

export default PriceMarker;
