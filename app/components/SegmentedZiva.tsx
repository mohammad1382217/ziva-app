"use client";

import { Tabs, Tab } from "@nextui-org/tabs";
import { Affix } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
interface objectType {
  hash: string;
  Icon: JSX.Element; // حالا Icon به جای تابع، یک المان JSX است
  name: string;
}

interface SegmentedZivaType {
  options: objectType[];
}

const SegmentedZiva: React.FC<SegmentedZivaType> = ({ options }) => {
  const [navClick, setNavClick] = useState(false);
  // const [activeTab, setActiveTab] = useState(0);
  // const observerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  // useEffect(() => {
  //     const handleObserver = (entries: IntersectionObserverEntry[]) => {
  //         entries.forEach((entry) => {
  //             if (entry.isIntersecting) {
  //                 const index = observerRefs.current.findIndex((el) => el === entry.target);
  //                 if (index !== -1 && !navClick) {
  //                     console.log(activeTab)
  //                     setActiveTab(index);
  //                     router.push(options[index].hash);
  //                 }
  //             }
  //         });
  //     };

  //     const observer = new IntersectionObserver(handleObserver, {
  //         threshold: 0.5, // Change this value to control when a section is considered visible
  //     });

  //     observerRefs.current.forEach((section) => {
  //         if (section) {
  //             observer.observe(section);
  //         }
  //     });

  //     return () => {
  //         observer.disconnect();
  //     };
  // }, [navClick, options, router]);

  useEffect(() => {
    setTimeout(() => {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
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