import ImageSampel from "../../../public/RectangleLoginPage.webp";
import { EmblaOptionsType } from "embla-carousel";
import {
  HandStars,
  ClipboardList,
  Ticket,
  ChatLine,
  FacemaskSquare,
  MenuDotsCircle,
  InfoCircle,
  Clipboard,
} from "solar-icon-set";
import SegmentedZiva from "../../components/SegmentedZiva";
import BoxDescription from "../../components/BoxDescription";
import { Metadata } from "next";
import ButtonZiva from "../../components/ButtonZiva";
import BoxMuliCarousel from "../../components/BoxMulitiCarousel/BoxMuliCarousel";
import Banner from "../../components/Banner";
import BuyTicket from "../../components/buyTicket";
import Rate from "antd/es/rate";
import RegisterComment from "../../components/RegisterComment";
import Comment from "../../components/Comment";
import PoolCard from "@/app/components/PollCard";
import NotificationList from "@/app/components/NotificationList";
import Schedule from "@/app/components/Schedule";
import Rules from "@/app/components/Roles";

export const metadata: Metadata = {
  title: "مجموعه",
  description: "اسختر فلان در قم",
};

const Collection: React.FC = () => {
  const slides = [
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

  const notifications = [
    "استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل می‌باشد",
    "استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل می‌باشد",
  ];

  const menSchedule = [
    {
      label: "آقایان",
      schedule: "روز های یک‌شنبه، سه‌شنبه و پنج شنبه از ساعت 00 : 00 الی 00 : 00 و روز جمعه از ساعت 00 : 00 الی 00 : 00"
    }
  ];

  const womenSchedule = [
    {
      label: "بانوان",
      schedule: "روز های یک‌شنبه، سه‌شنبه و پنج شنبه از ساعت 00 : 00 الی 00 : 00 و روز جمعه از ساعت 00 : 00 الی 00 : 00"
    }
  ];

  const rulesList = [
    "۲۰ دقیقه پایانی سانس به دوش‌گرفتن و تعویض لباس اختصاص دارد.",
    "کودکان از 5 سال به بالا پذیرش می شوند."
  ];

  const slideCard = [
    {
      name: "استخر فردوس",
      discount: "10",
      like: true,
      location: "قم بلوار فردوسی",
      navigate: "collection",
      price: "10000",
      rate: 0.5,
    },
    {
      name: "استخر غدیر",
      discount: "15",
      like: false,
      location: "تهران خیابان انقلاب",
      navigate: "collection",
      price: "15000",
      rate: 4.0,
    },
  ];

  const buttonTexts = ["استخر کودکان", "استخر بزرگسالان", "استخر عمومی"];

  return (
    <div className="overflow-hidden flex justify-center mt-10 !py-12 sm-max:!py-8 w-full h-full gap-32 bg-slate-50">
      <div className="containerZiva flex flex-col gap-28">
        <PoolCard
          name="استخر فردوس"
          rating={0}
          address="آدرس کامل استخر لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ و با استفاده از طراحان گرافیک است"
          link="/buyTicket"
          linkBuyTicket="/buyTicket"
          gatePrice="100,000 تومان"
          zivaPrice="80,000 تومان"
          discount={20}
          showCarousel={true}
          slides={slides}
          options={OPTIONS}
        />

        <section>
          <SegmentedZiva options={SegmentZiva} />
        </section>

        {/* بخش‌های مرتبط با هر تب */}
        <section
          className="gap-10 flex flex-col lg-max:gap-6 scroll-mt-[184px]"
          id="introduction"
        >
          <NotificationList notifications={notifications} />
          <Schedule men={menSchedule} women={womenSchedule} />
          <Rules rules={rulesList} />
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
              priceDiscount="000,000"
              background="#FF5400"
              // childrenDiscount={12}
              // childrenPrice="1222"
              discount={0.0}
              name="بلیط آزاد"
              navigate="/buyTicket"
              price="000,000"
              className="w-full"
            />
            {/* <BuyTicket
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
            /> */}
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
            customNavigate="مشاهده همه استخر ها"
            slides={slideCard}
            DividerName="مجموعه‌های پیشنهادی"
            DividerNavigate="/collection"
          />
        </section>
        <div className="flex h-[104px] justify-between w-full gap-6">
          <Banner className="w-full" />
        </div>
        <section className="flex flex-col gap-6 scroll-mt-[184px]" id="comments">
          <div className="bg-white w-full flex flex-row md-max:flex-col md-max:items-start justify-between items-center px-6 py-4 gap-8  rounded-2xl shadow-Box">
            <div className="flex gap-4 text-slate-600 items-center">
              {/* <div className="flex gap-2 justify-center items-center">
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
              </span> */}
              <span className="text-lg sm-max:text-base font-medium">
                در حال حاضر، هیچ نظری برای این مجموعه ثبت نشده
              </span>
            </div>
            <div>
              <Rate allowHalf disabled defaultValue={0} />
            </div>
          </div>
          {/* <div className="flex gap-6 items-start justify-between lg-max:flex-col">
            <RegisterComment />
            <div className="w-full">
              <BoxDescription clsasName="w-full" name="نظرات مشتریان" Icon={ChatLine}>
                <div className="flex gap-2 items-center">
                  <div className="w-4">
                    <InfoCircle color="#1570EF" size={16} iconStyle="Bold" />
                  </div>
                  <span className="text-base font-normal text-slate-500">
                    در زیوا، فقط نظرات کاربرانی ثبت می‌شود که بلیط این مجموعه را تهیه و
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
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default Collection;