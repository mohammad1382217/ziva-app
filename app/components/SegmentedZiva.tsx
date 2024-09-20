'use client'
import { Tabs, Tab } from "@nextui-org/react";
import { Affix } from "antd";
interface objectType {
    Icon: JSX.Element;  // حالا Icon به جای تابع، یک المان JSX است
    name: string;
}

interface SegmentedZivaType {
    options: objectType[];
}

const SegmentedZiva: React.FC<SegmentedZivaType> = ({ options }) => {

    return (
        <Affix offsetTop={60}>
            <div className="flex  w-full flex-col">
                <Tabs aria-label="Options" color="primary" variant="bordered"
                    classNames={{
                        tabList: "rounded-full flex justify-between px-32 py-4 w-full bg-gradient-to-r from-white/10 to-white/10 bg-opacity-0 backdrop-blur-lg",
                        cursor: "w-full rounded-full bg-white text-orange-200",
                        tab: "max-w-fit px-0  h-10 rounded-full",
                        tabContent: "!w-44 group-data-[selected=true]:text-orange-500 text-orange-200"
                    }}
                >
                    {options.map(({ Icon, name }, index) => (
                        <Tab
                            key={index}
                            title={
                                <div className="flex gap-2 items-center justify-center">
                                    {Icon}
                                    <span>{name}</span>
                                </div>
                            }
                        />
                    ))}
                </Tabs>
            </div>
        </Affix>
    );
};

export default SegmentedZiva;