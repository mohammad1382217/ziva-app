"use client";

import Divider from "antd/es/divider";
import Link from "next/link";
import { Heart, MapPointWave, Reply2, Sale } from "solar-icon-set";
import Star from "../../public/start.svg";
import StarWhite from "../../public/startWhite.svg";
import Image from "next/image";

export interface CardType {
  rate: number;
  like: boolean;
  discount: string;
  name: string;
  location: string;
  price: string;
  navigate?: any;
  Verticalable?: boolean;
}

const Card: React.FC<CardType> = ({
  rate,
  like,
  discount,
  name,
  location,
  navigate,
  price,
  Verticalable,
}) => {
  return (
    <div
      className={`bg-white  flex p-1 gap-2  rounded-2xl shadow-Box ${Verticalable ? "flex-row w-[556px]" : "flex-col w-[246px]"}`}
    >
      <div
        className={`gap-1 relative ${Verticalable ? " w-[216px] h-[162px]" : " w-[238px] h-[180px]"} w-[238px] h-[180px] rounded-xl p-1 bg-slate-600`}
      >
        {Verticalable ? null : (
          <div className="rounded-lg absolute left-1 gap-[3px] flex w-10 h-5 flex-row justify-center items-center bg-gradient-to-r from-white/90 to-white/80 bg-opacity-20 backdrop-blur-lg">
            <span className="text-slate-900 font-bold text-10">{rate}</span>
            <Image src={Star}  alt="ستاره" color="#FFBD00" width={12} height={12} />
          </div>
        )}
      </div>
      <div className={`flex flex-col px-2 gap-3 ${Verticalable ? "w-full h-full" : ""}`}>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between items-center">
            <div className="flex rounded-full justify-center items-center gap-[2px]  h-[20px]  p-2  bg-Folly-500">
              <Sale color="#FFFFFF" iconStyle="Outline" width={14} height={14} size={14} />
              <p className="text-10 mt-[3px] font-bold text-white">
                تا {discount} درصد تخفیف
              </p>
            </div>
            {/* <Button isIconOnly color="default" className="bg-white border-1 border-Folly-500" > */}
            <div className="flex justify-center items-center gap-1">
              <Heart iconStyle={like ? "Bold" : "Outline"} size={14} color="#FF0054" />
              {Verticalable && (
                <div className="rounded-lg gap-[3px] flex w-10 h-5 flex-row justify-center items-center bg-amber-400">
                  <span className="text-white mt-[3px] font-bold text-10">{rate}</span>
                  <Image
                    src={StarWhite}
                    alt="ستاره"
                    color="#FFBD00"
                    width={12}
                    height={12}
                  />
                </div>
              )}
            </div>
            {/* </Button> */}
          </div>
          <div className="gap-2 flex flex-col">
            <h1 className="text-lg font-bold text-slate-700">{name}</h1>
            <div className="flex flex-row gap-1">
              <MapPointWave iconStyle="Outline" color="#FF5400" size={13} />
              <p className="text-slate-400 text-xs font-normal">{location}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-10">
          <Divider className="w-full m-0 bg-orange-200" />
          <div className="flex justify-between py-1">
            <p className="text-xs font-semibold text-slate-700">شروع قیمت از : {price}</p>
            <Link
              href={navigate}
              className="flex gap-1 flex-row justify-center items-center"
            >
              <span className="text-orange-500 font-semibold text-[10px]">
                {Verticalable ? "مشاهده  و خرید بلیط" : "مشاهده"}
              </span>
              <Reply2 iconStyle="Outline" color="#FF5400" height={6.71} width={9.63} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
