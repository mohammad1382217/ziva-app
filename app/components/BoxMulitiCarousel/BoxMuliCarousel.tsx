"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import EmblaCarousel from "./EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import DividerCards from "../DividerCards";
import { Reply2 } from "solar-icon-set";
import { CardType } from "../Card";

interface BoxMuliCarouselType {
  SLIDES: CardType[];
  DivderName: string;
  DividerNavigate?: string;
  Verticalable?: boolean;
  costomNavigte?: string;
}

const BoxMuliCarousel: React.FC<BoxMuliCarouselType> = ({
  SLIDES,
  DivderName,
  DividerNavigate,
  Verticalable,
  costomNavigte,
}) => {
  const OPTIONS: EmblaOptionsType = {
    align: "center",
    direction: "rtl",
    dragFree: true,
    loop: false,
  };

  const [isVerticalable, setIsVerticalable] = useState(Verticalable);
  useEffect(() => {
    const handleResize = () => setIsVerticalable(window.innerWidth >= 540);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [Verticalable]);

  return (
    <div className="">
      <div>
        <DividerCards
          costomNavigte={costomNavigte!}
          name={DivderName}
          navigate={DividerNavigate!}
        />
      </div>
      <EmblaCarousel
        isChangeVerticalable={isVerticalable}
        Verticalable={Verticalable}
        slides={SLIDES}
        options={OPTIONS}
      />
      {DividerNavigate ? (
        <Link
          href={DividerNavigate}
          className="flex sm-min:hidden my-3 flex-row justify-center items-center gap-2"
        >
          <span className="text-slate-700 font-semibold text-lg">
            {costomNavigte ? costomNavigte : "مشاهده بیشتر"}
          </span>
          <Reply2 color="#FF5400" size={20} />
        </Link>
      ) : null}
    </div>
  );
};

export default BoxMuliCarousel;
