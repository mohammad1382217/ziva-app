"use client";

import { Divider } from "@nextui-org/react";
import ButtonZiva from "./Button";
import Drawer from "antd/es/drawer";
import { useState } from "react";

interface FilterBoxType {
  name: string;
  Icon: any;
  children: React.ReactNode;
  clsasName?: string;
  childrenclassName?: string;
}

const FilterBox: React.FC<FilterBoxType> = ({
  name,
  Icon,
  children,
  clsasName,
  childrenclassName,
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
        <div className="flex flex-row-reverse  gap-6 justify-center items-center">
          <div className="flex-grow">
            <Divider className="w-full bg-orange-200" />
          </div>
          <div className="flex gap-2 flex-row-reverse justify-center items-center">
            <h2 className="text-2xl font-bold text-nowrap">{name}</h2>
            {/* <Icon color="#F04438" size={24} iconStyle="Outline" /> */}
            <div className="text-orange-500">{Icon}</div>
          </div>
        </div>
        <div className={`flex flex-col gap-6 ${childrenclassName}`}>{children}</div>
      </div>
      <div className="lg-min:hidden">
        <ButtonZiva
          onClick={showDrawer}
          className="h-10 w-auto rounded-full bg-white hover:!bg-white focus:bg-white border-none text-slate-900"
          buttonText="امکانات"
          variant="ghost"
          type="submit"
          rightIcon={Icon}
        />
        <Drawer
          className="rounded-t-2xl"
          placement="bottom"
          title="Basic Drawer"
          onClose={onClose}
          open={open}
        >
          <div className={`flex flex-col gap-6 ${childrenclassName}`}>{children}</div>
        </Drawer>
      </div>
    </div>
  );
};

export default FilterBox;
