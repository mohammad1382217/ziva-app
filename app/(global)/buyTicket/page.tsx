import BoxDescription from "@/app/components/BoxDescription";
import ButtonZiva from "@/app/components/ButtonZiva";
import NotificationList from "@/app/components/NotificationList";
import Rules from "@/app/components/Roles";
import Schedule from "@/app/components/Schedule";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import {
  HourglassLine,
  MapPointWave,
  Reply2,
  Sale,
  UserHands,
  UsersGroupRounded,
} from "solar-icon-set";
import Image from "next/image";
import Plus from "../../../public/plus.svg";
import Minus from "../../../public/minus.svg";

const BuyTicket = () => {
  const notifications = [
    "استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل می‌باشد",
    "استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل می‌باشد",
  ];

  const menSchedule = [
    {
      label: "آقایان",
      schedule:
        "روز های یک‌شنبه، سه‌شنبه و پنج شنبه از ساعت 00 : 00 الی 00 : 00 و روز جمعه از ساعت 00 : 00 الی 00 : 00",
    },
  ];

  const womenSchedule = [
    {
      label: "بانوان",
      schedule:
        "روز های یک‌شنبه، سه‌شنبه و پنج شنبه از ساعت 00 : 00 الی 00 : 00 و روز جمعه از ساعت 00 : 00 الی 00 : 00",
    },
  ];

  const rulesList = [
    "۲۰ دقیقه پایانی سانس به دوش‌گرفتن و تعویض لباس اختصاص دارد.",
    "کودکان از 5 سال به بالا پذیرش می شوند.",
  ];

  return (
    <div className="overflow-hidden flex justify-center w-full h-full gap-32 bg-slate-50">
      <div className="containerZiva flex flex-col gap-6 mt-10">
        <div className="flex h-72 gap-6">
          <section
            className={`bg-white flex flex-col gap-8 rounded-2xl shadow-Box w-[744px] h-[274px] p-6`}
          >
            <section className={`flex px-2 gap-3 h-[144px]`}>
              <section
                className={`gap-1 relative w-[192px] h-[144px] rounded-xl p-1 bg-slate-600`}
              ></section>
              <div className="flex flex-col gap-3 justify-between h-[144px]">
                <section className="flex flex-col gap-2">
                  <div className="gap-4 flex flex-col">
                    <section className="flex flex-row justify-between">
                      <h1 className="text-lg font-bold text-slate-700">نام استخر</h1>
                      <Link
                        href={"navigate"}
                        className="flex gap-1 flex-row justify-center items-center"
                      >
                        <span className="text-orange-500 font-semibold text-[10px]">
                          مشاهده استخر
                        </span>
                        <Reply2 color="#FF5400" height={6.71} width={9.63} />
                      </Link>
                    </section>
                    <div className="flex flex-row gap-1">
                      <MapPointWave color="#FF5400" size={13} />
                      <p className="text-slate-400 text-xs font-normal">
                        آدرس کامل استخر لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                        صنعت چاپ و با استفاده از طراحان گرافیک است
                      </p>
                    </div>
                  </div>
                </section>
                <section className="flex py-1 gap-4">
                  <p className="text-sm font-semibold text-slate-700">
                    قیمت واحد گیشه :{" "}
                    <span className="text-slate-400 mr-1 text-sm font-bold">
                      000,000 تومان
                    </span>
                  </p>
                  <p className="text-sm font-semibold text-slate-700">
                    قیمت واحد زیوا :{" "}
                    <span className="text-white mr-1 text-sm font-bold bg-[#12B76A] py-1 px-2 rounded-full">
                      000,000 تومان
                    </span>
                  </p>
                </section>
              </div>
            </section>
            <div className="flex gap-2 items-center justify-center0">
              <section className="flex items-start gap-3">
                <section className="flex items-center justify-center border border-solid border-orange-500 rounded-xl w-12 h-12">
                  <UserHands
                    className="!w-[22px] !h-[22px]"
                    iconStyle="Outline"
                    width="22px"
                    height="22px"
                    color="#ff5400"
                  />
                </section>
                <section className="flex flex-col items-center justify-center gap-1">
                  <p className="text-slate-900 font-semibold">بلیط انتخابی</p>
                  <p className="text-slate-600 font-medium">سانس آقایان</p>
                </section>
              </section>
              <section className="flex items-start gap-3">
                <section className="flex items-center justify-center border border-solid border-orange-500 rounded-xl w-12 h-12">
                  <HourglassLine
                    className="!w-[22px] !h-[22px]"
                    iconStyle="Outline"
                    width="22px"
                    height="22px"
                    color="#ff5400"
                  />
                </section>
                <section className="flex flex-col items-center justify-center gap-1">
                  <p className="text-slate-900 font-semibold">مهلت استفاده:</p>
                  <p className="text-slate-600 font-medium">شنبه، 00 ماه 1400</p>
                </section>
              </section>
            </div>
          </section>
          <section className="bg-white w-[360px] h-[270px] rounded-2xl p-4 flex flex-col gap-8">
            <section className="flex px-3 py-1 gap-4 justify-between items-center">
              <p className="text-sm font-semibold text-slate-700 ml-1">قیمت اصلی</p>
              <p className="text-slate-400 mr-1 text-sm font-bold">
                <span className="ml-1">000,000</span> تومان
              </p>
            </section>
            <section className="flex px-3 py-1 gap-4 justify-between items-center">
              <div className="flex gap-2 items-center justify-center">
                <p className="text-sm font-semibold text-slate-700">هدیه ما به شما</p>
                <div className="flex rounded-full justify-center items-center gap-[2px] h-[20px] py-[2px] px-[3px] bg-Folly-500">
                  <p className="text-10 mt-[3px] font-bold text-white">% 00</p>
                  <Sale color="#FFFFFF" width={14} height={14} size={14} />
                </div>
              </div>
              <p className="text-slate-400 mr-1 text-sm font-bold">
                <span className="text-[#12B76A] ml-1">000,000</span> تومان
              </p>
            </section>
            <div className="flex flex-col gap-2">
              <Divider className="w-full bg-orange-200" />
              <section className="flex px-3 py-1 gap-4 justify-between items-center">
                <p className="text-sm font-semibold text-slate-700">مبلغ قابل پرداخت</p>
                <p className="text-slate-400 mr-1 text-sm font-bold">
                  <span className="text-slate-700 ml-1">000,000</span> تومان
                </p>
              </section>
            </div>
            <ButtonZiva
              buttonText="پرداخت و دریافت بلیط"
              type="button"
              className={`w-full h-10 font-semibold text-sm p-5`}
              theme="orange"
            />
          </section>
        </div>
        <section className="gap-10 flex flex-col lg-max:gap-6">
          <NotificationList notifications={notifications} />
          <BoxDescription clsasName="mt-10 " name="تعداد نفرات" Icon={UsersGroupRounded}>
            <section className="flex px-3 py-1 gap-4 justify-between items-center">
              <div className="flex gap-2 items-center justify-center">
                <p className="text-lg font-semibold text-slate-400 ml-1">
                  تعداد بزرگسال:
                </p>
                <ButtonZiva
                  buttonText="0"
                  type="button"
                  className={`w-32 sm-max:w-full h-11 font-semibold text-lg border border-solid border-slate-400`}
                  leftIcon={
                    <div className="flex items-center justify-center bg-slate-400 w-11 h-11">
                      <Image
                        src={Minus}
                        alt="Minus"
                        height={13}
                        width={16}
                        color="white"
                      />
                    </div>
                  }
                  rightIcon={
                    <div className="flex items-center justify-center bg-slate-400 w-11 h-11">
                      <Image src={Plus} alt="plus" height={13} width={16} color="white" />
                    </div>
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <section className="flex items-center justify-center gap-2">
                  <div className="relative z-20 text-base font-semibold text-slate-600">
                    000 , 000 تومان
                    <div className="absolute top-4 left-2 right-2 h-0.5 bg-Folly-500 transform rotate-[-12deg] z-10"></div>
                  </div>
                  <div className="flex rounded-full justify-center items-center gap-[2px] h-[20px] py-[2px] px-[3px] bg-Folly-500">
                    <p className="text-10 mt-[3px] font-bold text-white">% 00</p>
                  </div>
                </section>
                <p className="text-lg text-slate-400 mr-1 font-bold">
                  <span className="ml-1">000,000</span> تومان
                </p>
              </div>
            </section>
            <section className="flex px-3 py-1 gap-4 justify-between items-center">
              <div className="flex gap-2 items-center justify-center">
                <p className="text-lg font-semibold text-slate-400 ml-1">تعداد خردسال:</p>
                <ButtonZiva
                  buttonText="0"
                  type="button"
                  className={`w-32 sm-max:w-full h-11 font-semibold text-lg border border-solid border-slate-400`}
                  leftIcon={
                    <div className="flex items-center justify-center bg-slate-400 w-11 h-11">
                      <Image
                        src={Minus}
                        alt="Minus"
                        height={13}
                        width={16}
                        color="white"
                      />
                    </div>
                  }
                  rightIcon={
                    <div className="flex items-center justify-center bg-slate-400 w-11 h-11">
                      <Image src={Plus} alt="plus" height={13} width={16} color="white" />
                    </div>
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <section className="flex items-center justify-center gap-2">
                  <div className="relative z-20 text-base font-semibold text-slate-600">
                    000 , 000 تومان
                    <div className="absolute top-4 left-2 right-2 h-0.5 bg-Folly-500 transform rotate-[-12deg] z-10"></div>
                  </div>
                  <div className="flex rounded-full justify-center items-center gap-[2px] h-[20px] py-[2px] px-[3px] bg-Folly-500">
                    <p className="text-10 mt-[3px] font-bold text-white">% 00</p>
                  </div>
                </section>
                <p className="text-lg text-slate-400 mr-1 font-bold">
                  <span className="ml-1">000,000</span> تومان
                </p>
              </div>
            </section>
          </BoxDescription>
          <Schedule men={menSchedule} women={womenSchedule} />
          <Rules rules={rulesList} />
        </section>
      </div>
    </div>
  );
};

export default BuyTicket;
