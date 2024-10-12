import { EmblaOptionsType } from "embla-carousel";
import {
  HandStars,
  ClipboardList,
  Ticket,
  ChatLine,
  MenuDotsCircle,
  Clipboard,
} from "solar-icon-set";
import SegmentedZiva from "../../../components/SegmentedZiva";
import BoxDescription from "../../../components/BoxDescription";
import { Metadata } from "next";
import ButtonZiva from "../../../components/ButtonZiva";
import BoxMuliCarousel from "../../../components/BoxMulitiCarousel/BoxMuliCarousel";
import Banner from "../../../components/Banner";
import BuyTicket from "../../../components/buyTicket";
import Rate from "antd/es/rate";
import PoolCard from "@/app/components/PollCard";
import Schedule from "@/app/components/Schedule";
import Rules from "@/app/components/Roles";
import ghadir1 from "@/public/ghadir/ghadir_1_800_400.jpg"
import ghadir2 from "@/public/ghadir/ghadir_2_800_400.jpg"
import ghadir3 from "@/public/ghadir/ghadir_3_800_400.jpg"
import ghadir4 from "@/public/ghadir/ghadir_4_800_400.jpg"
import ghadir5 from "@/public/Ghadir/ghadir_5_800_400.jpg"
import ghadir6 from "@/public/Ghadir/ghadir_6_800_400.jpg"
export const metadata: Metadata = {
  title: "استخر غدیر",
  description: "قم ، بلوار شهید نواب صفوی ، کوچه ۱۴",
};

const Collection: React.FC = () => {
  const slides = [
    { src: ghadir1, alt: "استخر" },
    { src: ghadir2, alt: "استخر" },
    { src: ghadir3, alt: "استخر" },
    { src: ghadir4, alt: "استخر" },
    { src: ghadir5, alt: "استخر" },
    { src: ghadir6, alt: "استخر" },
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


  const menSchedule = [
    {
      label: "آقایان",
      schedule: "هر روز از ساعت ۱۷ تا ۲۳ , یک شنبه ها از ساعت ۱۸:۳۰ تا  ,چهارشنبه و پنج شنبه از ساعت ۲۳ تا ۲ بامداد۲۳"
    }
  ];

  const womenSchedule = [
    {
      label: "بانوان",
      schedule: "پنج شنبه و جمعه از ساعت ۹ تا ۱ , یک شنبه و سه شنبه از ساعت ۹ تا ۱۲"
    }
  ];

  const rulesList = [
    "نیم ساعت پایانی سانس مخصوص دوش و رختکن می باشد.",
    "پذیرش کودکان زیر ۴ سال ممنون می باشد.",
    "ذیرش دختر بچه در سانس آقایان و پسربچه در سانس بانوان ممنوع می باشد."
  ];

  const slideCard = [
    {
      name: "استخر مجلل فردوس",
      discount: "73",
      like: false,
      location: "قم ، بلوار جمهوری ، ابتدای بلوار شهیدان محمود نژاد ، کوچه ۱۲",
      navigate: "/collection/Ferdos",
      price: "95,000",
      rate: 0.0,
    },
  ];

  const buttonTexts = ["سونا خشک","سکوی شیرجه","سونا بخار","جکوزی آب گرم","سالن ماساژ","پارکینگ رایگان","آب سردکن","فروشگاه لوازم شنا","بوفه خوراکی","فست فود","کافی شاپ"];

  return (
    <div className="overflow-hidden flex justify-center mt-10 !py-12 sm-max:!py-8 w-full h-full gap-32 bg-slate-50">
      <div className="containerZiva flex flex-col gap-28">
        <PoolCard
          name="استخر غدیر"
          rating={0}
          address="قم ، بلوار شهید نواب صفوی ، کوچه ۱۴"
          link="https://nshn.ir/4bvbsiy72xvOHM"
          linkBuyTicket="/buyTicket"
          gatePrice="120,000 تومان"
          zivaPrice="75,000 تومان"
          discount={63}
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
          {/* <NotificationList notifications={notifications} /> */}
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
          <div className="flex flex-wrap justify-center items-center px-20 gap-4">
            {buttonTexts.map((text, index) => (
              <ButtonZiva
                key={index}
                className="h-10 w-auto rounded-full border text-slate-900"
                theme="default"
                buttonText={text}
                variant="bordered"
                type="submit"
              // rightIcon={<FacemaskSquare size={17} color="#FF5400" />}
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
              priceDiscount="75,000"
              background="#FF5400"
              discount={63}
              name="بلیط سانس عمومی"
              navigate="/buyTicket"
              price="120,000"
              className="w-full"
            />
            <BuyTicket
              priceDiscount="72,000"
              background="#390099"
              discount={60}
              name="بلیط سانس شبانه ( ویژه آقایان )"
              navigate="/buyTicket"
              price="120.000"
              className="w-full"
            />
          </div>
        </section>

        <section className="gap-8 flex flex-col">
          <BoxDescription clsasName="mt-10 " name="معرفی استخر" Icon={Clipboard}>
            <p className="text-base font-normal text-slate-500">
              استخر غدیر قم یکی از بزرگترین استخرهای قم واقع در بلوار شهید نواب صفوی می باشد که وابسته به استانداری استان قم می باشد . این استخر یکی از بهترین کیفیت های آب را در بین استخر قم دارا می یاشد . این استخر در سانس های متنوع عمومی ، سانس های شبانه عمومی و سانس های خصوصی نیز برگزار می کند . استخر غدیر یکی از تخصصی ترین استخرها جهت آموزش عمومی و خصوصی شنا می باشد.            </p>
          </BoxDescription>
          <BoxDescription clsasName="mt-10 " name="مشخصات استخر" Icon={MenuDotsCircle}>
            <p className="text-base font-normal text-slate-500">
              طول استخر ۲۵ متر
              <br />
              عرض استخر ۱۲.۵ متر
              <br />
              قسمت کم عمق ۹۰ سانتیمتر
              <br />
              قسمت عمیق ۳ متر
              <br />
              سیستم تصفیه شنی

              <br />
              سیستم گندزدایی کلر

              <br />
              سرویس بهداشتی ایرانی و فرنگی

              <br />
              دوش های عمومی و انفرادی
              <br />
              سیستم تهویه هواکش و هواساز            </p>
          </BoxDescription>
        </section>

        <section className="w-full">
          <BoxMuliCarousel
            customNavigate="مشاهده همه استخر ها"
            slides={slideCard}
            DividerName="مجموعه‌های پیشنهادی"
            DividerNavigate="/search"
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