import CarouselCollection from "../../components/CarouselCollection/CarouselCollection";
import ImageSampel from "../../../public/RectangleLoginPage.webp";
import { EmblaOptionsType } from "embla-carousel";
import {
  ArrowDown,
  HandStars,
  Heart,
  MapPointWave,
  ClipboardList,
  Ticket,
  ChatLine,
  ClockCircle,
  DangerCircle,
  ClipboardCheck,
  FacemaskSquare,
  MenuDotsCircle,
  InfoCircle,
  Clipboard,
} from "solar-icon-set";
import StarWhite from "../../../public/startWhite.svg";
import Image from "next/image";
import Map from "../../../public/Button.webp";
import { getImageProps } from "next/image";
import SegmentedZiva from "../../components/SegmentedZiva";
import BoxDescription from "../../components/BoxDescription";
import { Metadata } from "next";
import ButtonZiva from "../../components/ButtonZiva";
import BoxMuliCarousel from "../../components/BoxMulitiCarousel/BoxMuliCarousel";
import Banner from "../../components/Banner";
import BuyTicket from "../../components/buyTicket";
import Discount from "../../components/Discount";
import Rate from "antd/es/rate";
import RegisterComment from "../../components/RegisterComment";
import Comment from "../../components/Comment";

export const metadata: Metadata = {
  title: "مجموعه",
  description: "اسختر فلان در قم",
};

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

