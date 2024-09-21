const Banner = ({ className }: { className: string }) => {
  return (
    <div
      className={`${className} sm-max:w-full flex justify-center items-center text-white text-2xl font-normal rounded-2xl h-full bg-gray-400`}
    >
      BANNER
    </div>
  );
};

export default Banner;
