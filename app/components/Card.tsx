'use client'
import { Divider } from "antd";
import Link from "next/link";
import { Heart, Map, Reply2, Sale, Star } from "solar-icon-set";

interface CardType {
    rate: number,
    like: boolean,
    discount: string,
    name: string,
    location: string,
    price: string,
    navigate: any,
}


const Card: React.FC<CardType> = ({ rate, like, discount, name, location, navigate, price }) => {
    return (
        <div className="bg-white w-[246px] h-[319px] flex flex-col m-10 p-1 gap-2  rounded-2xl shadow-Box">
            <div className="gap-1 relative w-[238px] h-[180px] rounded-xl p-1 bg-slate-600">
                <div className="rounded-lg absolute left-1 gap-[3px] flex w-10 h-5 flex-row justify-center items-center bg-gradient-to-r from-white/90 to-white/80 bg-opacity-20 backdrop-blur-lg">
                    <span className="text-gray-900 font-bold text-10">{rate}</span>
                    <Star size={12} color="#FFBD00" />
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">

                <div className="flex rounded-full justify-center items-center  h-[18px] px-[2px] py-1  bg-Folly-500">
                    <Sale color="#FFFFFF" size={14} />
                    <p className="text-10 p-1 !m-0 font-bold text-white">
                        تا {discount} درصد تخفیف
                    </p>
                </div>
                <Heart color="#FF0054" />

            </div>
            <div className="gap-2">
                <h1 className="text-lg font-bold text-gray-700">
                    {name}
                </h1>
                <div className="flex flex-row gap-1">
                    <Map color="#FF5400" size={12} />
                    <p className="text-gray-400 text-xs font-normal">
                        {location}
                    </p>
                </div>
            </div>
            <div className="">
                <Divider className="w-full bg-orange-200" />
                <div className="flex justify-between py-1">
                    <p className="text-xs font-semibold text-gray-700">
                        شروع قیمت از : {price}
                    </p>
                    <Link href={navigate} className="flex flex-row justify-center items-center" >
                        <span className="text-orange-500 font-semibold text-[8px]">مشاهده</span>
                        <Reply2 color="#FF5400" height={6.71} width={9.63} />
                    </Link>

                </div>
            </div>

        </div>);
}

export default Card;