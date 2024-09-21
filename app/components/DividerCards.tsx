import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { Reply2 } from "solar-icon-set";

interface DividerCardsType {
  name: string;
  navigate: string;
}

const DividerCards: React.FC<DividerCardsType> = ({ name, navigate }) => {
  return (
    <div className="flex flex-row-reverse  gap-8 justify-center items-center">
      <Link
        href={navigate}
        className="hidden sm-min:flex  flex-row justify-center items-center gap-2"
      >
        <span className="text-gray-700 font-semibold text-lg">
          مشاهده بیشتر
        </span>
        <Reply2 color="#FF5400" size={20} />
      </Link>
      <div className="hidden sm-min:flex flex-grow">
        <Divider className="w-full bg-orange-200" />
      </div>
      <div className="flex gap-2 flex-row justify-center items-center">
        <span className="text-3xl font-bold text-nowrap">{name}</span>
      </div>
    </div>
  );
};

export default DividerCards;