import React from "react";
import CarouselCollection, { ImageProps } from "../components/CarouselCollection/CarouselCollection";
import Image, { getImageProps } from "next/image";
import { Heart } from "solar-icon-set";
import { ArrowDown } from "solar-icon-set";
import { MapPointWave } from "solar-icon-set";
import Discount from "../components/Discount";
import Map from "../../public/Button.webp";
import Link from "next/link";

interface PoolCardProps {
  name: string;
  rating: number; // امتیاز از 5
  address: string;
  linkBuyTicket:string;
  link: string; // لینک برای دکمه
  gatePrice: string; // قیمت گیشه
  zivaPrice: string; // قیمت زیوا
  discount?: number; // درصد تخفیف (اختیاری)
  showCarousel?: boolean; // نشان دادن یا ندادن کاروسل (اختیاری)
  slides?: Array<ImageProps>; // اگر کاروسل نمایش داده شود
  options?: any; // گزینه‌های کاروسل
}

const getBackgroundImage = (srcSet = "") => {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
};

const PoolCard: React.FC<PoolCardProps> = ({
  name,
  rating,
  address,
  link,
  linkBuyTicket,
  gatePrice,
  zivaPrice,
  discount,
  showCarousel = false,
  slides = [],
  options = {},
}) => {
  const discountComponent = discount ? (
    <Discount color="#FF0054" discount={discount} />
  ) : null;

  
  const {
    props: { srcSet },
  } = getImageProps({ alt: "", width: 128, height: 128, src: Map });
  const backgroundImage = getBackgroundImage(srcSet);
  const style = { backgroundImage };

  return (
    <section className="flex p-6 gap-8 lg-max:flex-col-reverse w-full h-auto rounded-3xl justify-between bg-white">
      <div className="w-full h-full gap-10 lg-max:gap-[1.4rem] flex flex-col justify-between">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between items-start">
            <h1 className="text-40 font-black text-black">{name}</h1>
            <div className="flex flex-row justify-between items-center">
              <div className="flex justify-center items-center gap-1 ">
                <Heart iconStyle={"Outline"} size={14} color="#d1d5db" />
                <div className="rounded-lg gap-[3px] flex w-10 h-5 flex-row justify-center items-center bg-amber-400">
                  <span className="text-white mt-[3px] font-bold text-10">{rating.toFixed(1)}</span>
                  <Image src="/startWhite.svg" alt="ستاره" color="#FFBD00" width={12} height={12} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-2">
              <div className="w-6">
                <MapPointWave color="#FF5400" size={24} />
              </div>
              <p className="text-slate-600 text-lg lg-max:text-base font-normal">{address}</p>
            </div>
            <div className="w-full justify-end flex">
              <a href={link}>
                <button style={style} className="bg-no-repeat scale-110 w-28 h-8"></button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex h-[112px] lg-max:h-auto flex-row lg-max:flex-col gap-6 lg-max:gap-4">
          <div className="relative w-44 xl-max:w-52 lg-max:w-full lg-max:flex-row flex justify-between flex-col p-4 bg-slate-50 rounded-2xl">
            <div>
              <span className="font-semibold text-slate-400 text-base">قیمت گیشه</span>
            </div>
            <div className="relative z-20 text-lg font-semibold text-slate-600">
              {gatePrice}
              <div className="absolute top-4 left-2 right-2 h-0.5 bg-Folly-500 transform rotate-[-12deg] z-10"></div>
            </div>
          </div>
          <div className="w-full flex justify-between flex-col p-4 rounded-2xl bg-cover bg-RectangleOrange">
            <div className="flex flex-row justify-between">
              <span className="font-semibold text-white text-base">قیمت زیوا</span>
              {discountComponent}
            </div>
            <div className="flex flex-row justify-between">
              <span className="font-bold text-white text-xl">{zivaPrice}</span>
              <Link href={linkBuyTicket} >
              <button className="flex flex-row-reverse justify-center items-center gap-2 font-semibold text-sm text-white">
                <ArrowDown color="#FFFFFF" width={20} height={20} size={20} />
                خرید بلیط
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {showCarousel && (
        <div className="w-96 lg-max:w-full">
          <CarouselCollection options={options} slides={slides} />
        </div>
      )}
    </section>
  );
};

export default PoolCard;