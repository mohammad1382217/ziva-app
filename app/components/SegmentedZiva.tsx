"use client";

import { Tabs, Tab } from "@nextui-org/tabs";
import { Affix } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface objectType {
  hash: string;
  Icon: JSX.Element;
  name: string;
}

interface SegmentedZivaType {
  options: objectType[];
}

const SegmentedZiva: React.FC<SegmentedZivaType> = ({ options }) => {
  const [navClick, setNavClick] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }
      }
    }, 0);
  }, [navClick]);

  const toggleNavClick = () => setNavClick((oldVal) => !oldVal);

  return (
    <Affix offsetTop={60}>
      <div className="flex  w-full flex-col">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="bordered"
          classNames={{
            tabList:
              "rounded-full flex justify-between px-32 py-4 w-full bg-gradient-to-r from-white/10 to-white/10 bg-opacity-0 backdrop-blur-lg",
            cursor: "w-full rounded-full bg-white text-orange-200",
            tab: "max-w-fit px-0  h-10 rounded-full",
            tabContent:
              "!w-44 group-data-[selected=true]:text-orange-500 text-orange-200",
          }}
          onSelectionChange={(index) => {
            toggleNavClick();
            router.push(`${options[Number(index)].hash}`);
          }}
        >
          {options.map(({ Icon, name, hash }, index) => (
            <Tab
              id={hash}
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