const Collection: React.FC = () => {
  const SLIDES = [
    { src: ImageSampel, alt: "استخر" },
    { src: ImageSampel, alt: "استخر" },
    { src: ImageSampel, alt: "استخر" },
    { src: ImageSampel, alt: "استخر" },
    { src: ImageSampel, alt: "استخر" },
    { src: ImageSampel, alt: "استخر" },
  ];

  const SegmentZiva = [
    {
      Icon: <ClipboardList size={24} iconStyle="Outline" />,
      name: "معرفی مجموعه",
      hash: "#introduction",
    },
    {
      Icon: <HandStars size={24} iconStyle="Outline" />,
      name: "امکانات",
      hash: "#amenities",
    },
    {
      Icon: <Ticket size={24} iconStyle="Outline" />,
      name: "خرید بلیط",
      hash: "#ticket",
    },
    {
      Icon: <ChatLine size={24} iconStyle="Outline" />,
      name: "نظرات",
      hash: "#comments",
    },
  ];

  const OPTIONS: EmblaOptionsType = { align: "center", direction: "rtl", loop: true };

  const slideCard = [
    {
      name: "استخر ۱",
      discount: "10",
      like: true,
      location: "قم بلوار فردوسی",
      navigate: "collection/poll",
      price: "10000",
      rate: 0.5,
    },
    {
      name: "استخر ۲",
      discount: "15",
      like: false,
      location: "تهران خیابان انقلاب",
      navigate: "collection/poll",
      price: "15000",
      rate: 4.0,
    },
    {
      name: "استخر ۳",
      discount: "20",
      like: true,
      location: "اصفهان میدان نقش جهان",
      navigate: "collection/poll",
      price: "12000",
      rate: 3.5,
    },
    {
      name: "استخر ۴",
      discount: "5",
      like: false,
      location: "مشهد امام رضا",
      navigate: "collection/poll",
      price: "8000",
      rate: 2.0,
    },
    {
      name: "استخر ۵",
      discount: "25",
      like: true,
      location: "شیراز حافظیه",
      navigate: "collection/poll",
      price: "20000",
      rate: 4.5,
    },
    {
      name: "استخر 6",
      discount: "10",
      like: true,
      location: "قم بلوار فردوسی",
      navigate: "collection/poll",
      price: "10000",
      rate: 0.5,
    },
    {
      name: "استخر 7",
      discount: "15",
      like: false,
      location: "تهران خیابان انقلاب",
      navigate: "collection/poll",
      price: "15000",
      rate: 4.0,
    },
    {
      name: "استخر 8",
      discount: "20",
      like: true,
      location: "اصفهان میدان نقش جهان",
      navigate: "collection/poll",
      price: "12000",
      rate: 3.5,
    },
    {
      name: "استخر 9",
      discount: "5",
      like: false,
      location: "مشهد امام رضا",
      navigate: "collection/poll",
      price: "8000",
      rate: 2.0,
    },
    {
      name: "استخر 10",
      discount: "25",
      like: true,
      location: "شیراز حافظیه",
      navigate: "collection/poll",
      price: "20000",
      rate: 4.5,
    },
  ];

  const buttonTexts = ["استخر کودکان", "استخر بزرگسالان", "استخر عمومی"];

  const {
    props: { srcSet },
  } = getImageProps({ alt: "", width: 128, height: 128, src: Map });
  const backgroundImage = getBackgroundImage(srcSet);
  const style = { backgroundImage };

  return (
    <div className="overflow-hidden flex justify-center mt-10 !py-12 sm-max:!py-8 w-full h-full gap-32 bg-slate-50">
      <div className="containerZiva flex flex-col gap-28">
        <section className="flex p-6 gap-8 lg-max:flex-col-reverse w-full h-auto rounded-3xl justify-between bg-white">
          <div className="w-full h-full gap-10 lg-max:gap-[1.4rem] flex flex-col justify-between">
            <div className="flex flex-col gap-10">
              <div className="flex justify-between items-start">
                <h1 className="text-40 font-black text-slate-700">نام استخر</h1>
                <div className="flex flex-row justify-between items-center">
                  <div className="flex justify-center items-center gap-1">
                    <Heart iconStyle={"Broken"} size={14} color="#FF0054" />
                    <div className="rounded-lg gap-[3px] flex w-10 h-5 flex-row justify-center items-center bg-amber-400">
                      <span className="text-white mt-[3px] font-bold text-10">2.3</span>
                      <Image
                        src={StarWhite}
                        alt="ستاره"
                        color="#FFBD00"
                        width={12}
                        height={12}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center gap-2">
                  <div className="w-6">
                    <MapPointWave color="#FF5400" size={24} />
                  </div>
                  <p className="text-slate-600 text-lg lg-max:text-base font-normal">
                    آدرس کامل استخر لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ و با استفاده از طراحان گرافیک است
                  </p>
                </div>
                <div className="w-full justify-end flex">
                  <button
                    className="bg-no-repeat scale-110 w-28 h-8"
                    style={style}
                  ></button>
                </div>
              </div>
            </div>
            <div className="flex h-[112px] lg-max:h-auto flex-row lg-max:flex-col gap-6 lg-max:gap-4">
              <div className="relative w-44 xl-max:w-52 lg-max:w-full lg-max:flex-row flex justify-between flex-col p-4 bg-slate-50 rounded-2xl">
                <div>
                  <span className="font-semibold text-slate-400 text-base">
                    قیمت گیشه
                  </span>
                </div>
                <div className="relative z-20 text-lg font-semibold text-slate-600">
                  100,000 تومان
                  <div className="absolute top-4 left-2 right-2 h-0.5 bg-Folly-500 transform rotate-[-12deg] z-10"></div>
                </div>
              </div>
              <div className="w-full flex justify-between flex-col p-4 rounded-2xl bg-cover bg-RectangleOrange">
                <div className="flex flex-row justify-between">
                  <span className="font-semibold text-white text-base">قیمت زیوا</span>
                  <Discount color="#FF0054" discount={20} />
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
          <div className="w-96 lg-max:w-full">
            <CarouselCollection options={OPTIONS} slides={SLIDES} />
          </div>
        </section>
        <section>
          <SegmentedZiva options={SegmentZiva} />
        </section>

        {/* بخش‌های مرتبط با هر تب */}
        <section
          className="gap-10 flex flex-col lg-max:gap-6 scroll-mt-[184px]"
          id="introduction"
        >
          <BoxDescription name="اطلاعیه ها" Icon={DangerCircle}>
            <ul className="list-disc list-inside text-right text-base font-normal text-orange-300">
              <li>
                استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل
                می‌باشد
              </li>
              <li>
                استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل
                می‌باشد
              </li>
            </ul>
          </BoxDescription>
          <BoxDescription name="زمان‌بندی و سانس ها" Icon={ClockCircle}>
            <ul className="flex justify-between text-base md-max:flex-col gap-6  text-slate-700">
              <li className="gap-4">
                <span className="font-semibold">آقایان</span>
                <div className="font-normal mt-4">
                  روز های یک‌شنبه، سه‌سنبه و پنج شنبه از ساعت 00 : 00 الی 00 : 00 و روز
                  جمعه از ساعت 00 : 00 الی 00 : 00
                </div>
              </li>
              <li className="gap-4">
                <span className="font-semibold">بانوان</span>
                <div className="font-normal mt-4">
                  روز های یک‌شنبه، سه‌سنبه و پنج شنبه از ساعت 00 : 00 الی 00 : 00 و روز
                  جمعه از ساعت 00 : 00 الی 00 : 00
                </div>
              </li>
            </ul>
          </BoxDescription>
          <BoxDescription
            clsasName=""
            name="قوانین و شرایط استفاده"
            Icon={ClipboardCheck}
          >
            <p className="text-base font-normal text-slate-500">
              ۲۰ دقیقه پایانی سانس به دوش‌گرفتن و تعویض لباس اختصاص دارد.<br></br>
              کودکان از 5 سال به بالا پذیرش می شوند.
            </p>
          </BoxDescription>
        </section>

        <section className="gap-8 flex flex-col">
          <h1
            className="text-black text-center font-bold text-4xl scroll-mt-[184px]"
            id="amenities"
          >
            امکانات و ویژگی ها
          </h1>
          <div className="flex justify-center items-center px-20 gap-4">
            {buttonTexts.map((text, index) => (
              <ButtonZiva
                key={index}
                className="h-10 w-auto rounded-full border text-slate-900"
                theme="default"
                buttonText={text}
                variant="bordered"
                type="submit"
                rightIcon={<FacemaskSquare size={17} color="#FF5400" />}
              />
            ))}
          </div>
        </section>

        <section className="gap-8 px-24 lg-max:px-10 md-max:px-0 flex flex-col">
          <h1
            className="text-black text-center font-bold text-4xl scroll-mt-[184px]"
            id="ticket"
          >
            خرید بلیط استخر
          </h1>
          <div className="flex flex-col gap-6">
            <BuyTicket
              priceDiscount="12"
              background="#9E0059"
              childrenDiscount={12}
              childrenPrice="1222"
              discount={22}
              name="سانس بانوان"
              navigate="//"
              price="1222"
              className="w-full"
            />
            <BuyTicket
              priceDiscount="12"
              background="#390099"
              discount={22}
              name="سانس آقایان"
              navigate="//"
              price="1222"
              className="w-full"
            />
          </div>
        </section>

        <section className="gap-8 flex flex-col">
          <BoxDescription clsasName="mt-10 " name="معرفی استخر" Icon={Clipboard}>
            <p className="text-base font-normal text-slate-500">
              ۲۰ دقیقه پایانی سانس به دوش‌گرفتن و تعویض لباس اختصاص دارد.<br></br>
              کودکان از 5 سال به بالا پذیرش می شوند.
            </p>
          </BoxDescription>
          <BoxDescription clsasName="mt-10 " name="مشخصات استخر" Icon={MenuDotsCircle}>
            <p className="text-base font-normal text-slate-500">
              طول استخر: 25 متر
              <br />
              عرض استخر 50 متر
              <br />
              کمترین ارتفاع: 1 متر
              <br />
              بیشترین ارتفاع: 3 متر
            </p>
          </BoxDescription>
        </section>

        <section className="w-full">
          <BoxMuliCarousel
            costomNavigte="مشاهده همه استخر ها"
            SLIDES={slideCard}
            DivderName="مجموعه‌های پیشنهادی"
            DividerNavigate="/collection"
          />
        </section>
        <div className="flex h-[104px] justify-between w-full gap-6">
          <Banner className="w-full" />
        </div>
        <section className="flex flex-col gap-6 scroll-mt-[184px]" id="comments">
          <div className="bg-white w-full flex flex-row md-max:flex-col md-max:items-start justify-between items-center px-6 py-4 gap-8  rounded-2xl shadow-Box">
            <div className="flex gap-4 text-slate-600 items-center">
              <div className="flex gap-2 justify-center items-center">
                <span className="text-slate-800 text-3xl sm-max:text-2xl font-bold">
                  0.0
                </span>
                <span className="font-semibold text-base sm-max:text-sm">از</span>
                <span className="text-slate-600 font-bold text-2xl sm-max:text-xl">
                  5
                </span>
              </div>
              <span className="text-lg sm-max:text-base font-medium">
                از مجموع 00 نظر ثبت شده
              </span>
            </div>
            <div>
              <Rate allowHalf disabled defaultValue={2.5} />
            </div>
          </div>
          <div className="flex gap-6 items-start justify-between lg-max:flex-col">
            <RegisterComment />
            <div className="w-full">
              <BoxDescription clsasName="w-full" name="نظرات مشتریان" Icon={ChatLine}>
                <div className="flex gap-2 items-center">
                  <div className="w-4">
                    <InfoCircle color="#1570EF" size={16} iconStyle="Bold" />
                  </div>
                  <span className="text-base font-normal text-slate-500">
                    در زیوا، فقط نظرات کاربرانی ثبت می‌شود که بلیط این مجموعه را تهییه و
                    استفاده کرده‌اند.
                  </span>
                </div>
                <div className="flex flex-col gap-14">
                  <Comment
                    isAgree={false}
                    isdisAgree={true}
                    agree={1}
                    disAgree={3}
                    name="نام و نام خانوادگی"
                    date="1400/00/00"
                    Weaknesses={["نقطه ضعف 1", "نقطه ضعف 2"]}
                    strengths={["نقطه قوت 1", "نقطه قوت 2"]}
                    rate={0}
                    text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
                  />
                </div>
              </BoxDescription>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Collection;
