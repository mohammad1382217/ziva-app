import CarouselCollection from "../components/CarouselCollection/CarouselCollection";
import ImageSampel from '../assests/RectangleLoginPage.webp'
import { EmblaOptionsType } from "embla-carousel";
import { ArrowDown, HandStars, Heart, MapPointWave, Sale, ClipboardList, DangerSquare, Ticket, ChatLine } from "solar-icon-set";
import StarWhite from '@/app/assests/startWhite.svg';
import Image from "next/image";
import Map from '../assests/Button.png'
import { getImageProps } from 'next/image'
import SegmentedZiva from "../components/SegmentedZiva";
import { useState } from "react";
import BoxDescription from "../components/BoxDescription";
function getBackgroundImage(srcSet = '') {
    const imageSet = srcSet
        .split(', ')
        .map((str) => {
            const [url, dpi] = str.split(' ')
            return `url("${url}") ${dpi}`
        })
        .join(', ')
    return `image-set(${imageSet})`
}


const Collection = () => {

    const SLIDES = [
        { src: ImageSampel, alt: 'استخر' },
        { src: ImageSampel, alt: 'استخر' },
        { src: ImageSampel, alt: 'استخر' },
        { src: ImageSampel, alt: 'استخر' },
        { src: ImageSampel, alt: 'استخر' },
        { src: ImageSampel, alt: 'استخر' },
    ];
    const SegmentZiva = [
        { Icon: <ClipboardList size={24} iconStyle="Outline" />, name: 'معرفی مجموعه' },
        { Icon: <HandStars size={24} iconStyle="Outline" />, name: 'امکانات' },
        { Icon: <Ticket size={24} iconStyle="Outline" />, name: 'خرید بلیط' },
        { Icon: <ChatLine size={24} iconStyle="Outline" />, name: 'نظرات' },
    ];

    const OPTIONS: EmblaOptionsType = { align: 'center', direction: 'rtl', loop: true }


    const {
        props: { srcSet },
    } = getImageProps({ alt: '', width: 128, height: 128, src: Map })
    const backgroundImage = getBackgroundImage(srcSet)
    const style = { backgroundImage }

    return (
        <div className="overflow-hidden flex justify-center w-full h-full gap-32 bg-gray-50">
            <div className="containerZiva">
                <section className="flex p-6 gap-8 w-full rounded-3xl justify-between bg-white">
                    <div className="w-full flex flex-col justify-between">
                        <div className="flex flex-col gap-10">
                            <div className="flex justify-between items-start">
                                <h1 className="text-40 font-black text-gray-700">
                                    نام استخر
                                </h1>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex justify-center items-center gap-1">
                                        <Heart iconStyle={"Broken"} size={14} color="#FF0054" />
                                        <div className="rounded-lg gap-[3px] flex w-10 h-5 flex-row justify-center items-center bg-amber-400">
                                            <span className="text-white mt-[3px] font-bold text-10">2.3</span>
                                            <Image src={StarWhite} alt="ستاره" color="#FFBD00" width={12} height={12} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-row items-center gap-2">
                                    <div className="w-6">
                                        <MapPointWave color="#FF5400" size={24} />
                                    </div>
                                    <p className="text-gray-600 text-lg font-normal">
                                        آدرس کامل استخر لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                                    </p>
                                </div>
                                <div className="w-full justify-end flex">
                                    <button className="bg-no-repeat scale-110 w-28 h-8" style={style}>
                                        {/* Hello World */}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex h-[112px] flex-row gap-6">
                            <div className="relative w-4/12 flex justify-between flex-col p-4 bg-gray-50 rounded-2xl">
                                <div>
                                    <span className="font-semibold text-gray-400 text-base">قیمت گیشه</span>
                                </div>
                                <div className="relative z-20 text-lg font-semibold text-gray-600">
                                    100,000 تومان
                                    <div className="absolute top-4 left-2 right-2 h-0.5 bg-Folly-500 transform rotate-[-12deg] z-10">
                                    </div>
                                </div>
                            </div>
                            <div className="w-8/12 flex justify-between flex-col p-4 rounded-2xl bg-cover bg-RectangleOrange">
                                <div className="flex flex-row justify-between">
                                    <span className="font-semibold text-white text-base">قیمت زیوا</span>
                                    <div className="flex rounded-full flex-row-reverse justify-center items-center gap-[2px]  h-[20px]  p-2  bg-white">
                                        <Sale color="#FF0054" width={14} height={14} size={14} />
                                        <p className="text-10 mt-[3px] font-bold text-Folly-500">
                                            تا 20 درصد تخفیف
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <span className="font-bold text-white text-xl">000,000 تومان</span>
                                    <button className="flex  flex-row-reverse justify-center items-center gap-2 font-semibold text-sm text-white">
                                        <ArrowDown color="#FFFFFF" width={20} height={20} size={20} />
                                        خرید بلیط
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="w-96">
                        <CarouselCollection options={OPTIONS} slides={SLIDES} />
                    </div>
                </section>
                <section className="my-24">
                    <SegmentedZiva options={SegmentZiva} />
                </section>

                <section>
                    <BoxDescription name="اطلاعیه ها" Icon={DangerSquare}>
                        <h1 className="text-right text-orange-300">استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل می‌باشد</h1>
                    </BoxDescription>
                    <BoxDescription name="اطلاعیه ها" Icon={DangerSquare}>
                        <h1 className="text-right text-orange-300">استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل می‌باشد</h1>
                    </BoxDescription>
                    <BoxDescription name="اطلاعیه ها" Icon={DangerSquare}>
                        <h1 className="text-right text-orange-300">استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل می‌باشد</h1>
                    </BoxDescription>
                    <BoxDescription name="اطلاعیه ها" Icon={DangerSquare}>
                        <h1 className="text-right text-orange-300">استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل می‌باشد</h1>
                    </BoxDescription>
                    <BoxDescription name="اطلاعیه ها" Icon={DangerSquare}>
                        <h1 className="text-right text-orange-300">استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل می‌باشد</h1>
                    </BoxDescription>
                    <BoxDescription name="اطلاعیه ها" Icon={DangerSquare}>
                        <h1 className="text-right text-orange-300">استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل می‌باشد</h1>
                    </BoxDescription>
                    <BoxDescription name="اطلاعیه ها" Icon={DangerSquare}>
                        <h1 className="text-right text-orange-300">استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل می‌باشد</h1>
                    </BoxDescription>
                    <BoxDescription name="اطلاعیه ها" Icon={DangerSquare}>
                        <h1 className="text-right text-orange-300">استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل می‌باشد</h1>
                    </BoxDescription>
                    <BoxDescription name="اطلاعیه ها" Icon={DangerSquare}>
                        <h1 className="text-right text-orange-300">استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل می‌باشد</h1>
                    </BoxDescription>
                </section>
            </div>

        </div>);
}

export default Collection;