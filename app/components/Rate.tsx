import Image from "next/image";
import StarWhite from "../../public/startWhite.svg";

interface rateType {
  rate: number;
  className?: string;
  color?: string;
}

const Rate: React.FC<rateType> = ({ rate, className, color }) => {
  return (
    <div
      className={`rounded-lg gap-[3px] flex w-10 h-5 flex-row justify-center items-center bg-amber-400 ${className} `}
    >
      <span className="text-white mt-[3px] font-bold text-10">{rate}</span>
      <Image src={StarWhite} alt="ستاره" color="#FFBD00" width={12} height={12} />
    </div>
  );
};

export default Rate;
