import { Divider } from "@nextui-org/react";
import React from "react";

interface BoxDescriptionType { name: string, Icon: any, children: React.ReactNode }

const BoxDescription: React.FC<BoxDescriptionType> = ({ name, Icon, children }) => {
    return (
        <div className="bg-white flex flex-col m-10 p-6 gap-8  rounded-2xl   shadow-Box">
            <div className="flex flex-row  gap-6 justify-center items-center">
                <div className="flex-grow">
                    <Divider className="w-full bg-orange-200" />
                </div>
                <div className="flex gap-2 flex-row justify-center items-center">
                    <h2 className="text-2xl font-bold text-nowrap">
                        {name}
                    </h2>
                    <Icon color="#F04438" size={24} iconStyle="Bold" />
                </div>
            </div>
            <div className="">
                {children}
            </div>
        </div>);
}

export default BoxDescription;