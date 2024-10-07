import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import { Reply2 } from "solar-icon-set";

interface DividerCardsType {
  name: string;
  navigate?: string;
  costomNavigte?: string;
  className?:string;
  textClassName?:string;
}

const DividerCards: React.FC<DividerCardsType> = ({
  name,
  navigate,
  costomNavigte,
  textClassName,
  className
}) => {
  return (
    <div className={`flex w-full flex-row-reverse  gap-8 justify-center items-center ${className}`}>
      {navigate && (
        <Link
          href={navigate}
          className="hidden sm-min:flex  flex-row justify-center items-center gap-2"
        >
          <span className="text-gray-700 font-semibold text-lg">
            {costomNavigte ? costomNavigte : "مشاهده بیشتر"}
          </span>
          <Reply2 color="#FF5400" size={20} />
        </Link>
      )}

      <div className="hidden sm-min:flex flex-grow">
        <Divider className="w-full bg-orange-200" />
      </div>
      <div className="flex gap-2 flex-row justify-center items-center">
        <span className={`text-3xl text-gray-800 font-bold text-nowrap ${textClassName}`}>{name}</span>
      </div>
    </div>
  );
};

export default DividerCards;