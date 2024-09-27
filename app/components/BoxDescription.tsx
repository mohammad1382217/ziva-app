import { Divider } from "@nextui-org/react";
import React from "react";

interface BoxDescriptionType {
  name: string;
  Icon: any;
  children: React.ReactNode;
  clsasName?: string;
  childrenclassName?:string
}

const BoxDescription: React.FC<BoxDescriptionType> = ({
  name,
  Icon,
  children,
  clsasName,
  childrenclassName
}) => {
  return (
    <div
      className={`bg-white flex flex-col p-6 gap-8  rounded-2xl   shadow-Box ${clsasName}`}
    >
      <div className="flex flex-row-reverse  gap-6 justify-center items-center">
        <div className="flex-grow">
          <Divider className="w-full bg-orange-200" />
        </div>
        <div className="flex gap-2 flex-row-reverse justify-center items-center">
          <h2 className="text-2xl font-bold text-nowrap">{name}</h2>
          <Icon color="#F04438" size={24} iconStyle="Outline" />
        </div>
      </div>
      <div className={`flex flex-col gap-6 ${childrenclassName}`}>{children}</div>
    </div>
  );
};

export default BoxDescription;