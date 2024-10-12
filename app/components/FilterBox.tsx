"use client";

import { Divider } from "@nextui-org/react";
import ButtonZiva from "./ButtonZiva";
import Drawer from "antd/es/drawer";
import { useState } from "react";
import { CloseCircle, CloseSquare } from "solar-icon-set";

interface FilterBoxType {
  name: string;
  Icon: any;
  children: React.ReactNode;
  clsasName?: string;
  childrenclassName?: string;
  isFilter?: boolean
}

const FilterBox: React.FC<FilterBoxType> = ({
  name,
  Icon,
  children,
  clsasName,
  childrenclassName,
  isFilter
}) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div
        className={`bg-white lg-max:hidden w-[264px] flex flex-col p-6 gap-8  rounded-2xl   shadow-Box ${clsasName}`}
      >
        <HeaderFilterBox isFilter={isFilter} name={name} Icon={Icon} />
        <div className={`flex flex-col gap-6 ${childrenclassName}`}>{children}</div>
      </div>
      <div className="lg-min:hidden ">
        <ButtonZiva
          onClick={showDrawer}
          className="h-10 w-auto text-xs font-semibold rounded-full bg-white hover:!bg-white focus:bg-white border-none text-gray-700"
          buttonText={name}
          variant="ghost"
          type="submit"
          rightIcon={<div className="text-orange-500 flex justify-center items-center">{Icon}</div>}
        />
        <Drawer
          placement="bottom"
          onClose={onClose}
          className="rounded-t-2xl"
          height={'auto'}
          open={open}
        >
          <div className={`bg-white !z-[99999999999999999999999]  h-full flex flex-col p-6 gap-4 ${childrenclassName}`}>
            <HeaderFilterBox isFilter={isFilter} name={name} Icon={Icon} />
            {children}
          </div>

        </Drawer>
      </div>
    </div>
  );
};

export default FilterBox;
function HeaderFilterBox({ name, Icon, isFilter }: { name: string, Icon: any, isFilter?: boolean }) {
  return (<div className="flex flex-row-reverse  gap-6 justify-center items-center ">
    <div className="flex-grow flex flex-row-reverse justify-center items-center">
    {isFilter && <ButtonZiva className="p-0 gap-[2px] min-w-[66px] w-[57px] h-[20px]" theme="default" buttonTextClassName="text-10 font-semibold text-Error-500" variant="flat" type="button" buttonText="حذف همه" leftIcon={<CloseSquare size={10} color="#F04438" />} />}
      <hr className="w-full bg-orange-200" />
    </div>
    <div className="flex gap-2 flex-row-reverse justify-center items-center">
      <h2 className="text-lg font-bold text-nowrap">{name}</h2>
      <div className="text-orange-500 flex justify-center items-center">{Icon}</div>
    </div>
  </div>);
}
